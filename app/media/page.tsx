// app/media/page.tsx
"use client";

export default function MediaPage() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="min-h-screen bg-gradient-to-br from-media-blue to-media-cyan text-white flex items-center relative overflow-hidden pt-16 sm:pt-20">
          {/* Background Pattern (optional) */}
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in">
                Transforme o Seu Negócio com Marketing Digital
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/90 animate-slide-up animation-delay-200">
                Gestão profissional de redes sociais e estratégias de marketing
                digital para empresas portuguesas
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
              A MAICER Media é o seu parceiro digital de confiança
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto">
              Combinamos criatividade com dados para impulsionar a presença
              digital do seu negócio nas redes sociais
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              <div className="text-center p-4 sm:p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-media-blue/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 text-media-blue"
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
                  Estratégia Digital
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Planeamento estratégico baseado em dados e tendências do
                  mercado
                </p>
              </div>

              <div className="text-center p-4 sm:p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-media-cyan/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 text-media-cyan"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Crescimento Comprovado
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Aumento médio de 400% no engagement e 250% no alcance dos
                  nossos clientes
                </p>
              </div>

              <div className="text-center p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-media-blue/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 text-media-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Suporte Dedicado
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Equipa especializada em marketing digital, sempre disponível
                  para o seu sucesso
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
              Serviços que Fazem a Diferença
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {/* Social media Management Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 sm:h-48 bg-gradient-to-br from-media-cyan to-media-cyan-light flex items-center justify-center">
                  <svg
                    className="w-16 sm:w-20 h-16 sm:h-20 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                    Gestão de Redes Sociais
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    Conteúdo profissional, engagement real e crescimento
                    consistente nas redes sociais
                  </p>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-media-cyan flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Criação de conteúdo
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-media-cyan flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Gestão de comunidade
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-media-cyan flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Relatórios mensais
                    </li>
                  </ul>
                  <p className="text-xs sm:text-sm font-semibold text-media-cyan mb-3 sm:mb-4">
                    A partir de €400/mês
                  </p>
                  <a
                    href="/media/servicos/redes-sociais"
                    className="btn-theme-secondary block text-center text-sm sm:text-base"
                  >
                    Saber Mais
                  </a>
                </div>
              </div>

              {/* Content Creation Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 sm:h-48 bg-gradient-to-br from-media-blue to-media-blue-light flex items-center justify-center">
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
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                    Criação de Conteúdo
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    Conteúdo visual e textual profissional que gera engagement e
                    conversões
                  </p>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-media-blue flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Design gráfico
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-media-blue flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Copywriting
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-media-blue flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Vídeo e fotografia
                    </li>
                  </ul>
                  <p className="text-xs sm:text-sm font-semibold text-media-blue mb-3 sm:mb-4">
                    A partir de €300/mês
                  </p>
                  <a
                    href="/media/servicos/criacao-conteudo"
                    className="btn-theme-primary block text-center text-sm sm:text-base"
                  >
                    Saber Mais
                  </a>
                </div>
              </div>

              {/* Digital Advertising Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-40 sm:h-48 bg-gradient-to-br from-media-cyan to-media-blue flex items-center justify-center">
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
                      d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                    />
                  </svg>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                    Publicidade Digital
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                    Campanhas otimizadas no Facebook, Instagram e Google para
                    maximizar o ROI
                  </p>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-media-cyan flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Facebook & Instagram Ads
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-media-cyan flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Google Ads
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3.5 sm:w-4 h-3.5 sm:h-4 mr-2 text-media-cyan flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Otimização contínua
                    </li>
                  </ul>
                  <p className="text-xs sm:text-sm font-semibold text-media-blue mb-3 sm:mb-4">
                    A partir de €500/mês + orçamento publicitário
                  </p>
                  <a
                    href="/media/servicos/publicidade-digital"
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
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-media-blue to-media-cyan text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Pronto para Transformar a Sua Presença Digital?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto">
              Contacte-nos hoje para uma consulta gratuita e descubra como
              podemos fazer crescer o seu negócio online
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/media/contacto"
                className="btn-theme-primary bg-white text-media-blue hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Consulta Gratuita
              </a>
              <a
                href="/media/portfolio"
                className="btn-theme-secondary border-white text-white hover:bg-white hover:text-media-blue px-8 py-3 text-lg font-semibold"
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
