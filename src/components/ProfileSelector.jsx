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

const ProfileSelector = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        mass: 0.8,
      },
    },
  };

  return (
    <section className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Título Central Simplificado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <h2 className="font-agrandir text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            ¿Quién sos dentro de Cannis?
          </h2>
          <p className="font-inter text-lg text-gray-600">
            Elegí tu perfil y te guiamos
          </p>
        </motion.div>

        {/* Bento Grid Asimétrico */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 max-w-5xl mx-auto"
        >
          {profiles.map((profile) => {
            const IconComponent = profile.icon;
            return (
              <motion.div
                key={profile.id}
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)',
                  x: -2,
                  y: -2,
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className={`group relative ${profile.span} ${profile.color} rounded-3xl border-3 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] cursor-pointer overflow-hidden p-8 will-change-transform`}
              >
                {/* Contenido */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  {/* Ícono Animado */}
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.15,
                      transition: {
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }
                    }}
                    className="inline-block will-change-transform"
                  >
                    <IconComponent
                      size={64}
                      className="text-white mb-4"
                      strokeWidth={2.5}
                    />
                  </motion.div>

                  {/* Textos */}
                  <div>
                    <h3 className="font-agrandir text-3xl font-bold text-white mb-1">
                      {profile.title}
                    </h3>
                    <p className="font-inter text-white/90 text-sm font-medium">
                      {profile.subtitle}
                    </p>
                  </div>
                </div>

                {/* Patrón de Fondo */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_white_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSelector;
