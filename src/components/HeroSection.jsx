import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative py-20 px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido Izquierdo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Título Principal */}
            <h1 className="font-agrandir text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              El ecosistema médico{' '}
              <span className="text-cannis-green">conectado</span>
            </h1>

            {/* Descripción */}
            <p className="font-inter text-lg text-gray-600 mb-8 leading-relaxed">
              Plataforma bio-network que une profesionales de la salud, ONGs,
              pacientes e inversores en una red inteligente y transparente.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-cannis-green text-white px-7 py-3.5 rounded-lg font-inter font-medium text-sm transition-all duration-200 hover:bg-opacity-90 hover:shadow-md active:scale-95">
                Comenzar Ahora
              </button>
              <button className="bg-white text-cannis-green border-2 border-cannis-green px-7 py-3.5 rounded-lg font-inter font-medium text-sm transition-all duration-200 hover:bg-cannis-green hover:text-white active:scale-95">
                Ver Demo
              </button>
            </div>

            {/* Métricas */}
            <div className="grid grid-cols-3 gap-6">
              <div className="border-l-2 border-cannis-green pl-4">
                <p className="text-3xl font-bold text-gray-900 mb-1">1.2K+</p>
                <p className="font-inter text-sm text-gray-600">
                  Profesionales
                </p>
              </div>
              <div className="border-l-2 border-cannis-green pl-4">
                <p className="text-3xl font-bold text-gray-900 mb-1">180+</p>
                <p className="font-inter text-sm text-gray-600">ONGs Activas</p>
              </div>
              <div className="border-l-2 border-cannis-green pl-4">
                <p className="text-3xl font-bold text-gray-900 mb-1">25K+</p>
                <p className="font-inter text-sm text-gray-600">
                  Beneficiarios
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contenido Derecho - Ilustración Minimalista */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md h-96 flex items-center justify-center">
              {/* Círculo Principal */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-cannis-green to-cannis-teal opacity-20"
              ></motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-cannis-teal to-cannis-green opacity-10"
              ></motion.div>

              {/* Logo Central */}
              <div className="relative w-32 h-32 rounded-2xl bg-white shadow-md border border-gray-200 flex items-center justify-center z-10">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-cannis-green"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Nodos Flotantes */}
              {[
                { top: '10%', left: '20%', delay: 0 },
                { top: '15%', right: '15%', delay: 0.5 },
                { bottom: '20%', left: '10%', delay: 1 },
                { bottom: '15%', right: '20%', delay: 1.5 },
              ].map((pos, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: pos.delay }}
                  className="absolute w-12 h-12 rounded-lg bg-white shadow-sm border border-gray-200 flex items-center justify-center"
                  style={pos}
                >
                  <div className="w-6 h-6 rounded-full bg-cannis-light"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
