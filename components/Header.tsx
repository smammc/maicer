// components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationItem {
  href: string;
  label: string;
}

const navigationItems: NavigationItem[] = [
  { href: "/capital", label: "Capital" },
  { href: "/tech", label: "Tech" },
  { href: "/law", label: "Law" },
  { href: "/media", label: "Media" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const getCurrentCompany = (): string => {
    if (pathname.startsWith("/capital")) return "capital";
    if (pathname.startsWith("/tech")) return "tech";
    if (pathname.startsWith("/law")) return "law";
    if (pathname.startsWith("/media")) return "media";
    return "default";
  };

  const currentCompany = getCurrentCompany();
  const isLandingPage = pathname === "/";

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  // Apply theme class to body element
  useEffect(() => {
    const body = document.body;
    // Remove all theme classes
    body.classList.remove(
      "theme-capital",
      "theme-tech",
      "theme-law",
      "theme-media",
    );

    // Add current theme class
    if (currentCompany !== "default") {
      body.classList.add(`theme-${currentCompany}`);
    }

    return () => {
      // Cleanup on unmount
      body.classList.remove(
        "theme-capital",
        "theme-tech",
        "theme-law",
        "theme-media",
      );
    };
  }, [currentCompany]);

  return (
    <header
      className={`fixed top-0 w-full z-50 shadow-sm backdrop-blur-sm ${
        isLandingPage ? "bg-white/95" : "bg-theme-primary/95"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center sm:justify-center h-16 sm:h-20">
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className={`block md:hidden p-3 w-12 h-12 rounded-lg transition-colors ${
              isLandingPage ? "hover:bg-gray-100" : "hover:bg-theme-hover"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 ${
                isLandingPage ? "text-gray-700" : "text-theme-text"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          {/*

           // Logo
          <div className="absolute left-1 right-1 flex justify-center md:static md:justify-start w-full md:w-auto items-center">
            <Link href="/" onClick={closeMenu}>
               // Mobile logo
              <img
                src="/icons/MAICER%20Main%20symbol.png"
                alt="Maicer Logo"
                className="block md:hidden h-10"
              />

               // Desktop/tablet logo
              <img
                src="/icons/MAICER%20Transparent%20logo.png"
                alt="Maicer Logo"
                className="hidden md:block h-10 mr-4"
              />
            </Link>
          </div>
*/}

          {/* Desktop Navigation */}
          <div>
            <div className="hidden md:flex items-center space-x-8 mx-auto">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors ${
                    isLandingPage
                      ? "text-gray-700 hover:text-maicer-primary"
                      : "text-theme-text-secondary hover:text-theme-accent"
                  } ${
                    pathname.startsWith(item.href)
                      ? isLandingPage
                        ? "text-maicer-primary"
                        : "text-theme-accent"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/sobre"
                className={`transition-colors ${
                  isLandingPage
                    ? "text-gray-700 hover:text-maicer-primary"
                    : "text-theme-text-secondary hover:text-theme-accent"
                }`}
              >
                Sobre
              </Link>
              <Link
                href="/contacto"
                className={`${
                  isLandingPage
                    ? "bg-maicer-primary hover:bg-maicer-secondary text-white px-6 py-2 rounded-lg transition-colors"
                    : "btn-theme-primary"
                }`}
              >
                Contactos
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden ${isMenuOpen ? "block" : "hidden"} py-4 border-t ${
            isLandingPage ? "border-gray-200" : "border-theme-secondary"
          }`}
        >
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`transition-colors ${
                isLandingPage
                  ? "text-gray-700 hover:text-maicer-primary"
                  : "text-theme-text-secondary hover:text-theme-accent"
              }`}
              onClick={closeMenu}
            >
              Início
            </Link>

            {/* Company Links */}
            <div className="space-y-2">
              <p
                className={`text-sm font-semibold ${
                  isLandingPage ? "text-gray-500" : "text-theme-text-secondary"
                }`}
              >
                Empresas
              </p>
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block pl-4 transition-colors ${
                    isLandingPage
                      ? "text-gray-700 hover:text-maicer-primary"
                      : "text-theme-text-secondary hover:text-theme-accent"
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              href="/sobre"
              className={`transition-colors ${
                isLandingPage
                  ? "text-gray-700 hover:text-maicer-primary"
                  : "text-theme-text-secondary hover:text-theme-accent"
              }`}
              onClick={closeMenu}
            >
              Sobre
            </Link>
            <Link
              href="/contacto"
              className={`${
                isLandingPage
                  ? "bg-maicer-primary hover:bg-maicer-secondary text-white px-6 py-2 rounded-lg transition-colors text-center"
                  : "btn-theme-primary text-center"
              }`}
              onClick={closeMenu}
            >
              Contacto
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
