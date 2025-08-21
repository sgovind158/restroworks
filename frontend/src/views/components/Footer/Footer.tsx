"use client";
import { motion } from "framer-motion";
import { footerLinks, socialLinks } from "./data";
import Link from "next/link";
import LogoIcon from "../svg/LogoIcon";

/**
 * Renders the animated footer section of the website.
 *
 * @param locale - The current locale string used for localization and routing.
 * @returns The footer component containing social links, logo, footer links, and copyright.
 *
 * @remarks
 * - Uses Framer Motion for animation effects.
 * - Displays social media icons, website logo, and additional footer links.
 * - Responsive layout with flexbox and Tailwind CSS classes.
 */
export default function Footer({ locale }: { locale: string }) {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-black text-white pt-16 pb-11 px-4  min-h-[300px] items-center flex "
    >
      <div className="w-full text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center gap-8 md:gap-4">
          {/* Social Icons */}
          <div className="flex gap-4 order-2 md:order-1 mb-4 md:mb-0">
            {socialLinks?.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
          {/* Website Logo */}
          <div className="order-1 md:order-2 mb-4 md:mb-0 flex-shrink-0">
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
                <LogoIcon /> <span className="text-white">Restroworks</span>
              </motion.div>
            </Link>
          </div>
          {/* Footer Links */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm order-3">
            {footerLinks?.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="hover:underline text-center"
                target="_blank"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-6">
          &copy; {new Date().getFullYear()} Restroworks, All rights reserved
        </div>
      </div>
    </motion.footer>
  );
}
