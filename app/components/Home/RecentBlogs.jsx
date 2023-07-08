import "@/app/components/Home/styles.css";

import RecentBlog from "@/app/components/Home/RecentBlog";

async function getRecentPosts() {
  const res = await fetch("http://localhost:3000/api/recent-posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const RecentBlogs = async () => {
  const { posts } = await getRecentPosts();

  return (
    <section className="p-6 lg:p-10 lg:py-7 border rounded-md  border-blue-100/10 max-xl:mx-3 mt-6">
      <h1 className="text-2xl font-bold lg:text-3xl">Son Yazılarım</h1>

      <div className="grid grid-rows-2 mt-6 md:grid-cols-2 max-md:grid-rows-1">
        {posts.map((post, index) => {
          return (
            <RecentBlog
              key={index}
              title={post.blog_title}
              time={post.blog_date}
              tags={post.blog_categories}
              slug={post.blog_slug}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RecentBlogs;
