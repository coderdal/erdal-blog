import Link from "next/link";

import { CalendarIcon } from "@/app/components/Icons/index";

const RecentBlog = ({ title, time, tags, slug }) => {
  return (
    <div className="md:mb-3 md:mr-3 recent-blog max-md:mt-4">
      <Link href={`/blog/${slug}`}>
        <h2 className="recent-blog-title">{title}</h2>
        <div className="recent-blog-details">
          <div className="recent-blog-date">
            <span className="inline-block text-gray-300 self-center mr-[6px]">
              <CalendarIcon size={14} />
            </span>
            <time className="text-sm text-gray-300">{time}</time>
          </div>
          <div className="recent-blog-tags">
            {tags
              ? tags.map((tag, index) => {
                  return (
                    <div className="blog-tag" key={index}>
                      #{tag}
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecentBlog;
