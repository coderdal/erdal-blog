"use client";
import { useState } from "react";

import { menuContext } from "@/app/components/Header/MobileMenuContext";
import MobileMenu from "@/app/components/Header/MobileMenu";

import Link from "next/link";
import Image from "next/image";

import "@/app/components/Header/styles.css";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenu((prev) => !prev);
  };

  return (
    <menuContext.Provider value={{ setIsMenu }}>
      <header className="flex flex-col relative">
        <section className="w-full max-w-7xl mx-auto py-5 lg:py-6 max-xl:px-6 max-sm:px-4 border-b border-slate-900 h-[121px]">
          <nav className="flex w-full items-center justify-between flex-row">
            <Link href={"/"} className="flex flex-row items-center">
              <Image
                src={"/logo.png"}
                width={72}
                height={72}
                alt="Logo"
                className="rounded-full self-center mr-5 max-sm:w-16"
              />
              <div className="flex lg:flex-1 flex-col">
                <h1 className="text-xl lg:text-2xl font-bold max-sm:text-lg">
                  Muhammed Erdal
                </h1>
                <span className="text-md font-thin lg:text-base text-gray-500 max-sm:text-md">
                  Developer
                </span>
                <span className="sr-only">CodErdal | Blog</span>
              </div>
            </Link>
            {/* Open Mobile Menu Btn */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>

                {isMenu ? (
                  <svg
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
            {/* Desktop Nav Links */}
            <div className="hidden md:flex ">
              <Link href="/" className="nav-link-desktop">
                About
              </Link>
              <Link href="/" className="nav-link-desktop">
                Blog
              </Link>
              <Link href="/" className="nav-link-desktop">
                Contact
              </Link>
            </div>
          </nav>
        </section>
        {/* Mobile menu */}
        {isMenu === true ? <MobileMenu /> : null}
      </header>
    </menuContext.Provider>
  );
};

export default Header;
