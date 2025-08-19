"use client";

import { Link as ScrollLink } from "react-scroll";

import { NAV_LINKS } from "@/constants";

interface NavProps {
  containerStyles: string;
}

export const Nav = ({ containerStyles }: NavProps) => {
  return (
    <nav className={containerStyles}>
      {NAV_LINKS.map(({ name, target, offset }) => (
        <ScrollLink
          key={name}
          spy
          smooth
          to={target}
          offset={offset}
          activeClass="active"
          className="cursor-pointer hover:text-accent transition-all"
        >
          {name}
        </ScrollLink>
      ))}
    </nav>
  );
};
