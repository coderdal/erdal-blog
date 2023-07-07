import { NextResponse } from "next/server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { saveMarkdownFormat } from "@/app/api/utils";

export async function GET(request) {
  //   console.log(request);
  // blog files directory
  const blogsDirectory = path.join(process.cwd(), "posts");

  // read blog files
  const fileNames = fs.readdirSync(blogsDirectory);

  // loop blog files
  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(blogsDirectory, fileName);

      // read file content
      const fileContent = fs.readFileSync(filePath, "utf8");

      // seperate markdown contents
      const { data, content } = matter(fileContent);

      return {
        blog_slug: fileName.replace(".md", ""),
        ...data,
        content: saveMarkdownFormat(content.trim()),
      };
    })
  );

  return NextResponse.json({ posts }, { status: 200 });
}
