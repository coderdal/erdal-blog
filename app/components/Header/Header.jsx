"use client";
import { useState } from "react";

import { menuContext } from "@/app/components/Header/MobileMenuContext";
import MobileMenu from "@/app/components/Header/MobileMenu";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import "@/app/components/Header/styles.css";
import { CloseMenuIcon, OpenMenuIcon } from "@/app/components/Header/icons";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  const currentPath = usePathname();

  const toggleMobileMenu = () => {
    setIsMenu((prev) => !prev);
  };

  return (
    <menuContext.Provider value={{ setIsMenu }}>
      <header className="flex flex-col relative">
        <section className="w-full max-w-7xl mx-auto py-5 lg:py-6 max-xl:px-6 max-sm:px-4 h-[121px]">
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

                {isMenu ? <CloseMenuIcon /> : <OpenMenuIcon />}
              </button>
            </div>
            {/* Desktop Nav Links */}
            <div className="hidden md:flex ">
              <Link href="/" className="nav-link-desktop">
                {currentPath === "/" ? (
                  <motion.span
                    layoutId="underline"
                    className="nav-link-desktop-active"
                  />
                ) : null}
                Home
              </Link>
              <Link href="/blog" className="nav-link-desktop">
                {currentPath == "/blog" ? (
                  <motion.span
                    layoutId="underline"
                    className="nav-link-desktop-active"
                  />
                ) : null}
                Blog
              </Link>
              <Link href="/about" className="nav-link-desktop">
                {currentPath == "/about" ? (
                  <motion.span
                    layoutId="underline"
                    className="nav-link-desktop-active"
                  />
                ) : null}
                About
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
