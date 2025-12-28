import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dynamicTexts = [
    { text: 'conectado', color: 'text-cannis-green' },
    { text: 'para Médicos', color: 'text-cannis-teal' },
    { text: 'para Pacientes', color: 'text-purple-600' },
    { text: 'para ONGs', color: 'text-orange-500' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 px-6 lg:px-8 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Hero Dinámico Centrado */}
        <div className="text-center mb-12">
          {/* Título con Texto Animado */}
          <div className="mb-6">
            <h1 className="font-agrandir text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
              El ecosistema médico
            </h1>
            <div className="h-24 flex items-center justify-center mt-2">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 20,
                  }}
                  className={`font-agrandir text-6xl md:text-7xl font-bold ${dynamicTexts[currentIndex].color}`}
                >
                  {dynamicTexts[currentIndex].text}
                </motion.h1>
              </AnimatePresence>
            </div>
          </div>

          {/* Descripción Concreta */}
          <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Red inteligente que une profesionales, ONGs y pacientes en una
            plataforma transparente
          </p>

          {/* CTAs Modernos */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-cannis-green text-white px-8 py-4 rounded-2xl font-inter font-semibold text-base border-3 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              Comenzar Ahora
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-inter font-semibold text-base border-3 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              <span className="flex items-center gap-2">
                <Sparkles size={20} />
                Ver Demo
              </span>
            </motion.button>
          </div>

          {/* Métricas Compactas en Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-6 bg-white px-8 py-4 rounded-full border-2 border-gray-900 shadow-md"
          >
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">1.2K+</p>
              <p className="font-inter text-xs text-gray-600">Profesionales</p>
            </div>
            <div className="w-px h-10 bg-gray-300"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">180+</p>
              <p className="font-inter text-xs text-gray-600">ONGs</p>
            </div>
            <div className="w-px h-10 bg-gray-300"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">25K+</p>
              <p className="font-inter text-xs text-gray-600">Beneficiarios</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
