import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/views/components/Navbar/Navbar";
import Footer from "@/views/components/Footer/Footer";
import Toast from "@/views/components/Toast/Toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

/**
 * Root layout component for the application, providing the main HTML structure.
 * 
 * @param children - The React node(s) to be rendered within the layout.
 * @param params - An object containing route parameters, specifically the `locale` string.
 * 
 * @remarks
 * - Sets the HTML `lang` attribute based on the current locale.
 * - Wraps the content with a `Navbar`, `Footer`, and `Toast` components.
 * - Applies the Inter font and antialiasing to the body.
 * 
 * @returns The root HTML structure for the application with locale-specific content.
 */
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={`${inter.className} antialiased`}>
        <Navbar locale={locale} />
        {children}
        <Footer locale={locale} />
        <Toast />
      </body>
    </html>
  );
}
