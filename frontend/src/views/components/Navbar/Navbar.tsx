"use client";
import React, { useState } from "react";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import Link from "next/link";
import HamburgerBtn from "../Button/HamburgerBtn";
import { navLinks } from "./data";
import { motion } from "framer-motion";
import LogoIcon from "../svg/LogoIcon";

/**
 * Navbar component renders the top navigation bar with branding, navigation links, 
 * a hamburger menu for mobile responsiveness, and a language switcher.
 *
 * @param locale - The current locale string used for routing and language selection.
 *
 * @returns The navigation bar JSX element.
 *
 * @remarks
 * - Uses motion animation for the logo.
 * - Responsive design: displays a hamburger menu on mobile and horizontal links on desktop.
 * - Closes the menu when a navigation link is clicked.
 */
const Navbar = ({ locale }: { locale: string }) => {
  const [open, setOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-lg rounded-b-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 text-2xl font-extrabold text-blue-700 tracking-tight"
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-2"
          >
            <LogoIcon /> <span className="">Restroworks</span>
          </motion.div>
        </Link>
        {/* Hamburger */}
        <HamburgerBtn open={open} toggleMenu={toggleMenu} />
        {/* Links */}
        <div
          className={`flex-col md:flex-row md:flex items-center gap-6 absolute md:static left-0 right-0 top-full md:top-auto bg-white/95 md:bg-transparent shadow-md md:shadow-none rounded-b-xl md:rounded-none transition-all duration-200 ${
            open ? "flex" : "hidden md:flex"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href(locale)}
              className="block text-gray-700 hover:text-blue-700 font-semibold transition-colors duration-200 px-3 py-2 rounded hover:bg-blue-50"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-3 py-2">
            <LanguageSwitcher currentLocale={locale} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
