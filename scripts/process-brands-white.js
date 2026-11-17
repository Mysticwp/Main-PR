const sharp = require("sharp");
const path = require("path");

const srcDir = path.join(__dirname, "..", "_logo-src");
const outDir = path.join(__dirname, "..", "public", "brands");

async function process(input, outputBase, { invert = false } = {}) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    // strip near-black background
    if (r < 35 && g < 35 && b < 35) {
      data[i + 3] = 0;
      continue;
    }
    if (invert && data[i + 3] > 10) {
      data[i] = 255 - r;
      data[i + 1] = 255 - g;
      data[i + 2] = 255 - b;
    }
  }

  const raw = { raw: { width: info.width, height: info.height, channels: 4 } };
  await sharp(data, raw)
    .webp({ quality: 92, alphaQuality: 100 })
    .toFile(`${outputBase}.webp`);
  await sharp(data, raw).png().toFile(`${outputBase}.png`);
  console.log("done", path.basename(outputBase), invert ? "(inverted)" : "");
}

async function main() {
  const files = {
    "meals-on-me": { file: "Meals-on-Me.png", invert: false },
    zimaya: { file: "Zimaya.png", invert: false },
    butterfly: { file: "Butterfly.png", invert: false },
    zedor: { file: "Zedor.png", invert: false },
    "aa-hmb": { file: "AA-HMB.png", invert: false },
    "hmb-homes": { file: "HMB-Homes.png", invert: false },
    // light-on-black mark → dark for white cards
    "mirha-homes": { file: "Mirha-Homes.png", invert: true }
  };

  for (const [name, cfg] of Object.entries(files)) {
    await process(path.join(srcDir, cfg.file), path.join(outDir, name), {
      invert: cfg.invert
    });
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
