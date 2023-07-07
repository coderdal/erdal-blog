import "@/app/components/Home/styles.css";
import Link from "next/link";

import RecentBlog from "@/app/components/Home/RecentBlog";

const RecentBlogs = () => {
  return (
    <section className="p-6 lg:p-10 border rounded-md  border-blue-100/10 max-xl:mx-3 mt-6">
      <h1 className="text-2xl font-bold lg:text-3xl">Son Yazılarım</h1>

      <div className="grid grid-rows-2 mt-6 md:grid-cols-2 max-md:grid-rows-1">
        <RecentBlog
          title={"Hello world !"}
          time={"05-12-2023"}
          tags={["react", "css"]}
        />
        <RecentBlog
          title={"Hello world !"}
          time={"05-12-2023"}
          tags={["react", "css"]}
        />
        <RecentBlog
          title={"Hello world !"}
          time={"05-12-2023"}
          tags={["react", "css"]}
        />
        <RecentBlog
          title={"Hello world !"}
          time={"05-12-2023"}
          tags={["react", "css"]}
        />
      </div>
    </section>
  );
};

export default RecentBlogs;
