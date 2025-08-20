import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import LanguageSwitcher from "@/views/components/LanguageSwitcher/LanguageSwitcher";
import Navbar from "@/views/components/Navbar/Navbar";
import Footer from "@/views/components/Footer/Footer";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={params.locale}>
      <body
        className={`${inter.className} antialiased`}
      >
        <Navbar locale={params.locale} />
        {children}
        <Footer locale={params.locale}/>
        
      </body>
    </html>
  );
}

