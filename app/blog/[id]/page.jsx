import { CalendarIcon } from "@/app/components/Icons/index";

import Content from "@/app/components/Blog/Content";

import "@/app/components/Blog/styles.css";

import { notFound } from "next/navigation";

async function getPost(id) {
  const res = await fetch(`http://localhost:3000/api/post?id=${id}`);

  if (!res.ok) {
    // throw new Error("Failed to fetch data");
    notFound();
  }

  return res.json();
}

const Blog = async ({ params }) => {
  let slug = params.id;

  slug.replace(/[^a-z-]|^-|-$|[^a-z-].*[^a-z-]/g, "");

  const data = await getPost(slug);

  const { blog_title, blog_date, blog_categories, blog_slug, content } = data;

  return (
    <main className="w-full max-w-7xl mx-auto min-h-full  flex flex-col mt-4">
      <article className="w-full mx-auto py-5 lg:py-6 max-xl:px-6 max-sm:px-4 bg-zinc-950 px-6">
        <h1 className="text-xl md:text-2xl font-semibold">{blog_title}</h1>

        <div className="flex justify-between items-center">
          <div className="date text-gray-400 font-base mt-1">
            <span className="inline-block self-center mr-[6px]">
              <CalendarIcon size={14} />
            </span>
            <time className="text-sm">{blog_date}</time>
          </div>

          <div className="flex text-sm font-semibold text-gray-300">
            {blog_categories.map((category, index) => {
              return (
                <div className="blog-tag" key={index}>
                  #{category}
                </div>
              );
            })}
          </div>
        </div>

        <div className="content mt-4">
          <Content>{content}</Content>
        </div>
      </article>
    </main>
  );
};

export default Blog;
