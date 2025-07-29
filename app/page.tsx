export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      {/*<section className="min-h-screen bg-gradient-to-br from-[maicer-blue] to-[maicer-cyan] text-white">*/}
      <section className="min-h-screen bg-gradient-to-br from-maicer-blue to-maicer-cyan text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">
            MAICER TECH
          </h1>
          <p className="text-xl mb-8 animate-slide-up">
            Transforme o Seu Negócio com Tecnologia Digital
          </p>
          <div className="flex gap-4">
            <button className="btn-primary">Ver Serviços</button>
            <button className="btn-secondary">Consulta Gratuita</button>
          </div>
        </div>
      </section>

      {/* Gradient text example */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center gradient-text">
          Soluções Digitais Completas
        </h2>
      </section>

      {/* Using custom colors directly */}
      <div className="bg-maicer-blue text-maicer-light p-8">
        <p>Conteúdo com cores personalizadas</p>
      </div>
    </main>
  );
}
