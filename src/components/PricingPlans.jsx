import { useState } from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    id: 'basico',
    name: 'Plan Básico',
    subtitle: 'FOUNDATIONAL',
    monthlyPrice: 5000,
    yearlyPrice: 50000,
    features: [
      'Hasta 50 beneficiarios activos',
      'Dashboard básico de métricas',
      'Soporte por email',
      'Actualización mensual de datos',
      'Acceso a biblioteca de recursos',
    ],
    highlight: false,
  },
  {
    id: 'institucional',
    name: 'Plan Institucional',
    subtitle: 'ADVANCED',
    monthlyPrice: 12000,
    yearlyPrice: 120000,
    features: [
      'Hasta 200 beneficiarios activos',
      'Dashboard avanzado con IA',
      'Soporte prioritario 24/7',
      'Actualización en tiempo real',
      'Biblioteca premium + webinars',
      'Integración con sistemas externos',
      'Reportes personalizados',
    ],
    highlight: true,
  },
  {
    id: 'integral',
    name: 'Plan Integral',
    subtitle: 'ENTERPRISE',
    monthlyPrice: 25000,
    yearlyPrice: 250000,
    features: [
      'Beneficiarios ilimitados',
      'Dashboard completo + API dedicada',
      'Gestor de cuenta dedicado',
      'Sincronización instantánea',
      'Contenido exclusivo + certificaciones',
      'Integración total + custom workflows',
      'Analytics predictivo con ML',
      'Whitelabel disponible',
    ],
    highlight: false,
  },
];

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cannis-light">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mb-4">Planes para ONGs</h2>
          <p className="font-inter text-gray-600 text-lg max-w-2xl mx-auto">
            Equipamiento de misión diseñado para maximizar tu impacto social
          </p>
        </motion.div>

        {/* Toggle de Facturación */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center mb-12"
        >
          <div className="inline-flex items-center bg-white rounded-lg p-1 border border-gray-200">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md font-inter font-medium text-sm transition-all duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-cannis-green text-white'
                  : 'text-gray-600 hover:text-cannis-dark'
              }`}
            >
              MENSUAL
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md font-inter font-medium text-sm transition-all duration-200 ${
                billingCycle === 'yearly'
                  ? 'bg-cannis-green text-white'
                  : 'text-gray-600 hover:text-cannis-dark'
              }`}
            >
              ANUAL
            </button>
          </div>
          {billingCycle === 'yearly' && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="ml-3 text-sm font-inter font-medium text-cannis-green"
            >
              Ahorrá hasta 17%
            </motion.span>
          )}
        </motion.div>

        {/* Tarjetas de Planes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`tactical-card p-8 relative ${
                plan.highlight ? 'ring-2 ring-cannis-green' : ''
              }`}
            >
              {/* Badge Premium */}
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-cannis-green text-white px-4 py-1 rounded-bl-lg rounded-tr-lg">
                  <span className="font-mono text-xs font-medium tracking-wider">
                    POPULAR
                  </span>
                </div>
              )}

              {/* Header del Plan */}
              <div className="mb-6">
                <p className="data-label text-cannis-teal mb-2">
                  {plan.subtitle}
                </p>
                <h3 className="font-agrandir text-2xl font-bold text-cannis-dark mb-4">
                  {plan.name}
                </h3>

                {/* Precio */}
                <div className="flex items-baseline">
                  <span className="font-mono text-4xl font-bold text-cannis-dark">
                    $
                    {billingCycle === 'monthly'
                      ? plan.monthlyPrice.toLocaleString('es-AR')
                      : plan.yearlyPrice.toLocaleString('es-AR')}
                  </span>
                  <span className="ml-2 font-inter text-gray-500">
                    /{billingCycle === 'monthly' ? 'mes' : 'año'}
                  </span>
                </div>
              </div>

              {/* Separador */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6"></div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-cannis-green mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="font-inter text-sm text-gray-700 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Botón */}
              <button
                className={`w-full py-3 rounded-lg font-inter font-medium transition-all duration-200 ${
                  plan.highlight
                    ? 'bg-cannis-green text-white hover:bg-opacity-90 hover:shadow-lg'
                    : 'bg-white text-cannis-green border-2 border-cannis-green hover:bg-cannis-green hover:text-white'
                } active:scale-95`}
              >
                Elegir Plan
              </button>

              {/* Plan ID (estilo técnico) */}
              <div className="mt-6 text-center">
                <span className="font-mono text-xs text-gray-400 tracking-wider">
                  ID: {plan.id.toUpperCase()}-{billingCycle === 'monthly' ? 'M' : 'Y'}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer de Sección */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="font-inter text-sm text-gray-600">
            ¿Necesitás un plan personalizado?{' '}
            <a href="#" className="text-cannis-green font-medium hover:underline">
              Contactá a nuestro equipo
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;
