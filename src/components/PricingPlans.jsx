import { useState } from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    id: 'basico',
    name: 'Plan Básico',
    monthlyPrice: 5000,
    yearlyPrice: 50000,
    features: [
      { text: 'Hasta 50 beneficiarios activos', included: true },
      { text: 'Dashboard básico de métricas', included: true },
      { text: 'Soporte por email', included: true },
      { text: 'Actualización mensual de datos', included: true },
      { text: 'Acceso a biblioteca de recursos', included: true },
      { text: 'Dashboard avanzado con IA', included: false },
      { text: 'Soporte prioritario 24/7', included: false },
    ],
    recommended: false,
  },
  {
    id: 'institucional',
    name: 'Plan Institucional',
    monthlyPrice: 12000,
    yearlyPrice: 120000,
    features: [
      { text: 'Hasta 200 beneficiarios activos', included: true },
      { text: 'Dashboard avanzado con IA', included: true },
      { text: 'Soporte prioritario 24/7', included: true },
      { text: 'Actualización en tiempo real', included: true },
      { text: 'Biblioteca premium + webinars', included: true },
      { text: 'Integración con sistemas externos', included: true },
      { text: 'Reportes personalizados', included: true },
    ],
    recommended: true,
  },
  {
    id: 'integral',
    name: 'Plan Integral',
    monthlyPrice: 25000,
    yearlyPrice: 250000,
    features: [
      { text: 'Beneficiarios ilimitados', included: true },
      { text: 'Dashboard completo + API dedicada', included: true },
      { text: 'Gestor de cuenta dedicado', included: true },
      { text: 'Sincronización instantánea', included: true },
      { text: 'Contenido exclusivo + certificaciones', included: true },
      { text: 'Integración total + workflows custom', included: true },
      { text: 'Analytics predictivo con ML', included: true },
    ],
    recommended: false,
  },
];

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariants = {
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
    <section className="py-16 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-agrandir text-4xl font-bold text-gray-900 mb-3">
            Planes para ONGs
          </h2>
          <p className="font-inter text-gray-600 text-base max-w-2xl mx-auto">
            Equipamiento diseñado para maximizar tu impacto social
          </p>
        </motion.div>

        {/* Toggle de Facturación - Estilo Pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center items-center mb-12"
        >
          <div className="inline-flex items-center bg-white rounded-lg p-1 border border-gray-200 shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2.5 rounded-md font-inter font-medium text-sm transition-all duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-cannis-green text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2.5 rounded-md font-inter font-medium text-sm transition-all duration-200 ${
                billingCycle === 'yearly'
                  ? 'bg-cannis-green text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Anual
            </button>
          </div>
          {billingCycle === 'yearly' && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="ml-3 px-3 py-1 bg-cannis-green/10 rounded-full"
            >
              <span className="text-sm font-inter font-medium text-cannis-green">
                Ahorrá hasta 17%
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Tarjetas de Planes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className={`relative bg-white rounded-xl border shadow-sm p-8 transition-all duration-300 ${
                plan.recommended
                  ? 'border-cannis-green shadow-md ring-2 ring-cannis-green/20'
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
              }`}
            >
              {/* Badge Recomendado */}
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="inline-block bg-cannis-green text-white px-4 py-1 rounded-full text-xs font-inter font-medium shadow-sm">
                    Recomendado
                  </span>
                </div>
              )}

              {/* Header del Plan */}
              <div className="mb-6">
                <h3 className="font-inter text-xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>

                {/* Precio */}
                <div className="flex items-baseline mb-1">
                  <span className="text-4xl font-bold text-gray-900">
                    $
                    {billingCycle === 'monthly'
                      ? plan.monthlyPrice.toLocaleString('es-AR')
                      : plan.yearlyPrice.toLocaleString('es-AR')}
                  </span>
                  <span className="ml-2 font-inter text-gray-600 text-sm">
                    /{billingCycle === 'monthly' ? 'mes' : 'año'}
                  </span>
                </div>
              </div>

              {/* Separador */}
              <div className="h-px bg-gray-200 mb-6"></div>

              {/* Features */}
              <ul className="space-y-3.5 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    {feature.included ? (
                      <svg
                        className="w-5 h-5 text-cannis-green mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 text-gray-300 mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    <span
                      className={`font-inter text-sm leading-relaxed ${
                        feature.included ? 'text-gray-700' : 'text-gray-400'
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Botón */}
              <button
                className={`w-full py-3 rounded-lg font-inter font-medium text-sm transition-all duration-200 ${
                  plan.recommended
                    ? 'bg-cannis-green text-white hover:bg-opacity-90 shadow-sm hover:shadow-md'
                    : 'bg-white text-cannis-green border-2 border-cannis-green hover:bg-cannis-green hover:text-white'
                } active:scale-95`}
              >
                Comenzar
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 text-center"
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
