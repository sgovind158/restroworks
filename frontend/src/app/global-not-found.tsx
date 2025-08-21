// Import global styles and fonts
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import F404 from "@/views/components/StateHandle/F404";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

/**
 * Renders a global "Not Found" page for the application.
 *
 * This component is intended to be used as a catch-all for routes that do not exist.
 * It wraps the custom 404 component (`F404`) within an HTML structure, applying the
 * Inter font class to the root element.
 *
 * @returns {JSX.Element} The rendered global not found page.
 */
export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <F404 />
      </body>
    </html>
  );
}
