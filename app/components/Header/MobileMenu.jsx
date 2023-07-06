import Link from "next/link";

const MobileMenu = () => {
  return (
    <div className="md:hidden relative" role="dialog" aria-modal="true">
      <div className="fixed inset-0 z-10 top-[121px]"></div>
      <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black text-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10 top-[120px] border-t border-slate-900">
        <div className="flex flex-col px-3">
          <div className="-my-4 divide-y divide-gray-500/10">
            <div className="space-y-2 py-5 text-xl font-normal">
              <Link href="/" className="nav-link-mobile">
                About
              </Link>
              <Link href="/" className="nav-link-mobile">
                Blog
              </Link>
              <Link href="/" className="nav-link-mobile">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
