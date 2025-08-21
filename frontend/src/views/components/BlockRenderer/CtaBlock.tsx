import React from "react";
import Link from "next/link";
import en from "@/app/[locale]/lang/en";
import hi from "@/app/[locale]/lang/hi";

interface CtaBlockProps {
  heading?: string;
  description?: string;
  ctaText: string;
  ctaLink: string;
  blockName: string;
  locale: string;
}

/**
 * Renders a Call-to-Action (CTA) block, typically used for displaying a contact button section.
 *
 * @param ctaText - The text to display on the CTA button. Defaults to "Contact Us".
 * @param ctaLink - The URL path for the CTA button link. Defaults to "/contact".
 * @param blockName - The name of the block to determine if the CTA should be rendered (e.g., "contactBtn").
 * @param locale - The current locale, used to select the appropriate translation.
 *
 * @remarks
 * - Uses translation objects (`hi` for Hindi, `en` for English) based on the provided locale.
 * - Only renders the CTA section if `blockName` is "contactBtn".
 * - The CTA button navigates to a locale-prefixed contact page.
 */
const CtaBlock: React.FC<CtaBlockProps> = ({
  ctaText = "Contact Us",
  ctaLink = "/contact",
  blockName,
  locale,
}) => {
  // Use the locale to get the correct translation
  const t = locale === "hi" ? hi : en;

  return (
    <>
      {blockName === "contactBtn" && (
        <section className="py-16 bg-blue-700 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            {t?.homeContactSection?.title}
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
            {t?.homeContactSection?.description}
          </p>
          <Link
            href={`/${locale}${ctaLink}`}
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow hover:bg-blue-100 transition"
          >
            {ctaText}
          </Link>
        </section>
      )}
    </>
  );
};

export default CtaBlock;
