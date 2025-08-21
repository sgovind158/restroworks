import BlockRenderer from "@/views/components/BlockRenderer/BlockRenderer";
import ContactForm from "@/views/components/ContactForm/ContactForm";
import { Metadata } from "next";

// Update PageProps to reflect the asynchronous nature of params
interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;

  const res = await fetch(
    `${process.env.API}/api/pages?where[slug][equals]=contact&locale=${locale}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  const page = data?.docs?.[0];

  return {
    title: page?.metaTitle || "Contact Us",
    description: page?.metaDescription || "Welcome to Restroworks Contact Page",
  };
}

/**
 * Contact page component that fetches and renders contact page content based on the current locale.
 *
 * @param params - The route parameters, including the locale.
 * @returns The contact page content and a contact form, or a message if no content is found.
 *
 * This component:
 * - Fetches the contact page data from an API endpoint using the provided locale.
 * - Handles errors gracefully and displays a fallback message if no content is available.
 * - Renders the page content using the `BlockRenderer` component and displays a `ContactForm`.
 * - Sets up metadata for the page using the fetched data.
 */
export default async function Contact({ params }: PageProps) {
  const { locale } = await params; // Await the params to access the locale
  let page = null;

  // Fetch the contact page data from the API
  try {
    const res = await fetch(
      `${process.env.API}/api/pages?where[slug][equals]=contact&locale=${locale}`,
      { cache: "no-store" }
    );
    if (!res.ok) throw new Error("Failed to fetch contact page data");
    const data = await res?.json();
    page = data?.docs?.[0];
  } catch (error) {
    console.error("Error fetching contact page:", error);
    // Optionally, you can show a custom error message to the user here
  }

  if (!page) {
    return (
      <div className="text-center py-20 text-xl text-gray-500">
        No content found.
      </div>
    );
  }

  const metadata: Metadata = {
    title: page?.metaTitle,
    description: page?.metaDescription,
  };

  return (
    <>
      {page?.content?.length && (
        <BlockRenderer locale={locale} blocks={page?.content || []} />
      )}
      <ContactForm locale={locale} />
    </>
  );
}
