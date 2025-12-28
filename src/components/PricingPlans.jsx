import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const plans = [
  {
    id: 'basico',
    name: 'Básico',
    monthlyPrice: 5000,
    yearlyPrice: 50000,
    color: 'from-blue-500 to-blue-600',
    features: [
      { text: '50 beneficiarios', included: true },
      { text: 'Dashboard básico', included: true },
      { text: 'Soporte email', included: true },
      { text: 'Dashboard con IA', included: false },
      { text: 'Soporte 24/7', included: false },
    ],
    recommended: false,
  },
  {
    id: 'institucional',
    name: 'Institucional',
    monthlyPrice: 12000,
    yearlyPrice: 120000,
    color: 'from-cannis-green to-green-600',
    features: [
      { text: '200 beneficiarios', included: true },
      { text: 'Dashboard avanzado IA', included: true },
      { text: 'Soporte prioritario 24/7', included: true },
      { text: 'Tiempo real', included: true },
      { text: 'Webinars premium', included: true },
    ],
    recommended: true,
  },
  {
    id: 'integral',
    name: 'Integral',
    monthlyPrice: 25000,
    yearlyPrice: 250000,
    color: 'from-purple-500 to-purple-600',
    features: [
      { text: 'Ilimitados', included: true },
      { text: 'API dedicada', included: true },
      { text: 'Gestor dedicado', included: true },
      { text: 'Analytics ML', included: true },
      { text: 'White-label', included: true },
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
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-agrandir text-5xl font-bold text-gray-900 mb-3">
            Planes para ONGs
          </h2>
          <p className="font-inter text-lg text-gray-600">
            Equipamiento para maximizar impacto social
          </p>
        </motion.div>

        {/* Toggle con Spring Physics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center mb-14"
        >
          <div className="relative inline-flex items-center bg-white rounded-full p-1.5 border-3 border-gray-900 shadow-md">
            <motion.div
              className="absolute top-1.5 bottom-1.5 bg-cannis-green rounded-full"
              initial={false}
              animate={{
                left: billingCycle === 'monthly' ? '6px' : 'calc(50%)',
                width: 'calc(50% - 6px)',
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
            />
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`relative z-10 px-6 py-2.5 rounded-full font-inter font-semibold text-sm transition-colors duration-200 ${
                billingCycle === 'monthly' ? 'text-white' : 'text-gray-700'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`relative z-10 px-6 py-2.5 rounded-full font-inter font-semibold text-sm transition-colors duration-200 ${
                billingCycle === 'yearly' ? 'text-white' : 'text-gray-700'
              }`}
            >
              Anual
            </button>
          </div>
          {billingCycle === 'yearly' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="ml-4 px-4 py-1.5 bg-amber-100 rounded-full border-2 border-amber-400"
            >
              <span className="text-sm font-inter font-bold text-amber-700">
                17% OFF
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Tarjetas Tipo Ticket */}
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
              whileHover={{
                scale: 1.03,
                rotate: [0, -0.5, 0.5, 0],
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
              className={`relative bg-white rounded-3xl border-3 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]] transition-all duration-300 overflow-hidden ${
                plan.recommended ? 'ring-4 ring-cannis-green ring-offset-2' : ''
              }`}
            >
              {/* Header Colorido */}
              <div
                className={`bg-gradient-to-br ${plan.color} p-6 text-white`}
              >
                {plan.recommended && (
                  <span className="inline-block bg-white text-gray-900 px-3 py-1 rounded-full text-xs font-inter font-bold mb-3">
                    ⭐ RECOMENDADO
                  </span>
                )}
                <h3 className="font-agrandir text-2xl font-bold mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">
                    $
                    {billingCycle === 'monthly'
                      ? plan.monthlyPrice.toLocaleString('es-AR')
                      : plan.yearlyPrice.toLocaleString('es-AR')}
                  </span>
                  <span className="ml-2 text-white/80">
                    /{billingCycle === 'monthly' ? 'mes' : 'año'}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-cannis-green flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span
                        className={`font-inter text-sm ${
                          feature.included ? 'text-gray-800' : 'text-gray-400'
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Botón */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3.5 rounded-xl font-inter font-bold text-sm border-3 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all ${
                    plan.recommended
                      ? 'bg-cannis-green text-white'
                      : 'bg-white text-gray-900'
                  }`}
                >
                  Elegir Plan
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;
