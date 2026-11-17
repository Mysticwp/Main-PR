const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const assetsRoot =
  "C:/Users/Muhammad Umer/.cursor/projects/c-Users-Muhammad-Umer-Documents-GitHub-mainpr-Main-PR/assets";
const outDir = path.join(__dirname, "..", "public", "media");
const tmpDir = path.join(__dirname, "..", "_logo-src");

fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(tmpDir, { recursive: true });

const map = {
  "Khaleej-Times": "khaleej-times",
  "Gulf-News": "gulf-news",
  "Al-Bayan": "al-bayan",
  "Al-Watan": "al-watan",
  Zawya: "zawya",
  "Emarat-Al-Youm": "emarat-al-youm"
};

for (const file of fs.readdirSync(assetsRoot)) {
  for (const [key, out] of Object.entries(map)) {
    if (file.includes(key)) {
      fs.copyFileSync(path.join(assetsRoot, file), path.join(tmpDir, `${out}.png`));
      console.log("copied", out);
    }
  }
}

async function processLogo(name) {
  const input = path.join(tmpDir, `${name}.png`);

  // Flatten onto white so logos are always visible in white circular badges.
  // Also enlarge the mark within the frame.
  const flattened = await sharp(input)
    .ensureAlpha()
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .resize(720, 720, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255 }
    })
    .png()
    .toBuffer();

  // Optional contrast boost for very faint marks
  const boosted = await sharp(flattened)
    .modulate({ brightness: 0.92, saturation: 1.05 })
    .linear(1.15, -12)
    .png()
    .toBuffer();

  await sharp(boosted)
    .webp({ quality: 95 })
    .toFile(path.join(outDir, `${name}.webp`));
  await sharp(boosted).png().toFile(path.join(outDir, `${name}.png`));

  const stats = await sharp(path.join(outDir, `${name}.webp`)).stats();
  console.log(name, "R", stats.channels[0].mean.toFixed(1), "G", stats.channels[1].mean.toFixed(1));
}

(async () => {
  for (const name of Object.values(map)) {
    await processLogo(name);
  }
  fs.rmSync(tmpDir, { recursive: true, force: true });
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
