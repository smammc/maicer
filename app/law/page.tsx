// app/law/page.tsx
"use client";

export default function LawPage() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="min-h-screen bg-gradient-to-br from-law-primary to-law-accent text-white flex items-center relative overflow-hidden pt-16 sm:pt-20">
          {/* Background Pattern (optional) */}
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in">
                Consultoria Jurídica de Excelência
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/90 animate-slide-up animation-delay-200">
                Soluções legais especializadas para empresas e particulares em
                Portugal
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up animation-delay-400">
                <button className="btn-theme-primary text-base sm:text-lg px-4 sm:px-6 py-2.5 sm:py-3">
                  Ver Serviços
                </button>
                <button className="btn-theme-secondary text-base sm:text-lg px-4 sm:px-6 py-2.5 sm:py-3">
                  Consulta Gratuita
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
              A MAICER Law é o seu parceiro jurídico de confiança
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto">
              Combinamos expertise jurídica com conhecimento profundo do direito
              português para proteger os seus interesses e garantir o sucesso
              dos seus projetos
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              <div className="text-center p-4 sm:p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-law-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 text-law-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Experiência Comprovada
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Mais de 15 anos de experiência em direito empresarial e civil
                  português
                </p>
              </div>

              <div className="text-center p-4 sm:p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-law-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 text-law-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Soluções Eficazes
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  95% de taxa de sucesso em processos judiciais e resoluções
                  extrajudiciais
                </p>
              </div>

              <div className="text-center p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-law-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 text-law-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Resposta Rápida
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Atendimento personalizado e resposta em até 24 horas para
                  questões urgentes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
              Serviços Jurídicos Especializados
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {/* Corporate law Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 sm:h-48 bg-gradient-to-br from-law-accent to-law-button flex items-center justify-center">
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                    Direito Empresarial
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    Assessoria jurídica completa para empresas, desde a
                    constituição até operações complexas
                  </p>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-law-accent flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Constituição de empresas
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-law-accent flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Contratos comerciais
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-law-accent flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Compliance e regulamentação
                    </li>
                  </ul>
                  <p className="text-xs sm:text-sm font-semibold text-law-accent mb-3 sm:mb-4">
                    A partir de €150/hora
                  </p>
                  <a
                    href="/law/servicos/direito-empresarial"
                    className="btn-theme-secondary block text-center text-sm sm:text-base"
                  >
                    Saber Mais
                  </a>
                </div>
              </div>

              {/* Real Estate law Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 sm:h-48 bg-gradient-to-br from-law-primary to-law-secondary flex items-center justify-center">
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
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                    Direito Imobiliário
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    Especialização em transações imobiliárias, arrendamento e
                    desenvolvimento urbano
                  </p>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-law-primary flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Compra e venda
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-law-primary flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Contratos de arrendamento
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-law-primary flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Licenciamento urbanístico
                    </li>
                  </ul>
                  <p className="text-xs sm:text-sm font-semibold text-law-primary mb-3 sm:mb-4">
                    A partir de €200/hora
                  </p>
                  <a
                    href="/law/servicos/direito-imobiliario"
                    className="btn-theme-primary block text-center text-sm sm:text-base"
                  >
                    Saber Mais
                  </a>
                </div>
              </div>

              {/* Civil law Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 sm:h-48 bg-gradient-to-br from-law-button to-law-accent flex items-center justify-center">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                    Direito Civil
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    Assessoria jurídica para particulares em questões
                    familiares, sucessões e responsabilidade civil
                  </p>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-law-button flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Direito da família
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-law-button flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Sucessões e heranças
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-law-button flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Responsabilidade civil
                    </li>
                  </ul>
                  <p className="text-xs sm:text-sm font-semibold text-law-button mb-3 sm:mb-4">
                    A partir de €120/hora
                  </p>
                  <a
                    href="/law/servicos/direito-civil"
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
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-law-primary to-law-accent text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Precisa de Assessoria Jurídica Especializada?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto">
              Contacte-nos hoje para uma consulta gratuita e proteja os seus
              direitos com o apoio de especialistas em direito português
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/law/contacto"
                className="btn-theme-primary bg-white text-law-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Consulta Gratuita
              </a>
              <a
                href="/law/casos-sucesso"
                className="btn-theme-secondary border-white text-white hover:bg-white hover:text-law-primary px-8 py-3 text-lg font-semibold"
              >
                Casos de Sucesso
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
