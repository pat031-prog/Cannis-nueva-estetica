import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido Izquierdo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-cannis-light rounded-full px-4 py-2 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-cannis-green animate-pulse"></div>
              <span className="data-label text-cannis-green">
                SISTEMA OPERATIVO
              </span>
            </motion.div>

            {/* Título Principal */}
            <h1 className="font-agrandir text-5xl md:text-6xl font-bold text-cannis-dark mb-6 leading-tight">
              El ecosistema médico{' '}
              <span className="text-cannis-green">conectado</span>
            </h1>

            {/* Descripción */}
            <p className="font-inter text-lg text-gray-600 mb-8 leading-relaxed">
              Plataforma bio-network que une profesionales de la salud, ONGs,
              pacientes e inversores en una red inteligente y transparente.
              Transformamos la colaboración médica con tecnología de vanguardia.
            </p>

            {/* Métricas en Vivo */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="border-l-2 border-cannis-green pl-4">
                <p className="font-mono text-3xl font-bold text-cannis-dark">
                  1.2K+
                </p>
                <p className="font-inter text-sm text-gray-600">
                  Profesionales
                </p>
              </div>
              <div className="border-l-2 border-cannis-teal pl-4">
                <p className="font-mono text-3xl font-bold text-cannis-dark">
                  180+
                </p>
                <p className="font-inter text-sm text-gray-600">
                  ONGs Activas
                </p>
              </div>
              <div className="border-l-2 border-cannis-green pl-4">
                <p className="font-mono text-3xl font-bold text-cannis-dark">
                  25K+
                </p>
                <p className="font-inter text-sm text-gray-600">
                  Beneficiarios
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">Comenzar Ahora</button>
              <button className="btn-secondary">Ver Demo</button>
            </div>
          </motion.div>

          {/* Contenido Derecho - Gráfico de Red */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Nodo Central */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-cannis-green to-cannis-teal shadow-2xl flex items-center justify-center"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
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
              </motion.div>

              {/* Nodos Satélite */}
              {[0, 1, 2, 3, 4, 5].map((index) => {
                const angle = (index * 60 * Math.PI) / 180;
                const radius = 140;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      rotate: 360,
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.1,
                      rotate: {
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                      },
                    }}
                    className="absolute w-16 h-16 rounded-full bg-white shadow-tactical border-2 border-cannis-green/20 flex items-center justify-center"
                    style={{
                      left: `calc(50% + ${x}px - 2rem)`,
                      top: `calc(50% + ${y}px - 2rem)`,
                    }}
                  >
                    <div className="w-8 h-8 rounded-full bg-cannis-light"></div>
                  </motion.div>
                );
              })}

              {/* Líneas de Conexión */}
              <svg
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: -1 }}
              >
                {[0, 1, 2, 3, 4, 5].map((index) => {
                  const angle = (index * 60 * Math.PI) / 180;
                  const radius = 140;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.line
                      key={index}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      x1="50%"
                      y1="50%"
                      x2={`calc(50% + ${x}px)`}
                      y2={`calc(50% + ${y}px)`}
                      stroke="#1B7E44"
                      strokeWidth="1"
                      opacity="0.2"
                    />
                  );
                })}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
