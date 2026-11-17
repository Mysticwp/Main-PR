const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const srcDir = path.join(root, "_logo-src");
const mediaDir = path.join(root, "public", "media");
const brandsDir = path.join(root, "public", "brands");

fs.mkdirSync(mediaDir, { recursive: true });
fs.mkdirSync(brandsDir, { recursive: true });

async function processLogo(input, outputBase, { invert = false, forDark = false } = {}) {
  const img = sharp(input).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    if (r < 28 && g < 28 && b < 28) {
      data[i + 3] = 0;
      continue;
    }
    if (invert && a > 10) {
      data[i] = 255 - r;
      data[i + 1] = 255 - g;
      data[i + 2] = 255 - b;
    } else if (forDark && a > 10) {
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      if (lum < 90) {
        const factor = 2.4;
        data[i] = Math.min(255, Math.round(r * factor + 40));
        data[i + 1] = Math.min(255, Math.round(g * factor + 40));
        data[i + 2] = Math.min(255, Math.round(b * factor + 40));
      }
    }
  }
  const raw = { raw: { width: info.width, height: info.height, channels: 4 } };
  await sharp(data, raw)
    .webp({ quality: 92, alphaQuality: 100 })
    .toFile(`${outputBase}.webp`);
  await sharp(data, raw).png().toFile(`${outputBase}.png`);
}

async function main() {
  const media = {
    "khaleej-times": "Khaleej-Times.png",
    "gulf-news": "Gulf-News.png",
    "al-bayan": "Al-Bayan.png",
    "al-watan": "Al-Watan.png",
    zawya: "Zawya.png",
    "emarat-al-youm": "Emarat-Al-Youm.png"
  };
  for (const [name, file] of Object.entries(media)) {
    await processLogo(path.join(srcDir, file), path.join(mediaDir, name), {
      invert: true
    });
    console.log("media", name);
  }

  const brands = {
    "meals-on-me": ["Meals-on-Me.png", false],
    zimaya: ["Zimaya.png", true],
    butterfly: ["Butterfly.png", false],
    zedor: ["Zedor.png", true],
    "aa-hmb": ["AA-HMB.png", false],
    "hmb-homes": ["HMB-Homes.png", false],
    "mirha-homes": ["Mirha-Homes.png", true]
  };
  for (const [name, [file, forDark]] of Object.entries(brands)) {
    await processLogo(path.join(srcDir, file), path.join(brandsDir, name), {
      forDark
    });
    console.log("brand", name);
  }

  const logoPath = path.join(srcDir, "mystic-pr-logo.png");
  const trimmed = await sharp(logoPath)
    .trim({ threshold: 12 })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const data = Buffer.from(trimmed.data);
  for (let i = 0; i < data.length; i += 4) {
    if (data[i] < 20 && data[i + 1] < 20 && data[i + 2] < 20) data[i + 3] = 0;
  }

  const clean = await sharp(data, {
    raw: {
      width: trimmed.info.width,
      height: trimmed.info.height,
      channels: 4
    }
  })
    .resize(512, 512, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  await sharp(clean).toFile(path.join(root, "app", "icon.png"));
  await sharp(clean)
    .resize(180, 180)
    .toFile(path.join(root, "app", "apple-icon.png"));
  await sharp(clean).toFile(path.join(root, "public", "icon.png"));
  await sharp(clean)
    .resize(180, 180)
    .toFile(path.join(root, "public", "apple-icon.png"));
  await sharp(clean)
    .resize(32, 32)
    .toFile(path.join(root, "public", "favicon-32.png"));
  console.log("favicon ok");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
