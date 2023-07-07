import "@/app/components/Home/styles.css";
import Link from "next/link";

import { CalendarIcon } from "@/app/components/Home/icons";

const RecentBlogs = () => {
  return (
    <section className="p-6 lg:p-10 border rounded-md  border-blue-100/10 max-xl:mx-3 mt-6">
      <h1 className="text-2xl font-bold lg:text-3xl">Son Yazılarım</h1>

      <div className="grid grid-rows-2 mt-4 md:grid-cols-2 max-md:grid-rows-1">
        <div className="md:mb-2 md:mr-3 recent-blog max-md:mt-4">
          <Link href={"/"}>
            <h2 className="recent-blog-title">Hello World !</h2>
            <div className="recent-blog-details">
              <div className="recent-blog-date">
                <span className="inline-block text-gray-300 self-center mr-[6px]">
                  <CalendarIcon size={14} />
                </span>
                <time className="text-sm text-gray-300">06-07-2023</time>
              </div>
              <div className="recent-blog-tags">
                <div className="blog-tag">#html</div>
                <div className="blog-tag">#react</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="md:mb-2 md:ml-3 recent-blog max-md:mt-4">
          <Link href={"/"}>
            <h2 className="recent-blog-title">Vuex Store Actions</h2>
            <div className="recent-blog-details">
              <div className="recent-blog-date">
                <span className="inline-block text-gray-300 self-center mr-[6px]">
                  <CalendarIcon size={14} />
                </span>
                <time className="text-sm text-gray-300">06-07-2023</time>
              </div>
              <div className="recent-blog-tags">
                <div className="blog-tag">#html</div>
                <div className="blog-tag">#react</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="md:mt-2 md:mr-3 recent-blog max-md:mt-4">
          <Link href={"/"}>
            <h2 className="recent-blog-title">
              HTML5 etiketleri neden önemli ?
            </h2>
            <div className="recent-blog-details">
              <div className="recent-blog-date">
                <span className="inline-block text-gray-300 self-center mr-[6px]">
                  <CalendarIcon size={14} />
                </span>
                <time className="text-sm text-gray-300">06-07-2023</time>
              </div>
              <div className="recent-blog-tags">
                <div className="blog-tag">#html</div>
                <div className="blog-tag">#react</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="md:mt-2 md:ml-3 recent-blog max-md:mt-4">
          <Link href={"/"}>
            <h2 className="recent-blog-title">Next.js app klasörü</h2>
            <div className="recent-blog-details">
              <div className="recent-blog-date">
                <span className="inline-block text-gray-300 self-center mr-[6px]">
                  <CalendarIcon size={14} />
                </span>
                <time className="text-sm text-gray-300">06-07-2023</time>
              </div>
              <div className="recent-blog-tags">
                <div className="blog-tag">#next.js</div>
                <div className="blog-tag">#react</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;
