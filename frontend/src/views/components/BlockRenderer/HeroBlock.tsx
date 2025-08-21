"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroBlockProps {
  heading: string;
  subheading: string;
  image: { url: string; alt?: string };
}

/**
 * Renders a hero section with an animated heading, optional subheading, and optional image.
 *
 * @component
 * @param {HeroBlockProps} props - The props for the HeroBlock component.
 * @param {string} props.heading - The main heading text displayed prominently.
 * @param {string} [props.subheading] - Optional subheading text displayed below the heading.
 * @param {{ url: string; alt?: string }} [props.image] - Optional image object with a URL and optional alt text.
 *
 * @returns {JSX.Element} The rendered hero section with animations and styling.
 *
 * @example
 * <HeroBlock
 *   heading="Welcome to Our Site"
 *   subheading="Discover amazing features"
 *   image={{ url: "/images/hero.jpg", alt: "Hero" }}
 * />
 */
const HeroBlock: React.FC<HeroBlockProps> = ({
  heading,
  subheading,
  image,
}) => {
  const getImageSrc = (url: string) => {
    if (url.startsWith("http")) return url;
    // Use your backend URL from env or hardcode for dev
    return `${process.env.NEXT_PUBLIC_API || "http://localhost:3000"}${url}`;
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-[100px] text-center overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-extrabold text-blue-800 mb-4 drop-shadow px-4"
      >
        {heading}
      </motion.h1>
      {subheading && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-2xl text-blue-700 mb-8 max-w-2xl mx-auto px-4"
        >
          {subheading}
        </motion.p>
      )}

      {image?.url && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mt-4 px-4"
        >
          <Image
            src={getImageSrc(image?.url)}
            alt={image?.alt || heading || "Hero Image"}
            width={600}
            height={320}
            className="rounded-xl shadow-lg mx-auto"
            priority
          />
        </motion.div>
      )}
    </section>
  );
};

export default HeroBlock;
