// app/capital/page.tsx
"use client";

export default function CapitalPage() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="min-h-screen bg-gradient-to-br from-capital-primary to-capital-accent text-white flex items-center relative overflow-hidden pt-16 sm:pt-20">
          {/* Background Pattern (optional) */}
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in">
                Investimentos Imobiliários Inteligentes
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/90 animate-slide-up animation-delay-200">
                Soluções de capital e investimento imobiliário para maximizar o
                seu património em Portugal
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up animation-delay-400">
                <button className="btn-theme-primary text-base sm:text-lg px-4 sm:px-6 py-2.5 sm:py-3">
                  Ver Oportunidades
                </button>
                <button className="btn-theme-secondary text-base sm:text-lg px-4 sm:px-6 py-2.5 sm:py-3">
                  Consultoria Gratuita
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
              A MAICER Capital é o seu parceiro de investimento de confiança
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto">
              Combinamos experiência no mercado imobiliário português com
              estratégias de investimento comprovadas para garantir retornos
              sustentáveis
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              <div className="text-center p-4 sm:p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-capital-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 text-capital-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Portfolio Diversificado
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Imóveis residenciais, comerciais e de investimento em
                  localizações premium
                </p>
              </div>

              <div className="text-center p-4 sm:p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-capital-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 text-capital-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Retornos Consistentes
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  ROI médio de 12-18% ao ano com valorização patrimonial a longo
                  prazo
                </p>
              </div>

              <div className="text-center p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-capital-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 text-capital-primary"
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
                  Investimento Seguro
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Due diligence rigorosa e gestão profissional de todos os
                  investimentos
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
              Soluções de Capital que Criam Valor
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {/* Real Estate Investment Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 sm:h-48 bg-gradient-to-br from-capital-accent to-capital-button flex items-center justify-center">
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
                      d="M3 21l18-18M3 7l18 0M7 3v18"
                    />
                  </svg>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                    Investimento Imobiliário
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    Oportunidades de investimento em imóveis residenciais e
                    comerciais com alto potencial de valorização
                  </p>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-capital-accent flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Propriedades premium
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-capital-accent flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Localizações estratégicas
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-capital-accent flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Gestão completa
                    </li>
                  </ul>
                  <p className="text-xs sm:text-sm font-semibold text-capital-accent mb-3 sm:mb-4">
                    A partir de €50.000
                  </p>
                  <a
                    href="/capital/servicos/investimento-imobiliario"
                    className="btn-theme-secondary block text-center text-sm sm:text-base"
                  >
                    Saber Mais
                  </a>
                </div>
              </div>

              {/* Capital Management Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 sm:h-48 bg-gradient-to-br from-capital-primary to-capital-secondary flex items-center justify-center">
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                    Gestão de Capital
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    Serviços personalizados de gestão patrimonial e consultoria
                    financeira estratégica
                  </p>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-capital-primary flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Portfolio diversificado
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-capital-primary flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Análise de risco
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-capital-primary flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Relatórios trimestrais
                    </li>
                  </ul>
                  <p className="text-xs sm:text-sm font-semibold text-capital-primary mb-3 sm:mb-4">
                    Taxa de gestão: 1.5% ao ano
                  </p>
                  <a
                    href="/capital/servicos/gestao-capital"
                    className="btn-theme-primary block text-center text-sm sm:text-base"
                  >
                    Saber Mais
                  </a>
                </div>
              </div>

              {/* Investment Consulting Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 sm:h-48 bg-gradient-to-br from-capital-button to-capital-accent flex items-center justify-center">
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                    Consultoria de Investimento
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    Assessoria especializada para maximizar o retorno dos seus
                    investimentos e minimizar riscos
                  </p>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-capital-button flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Análise de mercado
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-capital-button flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Estratégias personalizadas
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-capital-button flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Acompanhamento contínuo
                    </li>
                  </ul>
                  <p className="text-xs sm:text-sm font-semibold text-capital-button mb-3 sm:mb-4">
                    A partir de €200/hora
                  </p>
                  <a
                    href="/capital/servicos/consultoria-investimento"
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
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-capital-primary to-capital-accent text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Pronto para Fazer o Seu Capital Crescer?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto">
              Contacte-nos hoje para uma consulta gratuita e descubra as
              melhores oportunidades de investimento para o seu perfil
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/capital/contacto"
                className="btn-theme-primary bg-white text-capital-primary hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Consultoria Gratuita
              </a>
              <a
                href="/capital/portfolio"
                className="btn-theme-secondary border-white text-white hover:bg-white hover:text-capital-primary px-8 py-3 text-lg font-semibold"
              >
                Ver Oportunidades
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
