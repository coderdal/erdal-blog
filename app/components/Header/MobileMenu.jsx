import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  menuContext,
  useContext,
} from "@/app/components/Header/MobileMenuContext";

const MobileMenu = () => {
  const pathname = usePathname();
  const isMounted = useRef(true);

  const { setIsMenu } = useContext(menuContext);

  useEffect(() => {
    if (isMounted.current) {
      isMounted.current = false;
      return;
    }

    setIsMenu(false);
  }, [pathname, setIsMenu]);

  return (
    <div className="md:hidden relative" role="dialog" aria-modal="true">
      <div className="fixed inset-0 z-10 top-[121px]"></div>
      <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black text-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10 top-[120px] border-t border-slate-900">
        <div className="flex flex-col px-3">
          <div className="-my-4 divide-y divide-gray-500/10">
            <div className="space-y-2 py-5 text-xl font-normal">
              <Link href="/" className="nav-link-mobile">
                Home
              </Link>
              <Link href="/blog" className="nav-link-mobile">
                Blog
              </Link>
              <Link href="/about" className="nav-link-mobile">
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
