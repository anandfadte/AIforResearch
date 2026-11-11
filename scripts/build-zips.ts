import fs from "fs";
import path from "path";

const ACTIVITIES_DIR = path.join(process.cwd(), "activities");
const OUTPUT_DIR = path.join(process.cwd(), "public", "activity-files");

async function main() {
  console.log("Copying activity data files to public/...\n");

  if (!fs.existsSync(ACTIVITIES_DIR)) {
    console.log("No activities directory found, skipping.");
    return;
  }

  const folders = fs
    .readdirSync(ACTIVITIES_DIR)
    .filter((entry) => {
      const full = path.join(ACTIVITIES_DIR, entry);
      return fs.statSync(full).isDirectory() && entry.startsWith("activity_");
    });

  let totalFiles = 0;

  for (const folder of folders) {
    const dataPackDir = path.join(ACTIVITIES_DIR, folder, "data_pack");
    if (!fs.existsSync(dataPackDir)) continue;

    const outDir = path.join(OUTPUT_DIR, folder);
    fs.mkdirSync(outDir, { recursive: true });

    const files = fs.readdirSync(dataPackDir);
    for (const file of files) {
      const src = path.join(dataPackDir, file);
      const dest = path.join(outDir, file);
      fs.copyFileSync(src, dest);
      totalFiles++;
    }
    console.log(`  ${folder}: ${files.length} files`);
  }

  console.log(`\nDone. ${totalFiles} files copied to public/activity-files/`);
}

main().catch((err) => {
  console.error("Failed to copy files:", err);
  process.exit(1);
});
