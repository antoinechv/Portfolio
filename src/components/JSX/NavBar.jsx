import { useState } from "react";
import { motion } from "framer-motion";
import NavLink from "./NavLink.jsx";
import Button from "./Button.jsx";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Mes projets", href: "/projets/" },
  { name: "Mes photos", href: "/photos/" },
  { name: "Mes vidéos", href: "/videos/" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <nav className="flex items-center w-full fixed  md:justify-center bg-black justify-between px-5 py-2 gap-5 md:fixed  md:top-0  md:left-1/2  md:transform  md:-translate-x-1/2  z-50 ">

          <div className="flex items-center">
            <div className="md:hidden relative">
              <button
                  onClick={toggleMenu}
                  className={` flex flex-col items-center justify-center z-20  transition-all duration-300 ${isOpen ? "fixed" : "relative"}`}
              >
                {/* Burger icon */}
                <motion.div
                    initial={{rotate: 0, y: 0}}
                    animate={{rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0}}
                    transition={{duration: 0.3}}
                    className={`w-6 h-0.5 ${isOpen ? "bg-white" : "bg-white"} mb-1`}
                />
                <motion.div
                    initial={{opacity: 1}}
                    animate={{opacity: isOpen ? 0 : 1}}
                    transition={{duration: 0.3}}
                    className={`w-6 h-0.5 ${isOpen ? "bg-white" : "bg-white"} mb-1`}
                />
                <motion.div
                    initial={{rotate: 0, y: 0}}
                    animate={{rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0}}
                    transition={{duration: 0.3}}
                    className={`w-6 h-0.5 ${isOpen ? "bg-white" : "bg-white"}`}
                />
              </button>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-red  z-10"
                    onClick={toggleMenu}
                ></div>
            )}
            <ul
                className={`fixed top-16 left-0 w-full h-full  transition-transform duration-300 z-50 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } md:static md:flex md:translate-x-0 md:w-max md:bg-bg-red`}
            >
              {navLinks.map((link) => (
                  <li key={link.href} className="p-4">
                    <NavLink href={link.href}>{link.name}</NavLink>
                  </li>
              ))}
            </ul>
          </div>
          <Button client:load color="red" size="medium" href="/contact">
            Contact
          </Button>
        </nav>
        );
        };

        export default Navbar;
