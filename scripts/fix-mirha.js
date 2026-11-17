const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const srcRoot =
  "C:/Users/Muhammad Umer/.cursor/projects/c-Users-Muhammad-Umer-Documents-GitHub-mainpr-Main-PR/assets";
const dst = path.join(__dirname, "..", "_logo-src");
fs.mkdirSync(dst, { recursive: true });

for (const f of fs.readdirSync(srcRoot)) {
  if (f.includes("Mirha")) {
    fs.copyFileSync(path.join(srcRoot, f), path.join(dst, "Mirha-Homes.png"));
  }
}

(async () => {
  const input = path.join(dst, "Mirha-Homes.png");
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let sum = 0;
  let n = 0;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] > 20) {
      sum += data[i];
      n += 1;
    }
  }
  console.log("opaque meanR before", (sum / Math.max(n, 1)).toFixed(1), "count", n);

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r < 35 && g < 35 && b < 35) {
      data[i + 3] = 0;
      continue;
    }
    if (data[i + 3] > 10) {
      data[i] = 255 - r;
      data[i + 1] = 255 - g;
      data[i + 2] = 255 - b;
    }
  }

  const raw = { raw: { width: info.width, height: info.height, channels: 4 } };
  const out = path.join(__dirname, "..", "public", "brands", "mirha-homes");
  await sharp(data, raw).webp({ quality: 92, alphaQuality: 100 }).toFile(`${out}.webp`);
  await sharp(data, raw).png().toFile(`${out}.png`);

  let sum2 = 0;
  let n2 = 0;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] > 20) {
      sum2 += data[i];
      n2 += 1;
    }
  }
  console.log("opaque meanR after", (sum2 / Math.max(n2, 1)).toFixed(1));
  fs.rmSync(dst, { recursive: true, force: true });
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
