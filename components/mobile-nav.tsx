"use client";

import { useMediaQuery } from "react-responsive";
import { Link as ScrollLink } from "react-scroll";

import { NAV_LINKS } from "@/constants";

interface NavProps {
  containerStyles: string;
}

export const MobileNav = ({ containerStyles }: NavProps) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  return (
    <nav className={containerStyles}>
      {NAV_LINKS.map(({ name, target, offset }, index) => (
        <ScrollLink
          key={index}
          to={target}
          spy
          smooth
          offset={offset}
          activeClass={`${!isMobile && "active"}`}
          className="cursor-pointer hover:text-accent transition-all"
        >
          {name}
        </ScrollLink>
      ))}
    </nav>
  );
};
