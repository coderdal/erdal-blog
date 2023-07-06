import { NextResponse } from "next/server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

// markdown converting libs
import { remark } from "remark";
import remarkPresetLintMarkdownStyleGuide from "remark-preset-lint-markdown-style-guide";
import remarkHtml from "remark-html";

export async function GET(request) {
  //   console.log(request);
  // blog files directory
  const blogsDirectory = path.join(process.cwd(), "blogs");

  // read blog files
  const fileNames = fs.readdirSync(blogsDirectory);

  // loop blog files
  const blogs = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(blogsDirectory, fileName);

      // read file content
      const fileContent = fs.readFileSync(filePath, "utf8");

      // seperate markdown contents
      const { data, content } = matter(fileContent);

      const processedContent = await remark()
        .use(remarkPresetLintMarkdownStyleGuide)
        .use(remarkHtml)
        .process(content);

      return {
        blog_slug: fileName.replace(".md", ""),
        ...data,
        content: String(processedContent).trim(),
      };
    })
  );

  return NextResponse.json({ blogs }, { status: 200 });
}
