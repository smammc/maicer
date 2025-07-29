import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

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
      <body className={` ${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
