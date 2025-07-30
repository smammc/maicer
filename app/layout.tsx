import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAICER TECH - Soluções Digitais",
  description:
    "Transforme o seu negócio com tecnologia digital. Websites modernos e gestão profissional de redes sociais.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <body className="font-[family-name:var(--font-family-poppins)] antialiased">
        <Header />
        <div className="h-16 sm:h-20" aria-hidden="true" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
