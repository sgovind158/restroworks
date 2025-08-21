import CtaBlock from "./CtaBlock";
import FeatureBlock from "./FeatureBlock";
import HeroBlock from "./HeroBlock";
import TestimonialBlock from "./TestimonialBlock";

/**
 * BlockRenderer component to render different types of blocks based on their blockType.
 * @param {Object} props - The component props.
 * @param {Array} props.blocks - Array of block objects to render.
 * @param {string} props.locale - Current locale for the application.
 * @returns {JSX.Element} Rendered blocks based on their type.
 */
export default function BlockRenderer({
  blocks,
  locale,
}: {
  blocks: any[];
  locale: string;
}) {
  return (
    <>
      {blocks?.map((block, idx) => {
        switch (block?.blockType) {
          case "hero":
            return <HeroBlock key={block?.id || idx} {...block} />;
          case "feature":
            return <FeatureBlock key={block?.id || idx} {...block} />;
          case "testimonial":
            return <TestimonialBlock key={block?.id || idx} {...block} />;
          case "cta":
            return (
              <CtaBlock locale={locale} key={block?.id || idx} {...block} />
            );
          default:
            return null;
        }
      })}
    </>
  );
}
