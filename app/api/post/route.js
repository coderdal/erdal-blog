import { NextResponse } from "next/server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  let slug = searchParams.get("id");

  if (!slug) {
    return NextResponse.json(
      { message: "Missing params.", status: 406 },
      { status: 406 }
    );
  }

  slug.replace(/[^a-z-]|^-|-$|[^a-z-].*[^a-z-]/g, "");

  if (slug.length <= 2) {
    return NextResponse.json(
      { message: "Invalid params.", status: 406 },
      { status: 406 }
    );
  }

  // blog markdown file path
  const filePath = path.join(process.cwd(), `posts/${slug}.md`);

  try {
    // read markdown file
    const fileContent = fs.readFileSync(filePath, "utf8");

    // seperate markdown contents
    const { data, content } = matter(fileContent);

    return NextResponse.json(
      {
        ...data,
        blog_slug: slug,
        content: content.trim().replace(/\n/g, "\\n").replace(/\r/g, "\\r"),
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid request.", status: 404 },
      { status: 404 }
    );
  }
}
