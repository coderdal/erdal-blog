import ListItem from "@/app/components/Blog/ListItem";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const { posts } = await getPosts();

  // console.log(posts);

  return (
    <main className="w-full max-w-7xl mx-auto min-h-full  flex flex-col mt-4">
      <section className="w-full max-w-7xl mx-auto py-5 lg:py-6 max-xl:px-6 max-sm:px-4 px-2">
        <h1 className="font-extrabold text-4xl">Blog</h1>

        <div className="mt-4 flex flex-col">
          {posts.map((post, key) => {
            return (
              <ListItem
                title={post.blog_title}
                categories={post.blog_categories}
                date={post.blog_date}
                slug={post.blog_slug}
                key={key}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Blog;
