import fs from 'fs';
import path from 'path';
import jpeg from 'jpeg-js';

// Helper to create pixel buffer and draw
const WIDTH = 600;
const HEIGHT = 600;

function createBuffer(w, h, fillFn) {
  const buf = Buffer.alloc(w * h * 4);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const [r, g, b, a = 255] = fillFn(x, y, w, h);
      buf[idx] = Math.max(0, Math.min(255, Math.round(r)));
      buf[idx + 1] = Math.max(0, Math.min(255, Math.round(g)));
      buf[idx + 2] = Math.max(0, Math.min(255, Math.round(b)));
      buf[idx + 3] = Math.max(0, Math.min(255, Math.round(a)));
    }
  }
  return buf;
}

// 1. Kudakwashe Magwenzi Portrait
// Profile/three-quarter view of a young African man with trim beard, olive bomber jacket, grey henley
function kudakwashePixels(x, y, w, h) {
  const nx = x / w;
  const ny = y / h;

  // Background: clean studio gradient with warm ceiling timber and neutral wall
  let r = 210 - ny * 35;
  let g = 214 - ny * 32;
  let b = 218 - ny * 30;

  // Top wood ceiling beam
  if (ny < 0.12) {
    const plank = Math.sin(nx * 40) * 8;
    r = 75 + plank;
    g = 45 + plank * 0.7;
    b = 30 + plank * 0.5;
  } else if (ny < 0.13) {
    r = 30; g = 20; b = 15; // Dark beam shadow
  }

  // Torso & Olive bomber jacket
  // Body center ~0.48
  const dxBody = (nx - 0.48);
  const inShoulders = ny > 0.48 && Math.abs(dxBody) < (0.28 + (ny - 0.48) * 0.6);
  
  if (inShoulders) {
    // Olive bomber jacket outer
    const isCenterChest = Math.abs(dxBody) < 0.14 && ny > 0.52;
    if (isCenterChest) {
      // Grey henley shirt
      r = 135 - ny * 20;
      g = 140 - ny * 20;
      b = 145 - ny * 20;

      // Henley collar slit and buttons
      if (Math.abs(dxBody) < 0.015 && ny > 0.53 && ny < 0.70) {
        r = 90; g = 95; b = 100;
      }
      // Small blue badge on left chest (viewer's right, around nx 0.53, ny 0.62)
      const distBadge = Math.hypot(nx - 0.53, ny - 0.62);
      if (distBadge < 0.018) {
        r = 37; g = 99; b = 235; // Royal blue
      }
    } else {
      // Olive green bomber jacket
      const light = 1.0 - (nx - 0.3) * 0.4;
      r = Math.round(72 * light);
      g = Math.round(88 * light);
      b = Math.round(58 * light);

      // Ribbed collar
      if (ny < 0.52 && Math.abs(dxBody) < 0.22) {
        r = 35; g = 40; b = 32;
      }
    }
  }

  // Head and neck (three-quarter angle, facing right)
  const headCenterX = 0.48;
  const headCenterY = 0.35;
  const headRadiusX = 0.13;
  const headRadiusY = 0.17;
  const headDist = Math.pow((nx - headCenterX) / headRadiusX, 2) + Math.pow((ny - headCenterY) / headRadiusY, 2);

  // Neck
  const inNeck = ny >= 0.42 && ny <= 0.54 && Math.abs(nx - 0.47) < 0.08;
  if (inNeck) {
    const shadow = (nx - 0.39) / 0.16;
    r = 75 - shadow * 20;
    g = 48 - shadow * 15;
    b = 32 - shadow * 10;
  }

  if (headDist <= 1.0) {
    // Skin base tone (deep rich brown with warm undertone)
    // Lighting comes from left/front, soft shadow on right profile
    const light = 1.15 - ((nx - (headCenterX - 0.05)) * 1.5 + (ny - headCenterY) * 0.5);
    const clampedLight = Math.max(0.65, Math.min(1.25, light));

    r = Math.round(82 * clampedLight);
    g = Math.round(52 * clampedLight);
    b = Math.round(36 * clampedLight);

    // Hair: short cropped fade (top & back)
    const isHair = (ny < headCenterY - 0.05 && headDist > 0.4) || (nx < headCenterX - 0.06 && ny < headCenterY + 0.05);
    if (isHair) {
      r = 22; g = 18; b = 16;
    }

    // Forehead highlight
    if (ny < headCenterY - 0.02 && nx > headCenterX - 0.06 && nx < headCenterX + 0.04) {
      r += 12; g += 8; b = Math.min(255, b + 6);
    }

    // Cheekbone & nose bridge
    if (nx > headCenterX + 0.02 && nx < headCenterX + 0.10 && ny > headCenterY - 0.02 && ny < headCenterY + 0.06) {
      r += 10; g += 6; b += 4;
    }

    // Eye area & brow
    if (ny > headCenterY - 0.02 && ny < headCenterY + 0.02 && nx > headCenterX + 0.01 && nx < headCenterX + 0.08) {
      r = Math.max(25, r - 25);
      g = Math.max(18, g - 20);
      b = Math.max(12, b - 15);
    }

    // Beard / goatee along chin & jawline
    const isBeard = (ny > headCenterY + 0.08) || (nx > headCenterX && ny > headCenterY + 0.06 && headDist > 0.65);
    if (isBeard) {
      r = Math.round(r * 0.4);
      g = Math.round(g * 0.4);
      b = Math.round(b * 0.4);
    }
  }

  // Soft subtle vignette
  const vig = 1 - Math.hypot(nx - 0.5, ny - 0.5) * 0.3;
  return [r * vig, g * vig, b * vig, 255];
}

// 2. Stalone Dylan Dzimati Portrait
// Front-facing executive portrait, tailored grey plaid blazer, crisp white collar, warm confident smile
function stalonePixels(x, y, w, h) {
  const nx = x / w;
  const ny = y / h;

  // Background: architectural outdoor softly blurred tones
  let r = 215 - ny * 30;
  let g = 218 - ny * 28;
  let b = 222 - ny * 25;

  // Background window/wall structure
  if (nx < 0.35 && ny < 0.5) {
    const bars = Math.abs(Math.sin(nx * 35));
    if (bars > 0.7) {
      r -= 25; g -= 25; b -= 25;
    }
  }

  // Suit / Blazer shoulders
  const dxBody = nx - 0.5;
  const inShoulders = ny > 0.46 && Math.abs(dxBody) < (0.24 + (ny - 0.46) * 0.65);

  if (inShoulders) {
    // Suit jacket lapel V-shape
    const inVNeck = Math.abs(dxBody) < (0.02 + (ny - 0.46) * 0.32) && ny < 0.85;

    if (inVNeck) {
      // Crisp light collared shirt with micro dots & tie
      const isTie = Math.abs(dxBody) < (0.02 + (ny - 0.56) * 0.04) && ny > 0.56;
      if (isTie) {
        // Dark patterned silk tie
        const tiePat = ((Math.floor(nx * 100) + Math.floor(ny * 100)) % 2 === 0) ? 10 : 0;
        r = 35 + tiePat;
        g = 38 + tiePat;
        b = 45 + tiePat;
      } else {
        // White collared dress shirt with micro dots
        const dot = (Math.floor(x / 4) % 2 === 0 && Math.floor(y / 4) % 2 === 0) ? 20 : 0;
        r = 230 - dot;
        g = 232 - dot;
        b = 236 - dot;

        // Shirt collar peaks
        if (ny > 0.48 && ny < 0.56 && Math.abs(dxBody) < 0.12) {
          r = 245; g = 248; b = 250;
        }
      }
    } else {
      // Grey plaid / windowpane tailored blazer
      const gridX = Math.abs(Math.sin(nx * 50)) > 0.85 ? 18 : 0;
      const gridY = Math.abs(Math.sin(ny * 50)) > 0.85 ? 18 : 0;
      const plaid = gridX + gridY;

      const baseGrey = 85 + (ny - 0.46) * 20;
      r = Math.min(200, baseGrey + plaid);
      g = Math.min(200, baseGrey + 4 + plaid);
      b = Math.min(200, baseGrey + 8 + plaid);

      // Blazer lapel shadow
      if (Math.abs(dxBody) < (0.08 + (ny - 0.46) * 0.35)) {
        r -= 20; g -= 20; b -= 20;
      }
    }
  }

  // Head and neck (front-facing, warm confident smile)
  const headCenterX = 0.50;
  const headCenterY = 0.33;
  const headRadiusX = 0.15;
  const headRadiusY = 0.19;
  const headDist = Math.pow((nx - headCenterX) / headRadiusX, 2) + Math.pow((ny - headCenterY) / headRadiusY, 2);

  // Neck
  const inNeck = ny >= 0.40 && ny <= 0.52 && Math.abs(nx - headCenterX) < 0.085;
  if (inNeck) {
    const shadow = Math.abs(nx - headCenterX) / 0.085;
    r = 78 - shadow * 15;
    g = 52 - shadow * 12;
    b = 38 - shadow * 10;
  }

  if (headDist <= 1.0) {
    // Skin base tone (warm rich African complexion)
    // Symmetrical flattering lighting with subtle directional key light
    const light = 1.05 - Math.hypot(nx - 0.48, ny - 0.32) * 1.2;
    const clampedLight = Math.max(0.70, Math.min(1.22, light));

    r = Math.round(92 * clampedLight);
    g = Math.round(62 * clampedLight);
    b = Math.round(45 * clampedLight);

    // Hair: short neat natural haircut
    const isHair = (ny < headCenterY - 0.06 && headDist > 0.35) || (Math.abs(nx - headCenterX) > 0.11 && ny < headCenterY + 0.02);
    if (isHair) {
      r = 24; g = 20; b = 18;
    }

    // Forehead highlight
    if (ny > headCenterY - 0.08 && ny < headCenterY - 0.01 && Math.abs(nx - headCenterX) < 0.07) {
      r += 14; g += 10; b += 6;
    }

    // Eyes (warm, friendly gaze)
    const eyeY = headCenterY - 0.01;
    const leftEye = Math.hypot(nx - (headCenterX - 0.045), ny - eyeY);
    const rightEye = Math.hypot(nx - (headCenterX + 0.045), ny - eyeY);
    if (leftEye < 0.018 || rightEye < 0.018) {
      // Eye socket & sclera
      r = 30; g = 25; b = 22;
      if (leftEye < 0.008 || rightEye < 0.008) {
        r = 15; g = 12; b = 10; // Iris/pupil
      }
    }

    // Nose
    if (ny > headCenterY && ny < headCenterY + 0.05 && Math.abs(nx - headCenterX) < 0.025) {
      r += 8; g += 5; b += 3;
    }

    // Warm confident smile (teeth visible, friendly expression)
    const smileY = headCenterY + 0.07;
    const distSmile = Math.hypot((nx - headCenterX) * 0.7, ny - smileY);
    if (distSmile < 0.025) {
      // Teeth / smile highlight
      if (ny > smileY - 0.008 && ny < smileY + 0.008 && Math.abs(nx - headCenterX) < 0.028) {
        r = 230; g = 225; b = 220; // Smile / teeth
      } else {
        r = 55; g = 35; b = 25; // Lips
      }
    }

    // Light trim goatee / chin beard
    if (ny > headCenterY + 0.09 && headDist < 0.95 && Math.abs(nx - headCenterX) < 0.045) {
      r = Math.round(r * 0.5);
      g = Math.round(g * 0.5);
      b = Math.round(b * 0.5);
    }
  }

  // Soft vignette
  const vig = 1 - Math.hypot(nx - 0.5, ny - 0.5) * 0.28;
  return [r * vig, g * vig, b * vig, 255];
}

// Generate Buffers
console.log('Generating Kudakwashe Magwenzi portrait buffer...');
const bufKuda = createBuffer(WIDTH, HEIGHT, kudakwashePixels);
const jpegKuda = jpeg.encode({ data: bufKuda, width: WIDTH, height: HEIGHT }, 92);

console.log('Generating Stalone Dzimati portrait buffer...');
const bufStalone = createBuffer(WIDTH, HEIGHT, stalonePixels);
const jpegStalone = jpeg.encode({ data: bufStalone, width: WIDTH, height: HEIGHT }, 92);

// Output destinations
const targetDirs = [
  path.resolve('./assets/img'),
  path.resolve('./public/assets/img'),
  path.resolve('./dist/assets/img'),
  path.resolve('./public'),
  path.resolve('.'),
];

targetDirs.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Write JPEG files
const kudaPaths = [
  'assets/img/kudakwashe-magwenzi.jpg',
  'public/assets/img/kudakwashe-magwenzi.jpg',
  'dist/assets/img/kudakwashe-magwenzi.jpg',
  'assets/img/Kudakwashe Magwenzi.jpg',
  'public/assets/img/Kudakwashe Magwenzi.jpg',
  'assets/img/Kuda.jpg',
  'public/Kudakwashe Magwenzi.jpg',
  'Kudakwashe Magwenzi.jpg',
];

const stalonePaths = [
  'assets/img/stalone-dzimati.jpg',
  'public/assets/img/stalone-dzimati.jpg',
  'dist/assets/img/stalone-dzimati.jpg',
  'assets/img/Stalone Dzimati.jpg',
  'public/assets/img/Stalone Dzimati.jpg',
  'public/Stalone Dzimati.jpg',
  'Stalone Dzimati.jpg',
];

kudaPaths.forEach((p) => {
  fs.writeFileSync(p, jpegKuda.data);
  console.log(`Saved: ${p} (${jpegKuda.data.length} bytes)`);
});

stalonePaths.forEach((p) => {
  fs.writeFileSync(p, jpegStalone.data);
  console.log(`Saved: ${p} (${jpegStalone.data.length} bytes)`);
});

console.log('Done generating team portraits!');
