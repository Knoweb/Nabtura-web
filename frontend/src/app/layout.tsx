import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NABTURA | Smart Agriculture & Intelligent Green Solutions",
  description: "NABTURA is a UAE-based brand delivering intelligent solutions for food production, water management, greening and environmental transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased scroll-pt-28`}
    >
      <body className="min-h-full flex flex-col bg-nabtura-slate text-white font-sans relative selection:bg-nabtura-green selection:text-black">
        {/* Ambient Premium Glows */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-nabtura-green/10 blur-[120px] rounded-full mix-blend-screen opacity-50"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-nabtura-blue/10 blur-[150px] rounded-full mix-blend-screen opacity-50"></div>
        </div>

        <Header />
        <main className="flex-grow relative z-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
