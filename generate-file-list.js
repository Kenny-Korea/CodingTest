import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, "public");

// public 디렉토리의 모든 section 폴더 찾기
const entries = fs.readdirSync(publicDir, { withFileTypes: true });

entries.forEach((entry) => {
  // section으로 시작하는 디렉토리만 처리
  if (entry.isDirectory() && entry.name.startsWith("section")) {
    const sectionDir = path.join(publicDir, entry.name);

    // 해당 디렉토리의 모든 .js 파일 찾기
    const files = fs
      .readdirSync(sectionDir)
      .filter((file) => file.endsWith(".js") || file.endsWith("py"))
      .sort(); // 파일명으로 정렬

    // files.json 생성
    const manifest = {
      files: files,
    };

    const manifestPath = path.join(sectionDir, "files.json");
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

    console.log(
      `✅ Generated ${entry.name}/files.json with ${files.length} files`
    );
  }
});

console.log("\n🎉 All file lists generated successfully!");
