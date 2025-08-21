"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { truncate } from "@/utils/customLogic/logic";

export interface CompanyLogo {
  createdAt: string;
  updatedAt: string;
  alt: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX: number;
  focalY: number;
  id: string;
  url: string;
  thumbnailURL: string | null;
}

export interface Testimonial {
  companyLogo: CompanyLogo;
  testimonialText: string;
  author: string;
  designation: string;
  company: string;
  id: string;
}

interface TestimonialBlockProps {
  heading: string;
  description: string;
  testimonialTitle: Testimonial[];
}

/**
 * Renders a testimonial block section with a responsive carousel of testimonials.
 *
 * @component
 * @param {TestimonialBlockProps} props - The props for the TestimonialBlock component.
 * @param {string} props.heading - The main heading for the testimonial section.
 * @param {string} props.description - The description or subtitle for the testimonial section.
 * @param {Array<Testimonial>} props.testimonialTitle - An array of testimonial objects to display in the carousel.
 *
 * @returns {JSX.Element} The rendered testimonial block section.
 *
 * @remarks
 * - The carousel orientation switches between "vertical" and "horizontal" based on the window width.
 * - Each testimonial displays the company logo, testimonial text, author, designation, and company name.
 * - If no testimonials are available, a fallback message is shown.
 */
const TestimonialBlock: React.FC<TestimonialBlockProps> = ({
  heading,
  description,
  testimonialTitle,
}) => {
  // State to manage carousel orientation
  const [orientation, setOrientation] = useState<"vertical" | "horizontal">(
    "vertical"
  );

  // Responsive orientation state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOrientation("horizontal");
      } else {
        setOrientation("vertical");
      }
    };
    handleResize(); // Set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="pt-[100px] pb-[30px] flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50">
      <div className="mb-10 text-center max-w-2xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
          {heading}
        </h2>
        <p className="text-lg md:text-xl text-blue-700 mb-6 lg:mb-0">
          {description}
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center flex-wrap gap-8 mb-8">
        <Carousel
          orientation={orientation}
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm sm:max-w-[500px] lg:max-w-[768px] xl:max-w-6xl mx-auto px-6"
        >
          <CarouselContent className=" h-[450px]">
            {/*  Map through testimonials and render each one */}
            {testimonialTitle?.length > 0 ? (
              testimonialTitle?.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="basis-1/1 md:basis-1/1 lg:basis-1/2 xl:basis-1/3 "
                >
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="max-w-md min-w-[300px] bg-white rounded-xl shadow-lg p-8 text-center flex flex-col items-center"
                  >
                    {testimonial?.companyLogo?.url && (
                      <Image
                        src={
                          testimonial?.companyLogo?.url.startsWith("http")
                            ? testimonial?.companyLogo?.url
                            : `${
                                process.env.NEXT_PUBLIC_API ||
                                "http://localhost:3000"
                              }${testimonial.companyLogo.url}`
                        }
                        alt={
                          testimonial?.companyLogo?.alt ||
                          testimonial?.company ||
                          "Company Logo"
                        }
                        width={72}
                        height={72}
                        className="mb-4 rounded-full bg-white object-contain"
                      />
                    )}
                    {/* <Coma/> */}

                    <blockquote className="text-lg md:text-xl font-medium text-gray-800 mb-6">
                      {truncate(testimonial?.testimonialText, 100)}{" "}
                    </blockquote>
                    <div className="flex flex-col items-center gap-1">
                      <span className="font-bold text-blue-800">
                        {testimonial?.author}
                      </span>
                      {testimonial.designation && (
                        <span className="text-blue-600 text-sm">
                          {testimonial?.designation}
                        </span>
                      )}
                      {testimonial.company && (
                        <span className="text-gray-500 text-xs">
                          {testimonial?.company}
                        </span>
                      )}
                    </div>
                  </motion.div>
                </CarouselItem>
              ))
            ) : (
              <p className="text-gray-500 text-center">
                No testimonials available.
              </p>
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialBlock;
