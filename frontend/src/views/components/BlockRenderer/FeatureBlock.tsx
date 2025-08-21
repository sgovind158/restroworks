import React from "react";

interface Feature {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureBlockProps {
  heading?: string;
  description?: string;
  features?: Feature[];
}

/**
 * Renders a feature block section displaying a heading, description, and a list of features.
 *
 * @param props - The props for the FeatureBlock component.
 * @param props.heading - The main heading for the feature block. Defaults to "Powerful Features for Modern Restaurants".
 * @param props.description - The description text for the feature block. Defaults to "Restroworks provides everything you need to run your restaurant efficiently.".
 * @param props.features - An array of feature objects, each containing a `title` and `description` to display.
 *
 * @returns A section element containing the heading, description, and a grid of feature cards.
 */
const FeatureBlock: React.FC<FeatureBlockProps> = ({
  heading = "Powerful Features for Modern Restaurants",
  description = "Restroworks provides everything you need to run your restaurant efficiently.",
  features,
}) => {
  return (
    <section className="pt-[100px] pb-[60px] bg-white">
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
          {heading}
        </h2>
        <p className="text-lg md:text-xl text-blue-700">{description}</p>
      </div>
      <div className="max-w-5xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3 px-4">
        {features?.length ? (
          features?.map((feature, idx) => (
            <div
              key={idx}
              className="bg-blue-50 rounded-xl shadow-md p-8 flex flex-col items-center text-center transition hover:shadow-lg hover:bg-blue-100"
            >
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No features available.</p>
        )}
      </div>
    </section>
  );
};

export default FeatureBlock;
