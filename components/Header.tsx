// components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center sm:justify-center h-16 sm:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
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
          {/* Logo */}
          <div className="absolute left-1">
            <Link href="/" className="flex items-center">
              <span className="text-xl sm:text-2xl font-bold">
                <span className="text-maicer-blue">MAICER</span>
                <span className="text-maicer-cyan ml-1">TECH</span>
              </span>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div>
            <div className="hidden md:flex items-center space-x-8 mx-auto">
              <Link
                href="/"
                className="text-gray-700 hover:text-maicer-blue transition-colors"
              >
                Início
              </Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-maicer-blue transition-colors flex items-center">
                  Serviços
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Dropdown */}
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link
                    href="/servicos/redes-sociais"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-maicer-blue"
                  >
                    Gestão de Redes Sociais
                  </Link>
                  <Link
                    href="/servicos/desenvolvimento-web"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-maicer-blue"
                  >
                    Desenvolvimento Web
                  </Link>
                  <Link
                    href="/servicos/pacotes-digitais"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-maicer-blue border-t"
                  >
                    Pacotes Integrados
                  </Link>
                </div>
              </div>
              <Link
                href="/portfolio"
                className="text-gray-700 hover:text-maicer-blue transition-colors"
              >
                Portfólio
              </Link>
              <Link
                href="/sobre"
                className="text-gray-700 hover:text-maicer-blue transition-colors"
              >
                Sobre
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-maicer-blue transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contacto"
                className="text-gray-700 hover:text-maicer-blue transition-colors"
              >
                Contacto
              </Link>
            </div>

            {/* CTA Button */}
            {/*          <div className="hidden md:block">
            <Link
              href="/orcamento"
              className="bg-maicer-cyan text-white px-4 py-2 rounded-lg font-medium hover:bg-maicer-cyan-dark transition-colors"
            >
              Orçamento Grátis
            </Link>
          </div>*/}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden ${isMenuOpen ? "block" : "hidden"} py-4 border-t`}
        >
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-maicer-blue transition-colors"
            >
              Início
            </Link>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-500">Serviços</p>
              <Link
                href="/servicos/redes-sociais"
                className="block pl-4 text-gray-700 hover:text-maicer-blue transition-colors"
              >
                Gestão de Redes Sociais
              </Link>
              <Link
                href="/servicos/desenvolvimento-web"
                className="block pl-4 text-gray-700 hover:text-maicer-blue transition-colors"
              >
                Desenvolvimento Web
              </Link>
              <Link
                href="/servicos/pacotes-digitais"
                className="block pl-4 text-gray-700 hover:text-maicer-blue transition-colors"
              >
                Pacotes Integrados
              </Link>
            </div>
            <Link
              href="/portfolio"
              className="text-gray-700 hover:text-maicer-blue transition-colors"
            >
              Portfólio
            </Link>
            <Link
              href="/sobre"
              className="text-gray-700 hover:text-maicer-blue transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-maicer-blue transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contacto"
              className="text-gray-700 hover:text-maicer-blue transition-colors"
            >
              Contacto
            </Link>
            {/*            <Link
              href="/orcamento"
              className="bg-maicer-cyan text-white px-4 py-2 rounded-lg font-medium hover:bg-maicer-cyan-dark transition-colors text-center"
            >
              Orçamento Grátis
            </Link>*/}
          </div>
        </div>
      </nav>
    </header>
  );
}
