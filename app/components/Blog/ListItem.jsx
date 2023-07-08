import Link from "next/link";

import { CalendarIcon } from "@/app/components/Home/icons";

const ListItem = ({ title, categories, date, slug }) => {
  return (
    <div className="my-1 py-2 px-4 rounded bg-zinc-950/10 hover:bg-zinc-950 transition-colors flex justify-between group">
      <Link href={`/blog/${slug}`} className="flex-1">
        <h2 className="text-sm lg:text-lg group-hover:text-blue-400 transition-colors">
          {title}
        </h2>
      </Link>
      <div className="opacity-0 group-hover:opacity-100 select-none">
        <div className="date text-gray-400">
          <span className="inline-block self-center mr-[6px]">
            <CalendarIcon size={14} />
          </span>
          <time className="text-sm">{date}</time>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
