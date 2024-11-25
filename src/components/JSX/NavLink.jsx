import React from "react";

const NavLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="navLink w-max px-6 py-2 bg-transparent text-text-nav-link font-truculenta font-bold text-2xl md:text-base cursor-pointer hover:text-text-nav-link-hover hover:bg-background-nav-link-hover transition-transform duration-300 rounded-lg"
    >
      {children}
    </a>
  );
};

export default NavLink;
