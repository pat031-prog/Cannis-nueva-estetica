import { motion } from 'framer-motion';
import { User, Stethoscope, Heart, Building2, TrendingUp, FileText } from 'lucide-react';

const profiles = [
  {
    id: 'paciente',
    title: 'PACIENTES',
    subtitle: 'Gestión Reprocann',
    icon: User,
    color: 'bg-gradient-to-br from-purple-500 to-purple-600',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 'profesional',
    title: 'PROFESIONALES',
    subtitle: 'Red Médica',
    icon: Stethoscope,
    color: 'bg-gradient-to-br from-cannis-green to-green-600',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    id: 'ong',
    title: 'ONGs',
    subtitle: 'Campañas Solidarias',
    icon: Heart,
    color: 'bg-gradient-to-br from-rose-500 to-pink-600',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'pyme',
    title: 'PyMEs',
    subtitle: 'Salud Corporativa',
    icon: Building2,
    color: 'bg-gradient-to-br from-blue-500 to-blue-600',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'inversor',
    title: 'INVERSORES',
    subtitle: 'Oportunidades',
    icon: TrendingUp,
    color: 'bg-gradient-to-br from-amber-500 to-orange-600',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    id: 'revista',
    title: 'MEDIOS',
    subtitle: 'Contenido Verificado',
    icon: FileText,
    color: 'bg-gradient-to-br from-cannis-teal to-teal-600',
    span: 'md:col-span-1 md:row-span-1',
  },
];

const BentoSlide = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <div className="relative h-full w-full flex items-center justify-center p-8 overflow-hidden">
      {/* Glassmorphic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-white/60 backdrop-blur-md px-6 py-3 rounded-2xl border-2 border-white/80 mb-6">
            <h2 className="font-agrandir text-6xl font-bold text-gray-900">
              ¿Quién sos dentro de Cannis?
            </h2>
          </div>
          <p className="font-inter text-xl text-gray-700">
            Elegí tu perfil y explorá el ecosistema
          </p>
        </motion.div>

        {/* Bento Grid con Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4"
        >
          {profiles.map((profile) => {
            const IconComponent = profile.icon;
            return (
              <motion.div
                key={profile.id}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -2, 2, 0],
                  rotateY: 10,
                  transition: { duration: 0.4 },
                }}
                whileTap={{ scale: 0.95 }}
                className={`group relative ${profile.span} ${profile.color} rounded-3xl border-3 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px]] cursor-pointer overflow-hidden`}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
              >
                {/* Contenido con glassmorphism */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8 bg-white/10 backdrop-blur-sm">
                  {/* Ícono con animación 3D */}
                  <motion.div
                    whileHover={{
                      rotateY: 360,
                      scale: 1.2,
                    }}
                    transition={{ duration: 0.8 }}
                    className="inline-block"
                  >
                    <IconComponent
                      size={72}
                      className="text-white drop-shadow-lg"
                      strokeWidth={2.5}
                    />
                  </motion.div>

                  {/* Textos */}
                  <div>
                    <h3 className="font-agrandir text-4xl font-bold text-white mb-2 drop-shadow-md">
                      {profile.title}
                    </h3>
                    <p className="font-inter text-white/95 text-base font-semibold">
                      {profile.subtitle}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center"
                  >
                    <span className="text-white font-bold text-lg">→</span>
                  </motion.div>
                </div>

                {/* Patrón de fondo animado */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_white_1px,_transparent_1px)] bg-[length:32px_32px]"></div>
                </motion.div>

                {/* Brillo en hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default BentoSlide;
