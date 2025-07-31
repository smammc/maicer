// app/tech/page.tsx
"use client";

export default function TechPage() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="min-h-screen bg-gradient-to-br from-tech-primary to-tech-accent text-white flex items-center relative overflow-hidden pt-16 sm:pt-20">
          {/* Background Pattern (optional) */}
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in">
                Engenharia e Desenvolvimento de Software
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/90 animate-slide-up animation-delay-200">
                Soluções tecnológicas inovadoras e projetos de engenharia de
                software de alta qualidade
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up animation-delay-400">
                <button className="btn-theme-primary text-base sm:text-lg px-4 sm:px-6 py-2.5 sm:py-3">
                  Ver Projetos
                </button>
                <button className="btn-theme-secondary text-base sm:text-lg px-4 sm:px-6 py-2.5 sm:py-3">
                  Orçamento Gratuito
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator - Hidden on mobile */}
          <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-white/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              A MAICER Tech é o seu parceiro tecnológico de excelência
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto">
              Combinamos expertise técnica com metodologias ágeis para entregar
              soluções de software robustas, escaláveis e inovadoras
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              <div className="text-center p-4 sm:p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-tech-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 text-tech-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Tecnologias Avançadas
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  React, Next.js, Node.js, Python, Cloud Computing e as mais
                  recentes frameworks
                </p>
              </div>

              <div className="text-center p-4 sm:p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-tech-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 text-tech-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Entrega Rápida
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Metodologias ágeis garantem entregas em 2-8 semanas com
                  qualidade superior
                </p>
              </div>

              <div className="text-center p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-tech-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 text-tech-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Qualidade Garantida
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Testes automatizados, código limpo e suporte técnico contínuo
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
              Soluções Tecnológicas que Impulsionam o Futuro
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {/* Web Development Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 sm:h-48 bg-gradient-to-br from-tech-accent to-tech-button flex items-center justify-center">
                  <svg
                    className="w-16 sm:w-20 h-16 sm:h-20 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                    Desenvolvimento Web
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    Aplicações web modernas, responsivas e otimizadas com as
                    mais recentes tecnologias
                  </p>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-tech-accent flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      React & Next.js
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-tech-accent flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Design responsivo
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-tech-accent flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Performance otimizada
                    </li>
                  </ul>
                  <p className="text-xs sm:text-sm font-semibold text-tech-accent mb-3 sm:mb-4">
                    A partir de €2.500
                  </p>
                  <a
                    href="/tech/servicos/desenvolvimento-web"
                    className="btn-theme-secondary block text-center text-sm sm:text-base"
                  >
                    Saber Mais
                  </a>
                </div>
              </div>

              {/* Mobile Development Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 sm:h-48 bg-gradient-to-br from-tech-primary to-tech-secondary flex items-center justify-center">
                  <svg
                    className="w-16 sm:w-20 h-16 sm:h-20 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"
                    />
                  </svg>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                    Desenvolvimento Mobile
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    Aplicações móveis nativas e híbridas para iOS e Android com
                    experiência superior
                  </p>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-tech-primary flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      React Native & Flutter
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-tech-primary flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      iOS & Android
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-tech-primary flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      UI/UX otimizada
                    </li>
                  </ul>
                  <p className="text-xs sm:text-sm font-semibold text-tech-primary mb-3 sm:mb-4">
                    A partir de €5.000
                  </p>
                  <a
                    href="/tech/servicos/desenvolvimento-mobile"
                    className="btn-theme-primary block text-center text-sm sm:text-base"
                  >
                    Saber Mais
                  </a>
                </div>
              </div>

              {/* Software Engineering Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 sm:h-48 bg-gradient-to-br from-tech-button to-tech-accent flex items-center justify-center">
                  <svg
                    className="w-16 sm:w-20 h-16 sm:h-20 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                    Engenharia de Software
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    Arquitetura de sistemas complexos, APIs robustas e soluções
                    escaláveis para empresas
                  </p>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-tech-button flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Microserviços
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-tech-button flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Cloud Computing
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-tech-button flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      DevOps & CI/CD
                    </li>
                  </ul>
                  <p className="text-xs sm:text-sm font-semibold text-tech-button mb-3 sm:mb-4">
                    A partir de €8.000
                  </p>
                  <a
                    href="/tech/servicos/engenharia-software"
                    className="btn-theme-primary block text-center text-sm sm:text-base"
                  >
                    Saber Mais
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-tech-primary to-tech-accent text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Pronto para Transformar a Sua Visão em Realidade?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto">
              Contacte-nos hoje para discutir o seu projeto e descobrir como
              podemos criar soluções tecnológicas inovadoras para o seu negócio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/tech/contacto"
                className="btn-theme-primary bg-white text-tech-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Orçamento Gratuito
              </a>
              <a
                href="/tech/portfolio"
                className="btn-theme-secondary border-white text-white hover:bg-white hover:text-tech-primary px-8 py-3 text-lg font-semibold"
              >
                Ver Portfolio
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
