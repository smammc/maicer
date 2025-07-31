// src/app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Building2,
  Scale,
  Megaphone,
  Zap,
  Users,
  Award,
  ChevronDown,
} from "lucide-react";

const companies = [
  {
    id: "media",
    name: "MAICER Media",
    description: "Marketing digital e gestão profissional de redes sociais",
    color: "from-purple-500 to-pink-500",
    icon: Megaphone,
    services: [
      "Social Media Management",
      "Digital Marketing",
      "Brand Strategy",
    ],
  },
  {
    id: "capital",
    name: "MAICER Capital",
    description:
      "Investimentos imobiliários inteligentes e gestão de capital estratégica",
    color: "from-green-500 to-emerald-500",
    icon: Building2,
    services: [
      "Real Estate Investment",
      "Portfolio Management",
      "Strategic Capital",
    ],
  },
  {
    id: "tech",
    name: "MAICER Tech",
    description:
      "Engenharia de software e desenvolvimento de soluções tecnológicas avançadas",
    color: "from-blue-500 to-cyan-500",
    icon: Code,
    services: ["Software Development", "Tech Solutions", "Digital Innovation"],
  },
  {
    id: "law",
    name: "MAICER Law",
    description:
      "Consultoria jurídica especializada e assessoria legal completa",
    color: "from-amber-500 to-orange-500",
    icon: Scale,
    services: ["Legal Consulting", "Corporate Law", "Compliance"],
  },
];

const stats = [
  { number: "50+", label: "Projetos Concluídos" },
  { number: "4", label: "Áreas de Especialização" },
  { number: "15+", label: "Anos de Experiência" },
  { number: "100%", label: "Satisfação do Cliente" },
];

const features = [
  {
    icon: Zap,
    title: "Soluções Integradas",
    description:
      "Uma única parceria para capital, tecnologia, direito e marketing",
  },
  {
    icon: Award,
    title: "Experiência Comprovada",
    description:
      "Anos de experiência no mercado português com resultados consistentes",
  },
  {
    icon: Users,
    title: "Suporte Dedicado",
    description:
      "Equipa especializada comprometida com o sucesso do seu projeto",
  },
];

export default function HomePage() {
  const [currentCompany, setCurrentCompany] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCompany((prev) => (prev + 1) % companies.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
            <div className="absolute top-40 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="block">Soluções</span>
              <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
                Integradas
              </span>
              <span className="block">para o Seu Sucesso</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Uma holding diversificada que oferece soluções completas em capital,
            tecnologia, direito e media empresariais portuguesas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href="#companies"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explorar Soluções
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#contact"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
            >
              Contactar
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
        </motion.div>
      </section>

      {/* Companies Section */}
      <section id="companies" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              As Nossas Empresas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quatro áreas de especialização, uma única missão: o seu sucesso
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companies.map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/${company.id}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${company.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <company.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                      {company.name}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {company.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {company.services.map((service, serviceIndex) => (
                        <div
                          key={serviceIndex}
                          className="flex items-center text-sm text-gray-500"
                        >
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${company.color} mr-3`}
                          />
                          {service}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center text-gray-400 group-hover:text-gray-600 transition-colors">
                      <span className="text-sm font-medium">Explorar</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Porquê Escolher a MAICER?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma holding com visão integrada para todas as necessidades do seu
              negócio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Descubra como as nossas soluções integradas podem transformar o
              seu negócio
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contactar Agora
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Saber Mais
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
