import { motion } from 'framer-motion';

const profiles = [
  {
    id: 'paciente',
    title: 'Paciente',
    description: 'Accedé a tratamientos y conectá con profesionales',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path
          d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'profesional',
    title: 'Profesional',
    description: 'Gestioná tu práctica y expandí tu red médica',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 6V12L16 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7363 6.95991 21.2388 8.17317C21.7413 9.38643 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C9.34783 22 6.80429 20.9464 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 10.6868 2.25866 9.38643 2.76121 8.17317C3.26375 6.95991 4.00035 5.85752 4.92893 4.92893C5.85752 4.00035 6.95991 3.26375 8.17317 2.7612C9.38643 2.25866 10.6868 2 12 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'ong',
    title: 'ONG',
    description: 'Coordiná campañas y maximizá el impacto social',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path
          d="M4.5 16.5C3 14.46 2 11.86 2 9C2 4 6.5 2 12 2C17.5 2 22 4 22 9C22 14 19 17.55 14.73 20.13C13.76 20.71 12.38 21.13 12 21.13C11.62 21.13 10.24 20.71 9.27 20.13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'pyme',
    title: 'PyME',
    description: 'Integrá soluciones de salud para tu empresa',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.27002 6.96L12 12.01L20.73 6.96"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 22.08V12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'inversor',
    title: 'Inversor',
    description: 'Descubrí oportunidades en salud innovadora',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2V22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'revista',
    title: 'Revista',
    description: 'Difundí contenido médico de calidad verificada',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const ProfileSelector = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Título de Sección */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">
            ¿Quién sos dentro de Cannis?
          </h2>
          <p className="font-inter text-gray-600 text-lg max-w-2xl mx-auto">
            Seleccioná tu perfil para acceder a herramientas diseñadas para tu ecosistema
          </p>
          <div className="mt-4 flex items-center justify-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-cannis-green animate-pulse"></div>
            <span className="data-label">SISTEMA ACTIVO</span>
          </div>
        </motion.div>

        {/* Tarjetas de Perfil */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {profiles.map((profile) => (
            <motion.div
              key={profile.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="tactical-card p-8 cursor-pointer group"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icono */}
                <div className="w-20 h-20 rounded-xl bg-cannis-light flex items-center justify-center mb-6 text-cannis-green group-hover:bg-cannis-green group-hover:text-white transition-all duration-300">
                  {profile.icon}
                </div>

                {/* Título */}
                <h3 className="font-agrandir text-xl font-bold text-cannis-dark mb-3">
                  {profile.title}
                </h3>

                {/* Descripción */}
                <p className="font-inter text-gray-600 text-sm leading-relaxed">
                  {profile.description}
                </p>

                {/* Indicador de Acción */}
                <div className="mt-6 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="data-label text-cannis-green">ACCEDER</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-cannis-green"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSelector;
