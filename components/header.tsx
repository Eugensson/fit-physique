"use client";

import { useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";

import { cn } from "@/lib/utils";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [headerActive, setHeaderActive] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full h-25 max-w-480 bg-primary-200 transition-all",
        headerActive ? "h-25" : "h-31"
      )}
    >
      <div className="container h-full w-full flex items-center justify-between">
        <Logo />
        <Nav containerStyles="hidden xl:flex gap-4 text-white text-base uppercase font-medium transition-all" />
        <MobileNav
          containerStyles={cn(
            "fixed left-0 top-31 w-full flex flex-col gap-8 xl:hidden bg-primary-200 text-base text-center text-white font-medium uppercase transition-all",
            headerActive ? "top-22.5" : "top-31",
            isOpenMenu
              ? "max-h-max  pt-8 pb-10 border-t border-white/10"
              : "max-h-0 py-0 overflow-hidden border-white/0"
          )}
        />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 text-white">
            <button
              type="button"
              className="hover:text-accent transition-all text-base uppercase font-medium cursor-pointer"
            >
              login
            </button>
            <button
              type="button"
              className="hover:text-accent transition-all text-base uppercase font-medium cursor-pointer"
            >
              register
            </button>
          </div>
          <button
            onClick={() => setIsOpenMenu(!isOpenMenu)}
            className="text-white xl:hidden"
          >
            {isOpenMenu ? <MdClose size={36} /> : <MdMenu size={36} />}
          </button>
        </div>
      </div>
    </header>
  );
};
