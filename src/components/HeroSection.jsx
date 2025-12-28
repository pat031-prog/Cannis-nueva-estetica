import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';

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
    }, 3500); // Más lento para dar tiempo a leer

    return () => clearInterval(interval);
  }, []);

  // Variantes para animación palabra por palabra
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay entre palabras
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.9, // Animación lenta y suave
        ease: [0.22, 1, 0.36, 1], // easeOutExpo
      },
    },
  };

  const title = ['El', 'ecosistema', 'médico'];

  return (
    <section className="relative h-screen flex items-center justify-center px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título con aparición palabra por palabra */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-6 mb-4">
            {title.map((word, index) => (
              <motion.h1
                key={index}
                variants={wordVariants}
                className="font-agrandir text-6xl md:text-8xl font-bold text-gray-900"
              >
                {word}
              </motion.h1>
            ))}
          </div>

          {/* Texto dinámico rotativo */}
          <div className="h-28 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentIndex}
                initial={{ y: 50, opacity: 0, filter: 'blur(8px)', scale: 0.9 }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)', scale: 1 }}
                exit={{ y: -50, opacity: 0, filter: 'blur(8px)', scale: 0.9 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`font-agrandir text-6xl md:text-8xl font-bold ${dynamicTexts[currentIndex].color}`}
              >
                {dynamicTexts[currentIndex].text}
              </motion.h1>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-inter text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Red inteligente que une profesionales, ONGs y pacientes en una
          plataforma transparente
        </motion.p>

        {/* CTAs con animaciones premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)',
              x: -2,
              y: -2,
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-cannis-green text-white px-10 py-5 rounded-2xl font-inter font-semibold text-lg border-3 border-gray-900 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] will-change-transform"
          >
            Comenzar Ahora
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '8px_8px_0px_0px_rgba(0,0,0,1)',
              x: -2,
              y: -2,
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-white text-gray-900 px-10 py-5 rounded-2xl font-inter font-semibold text-lg border-3 border-gray-900 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] will-change-transform inline-flex items-center justify-center gap-3"
          >
            <Sparkles size={22} />
            Ver Demo
          </motion.button>
        </motion.div>

        {/* Métricas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-8 bg-white/80 backdrop-blur-sm px-10 py-5 rounded-full border-3 border-gray-900 shadow-lg"
        >
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.15, y: -5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <p className="text-3xl font-bold text-gray-900 font-agrandir">1.2K+</p>
            <p className="font-inter text-sm text-gray-600 mt-1">Profesionales</p>
          </motion.div>
          <div className="w-px h-12 bg-gray-300"></div>
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.15, y: -5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <p className="text-3xl font-bold text-gray-900 font-agrandir">180+</p>
            <p className="font-inter text-sm text-gray-600 mt-1">ONGs</p>
          </motion.div>
          <div className="w-px h-12 bg-gray-300"></div>
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.15, y: -5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <p className="text-3xl font-bold text-gray-900 font-agrandir">25K+</p>
            <p className="font-inter text-sm text-gray-600 mt-1">Beneficiarios</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Flecha animada para invitar a scrollear */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown size={40} className="text-cannis-green" strokeWidth={2.5} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
