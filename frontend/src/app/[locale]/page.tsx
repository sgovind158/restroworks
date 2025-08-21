/**
 * Generates metadata for the home page based on the current locale.
 *
 * Fetches page data from the API using the provided locale and returns
 * metadata including the page title and description for SEO purposes.
 *
 * @param params - An object containing the current locale.
 * @returns A Promise that resolves to a Metadata object with title and description.
 */

/**
 * Home page component.
 *
 * Fetches and renders the home page content based on the current locale.
 * Handles fetch errors gracefully and passes the fetched blocks to the BlockRenderer component.
 *
 * @param params - An object containing the current locale.
 * @returns A React element rendering the home page content.
 */
import { Metadata } from "next";
import BlockRenderer from "../../views/components/BlockRenderer/BlockRenderer";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;

  const res = await fetch(
    `${process.env.API}/api/pages?where[slug][equals]=home&locale=${locale}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  const page = data?.docs?.[0];

  return {
    title: page?.metaTitle || "Home",
    description: page?.metaDescription || "Welcome to Restroworks",
  };
}

export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = await params;

  let page = null;
  try {
    const res = await fetch(
      `${process.env.API}/api/pages?where[slug][equals]=home&locale=${locale}`,
      { cache: "no-store" }
    );
    if (!res.ok) throw new Error("Failed to fetch homepage data");
    const data = await res.json();
    page = data?.docs?.[0];
  } catch (error) {
    console.error("error", error);
  }

  return (
    <>
      <BlockRenderer locale={locale} blocks={page?.content || []} />
    </>
  );
}
