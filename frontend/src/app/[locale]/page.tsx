import { Metadata } from "next";
import Image from "next/image";

export default async function Home({ params }: { params: { locale: string } }) {
  console.log("Locale:", params.locale);
  const res = await fetch(
    `${process.env.API}/api/pages?where[slug][equals]=home&locale=${params.locale}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  const page = data.docs[0];

  console.log("Page Data:", page);
  const metadata: Metadata = {
  title: page?.metaTitle,
  description: page?.metaDescription,
};

  return (
    <>
    
    </>
  );
}
