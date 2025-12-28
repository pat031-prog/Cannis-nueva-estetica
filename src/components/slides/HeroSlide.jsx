import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

const HeroSlide = ({ onNext }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 50,
        y: (e.clientY / window.innerHeight - 0.5) * 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
      {/* Partículas de fondo con parallax */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cannis-green/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Contenido Principal */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        {/* Glassmorphic Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/40 backdrop-blur-xl rounded-3xl border-3 border-white/60 shadow-2xl p-12"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-cannis-green/10 backdrop-blur-md px-4 py-2 rounded-full border border-cannis-green/30 mb-8"
          >
            <Sparkles size={16} className="text-cannis-green" />
            <span className="font-inter text-sm font-medium text-cannis-green">
              Plataforma Bio-Network
            </span>
          </motion.div>

          {/* Título con texto animado */}
          <div className="mb-8">
            <h1 className="font-agrandir text-7xl md:text-8xl font-bold text-gray-900 leading-tight mb-4">
              El ecosistema médico
            </h1>
            <div className="h-32 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentIndex}
                  initial={{ y: 40, opacity: 0, filter: 'blur(10px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -40, opacity: 0, filter: 'blur(10px)' }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 25,
                  }}
                  className={`font-agrandir text-7xl md:text-8xl font-bold ${dynamicTexts[currentIndex].color}`}
                >
                  {dynamicTexts[currentIndex].text}
                </motion.h1>
              </AnimatePresence>
            </div>
          </div>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-inter text-2xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Red inteligente que une profesionales, ONGs y pacientes en tiempo real
          </motion.p>

          {/* Botón de acción */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="group inline-flex items-center gap-3 bg-cannis-green text-white px-10 py-5 rounded-2xl font-inter font-bold text-lg border-3 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
          >
            Explorar Ecosistema
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Métricas flotantes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex justify-center gap-8"
        >
          {[
            { value: '1.2K+', label: 'Profesionales' },
            { value: '180+', label: 'ONGs' },
            { value: '25K+', label: 'Beneficiarios' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="bg-white/60 backdrop-blur-md px-6 py-4 rounded-2xl border-2 border-white/80"
            >
              <p className="font-mono text-3xl font-bold text-gray-900">
                {stat.value}
              </p>
              <p className="font-inter text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSlide;
