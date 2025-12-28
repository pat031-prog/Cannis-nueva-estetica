import { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, animate } from 'framer-motion';
import { Check, X } from 'lucide-react';

// Componente para números animados
const AnimatedNumber = ({ value }) => {
  const spring = useSpring(0, { stiffness: 100, damping: 30 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString('es-AR')
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
};

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

const PricingSlide = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="relative h-full w-full flex items-center justify-center p-8 overflow-hidden">
      {/* Glassmorphic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-block bg-white/60 backdrop-blur-md px-6 py-3 rounded-2xl border-2 border-white/80 mb-6">
            <h2 className="font-agrandir text-6xl font-bold text-gray-900">
              Planes para ONGs
            </h2>
          </div>
          <p className="font-inter text-xl text-gray-700">
            Equipamiento para maximizar impacto social
          </p>
        </motion.div>

        {/* Toggle con Spring Physics Mejorado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
          className="flex justify-center items-center mb-12"
        >
          <div className="relative inline-flex items-center bg-white/80 backdrop-blur-xl rounded-full p-2 border-3 border-gray-900 shadow-lg">
            <motion.div
              className="absolute top-2 bottom-2 bg-cannis-green rounded-full"
              initial={false}
              animate={{
                left: billingCycle === 'monthly' ? '8px' : 'calc(50%)',
                width: 'calc(50% - 8px)',
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 35,
              }}
            />
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`relative z-10 px-8 py-3 rounded-full font-inter font-bold text-base transition-colors duration-200 ${
                billingCycle === 'monthly' ? 'text-white' : 'text-gray-700'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`relative z-10 px-8 py-3 rounded-full font-inter font-bold text-base transition-colors duration-200 ${
                billingCycle === 'yearly' ? 'text-white' : 'text-gray-700'
              }`}
            >
              Anual
            </button>
          </div>
          {billingCycle === 'yearly' && (
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="ml-4 px-5 py-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full border-3 border-gray-900"
            >
              <span className="text-base font-inter font-black text-white drop-shadow-md">
                17% OFF
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Tarjetas con Glassmorphism */}
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
                y: -12,
                rotate: [0, -1, 1, 0],
                transition: { duration: 0.4 },
              }}
              whileTap={{ scale: 0.95 }}
              className={`relative bg-white/70 backdrop-blur-xl rounded-3xl border-3 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-300 overflow-hidden ${
                plan.recommended ? 'ring-4 ring-cannis-green ring-offset-4' : ''
              }`}
            >
              {/* Header Colorido */}
              <div className={`bg-gradient-to-br ${plan.color} p-6 text-white relative overflow-hidden`}>
                {/* Patrón de fondo */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_white_2px,_transparent_2px)] bg-[length:24px_24px]"></div>
                </div>

                {plan.recommended && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.5 }}
                    className="inline-block bg-white text-gray-900 px-4 py-1.5 rounded-full text-xs font-inter font-black mb-3"
                  >
                    ⭐ RECOMENDADO
                  </motion.span>
                )}
                <h3 className="font-agrandir text-3xl font-bold mb-3">
                  {plan.name}
                </h3>
                <div className="flex items-baseline">
                  <span className="text-6xl font-bold">$</span>
                  <span className="text-6xl font-bold">
                    <AnimatedNumber
                      value={
                        billingCycle === 'monthly'
                          ? plan.monthlyPrice
                          : plan.yearlyPrice
                      }
                    />
                  </span>
                </div>
                <span className="text-white/90 font-inter text-base">
                  /{billingCycle === 'monthly' ? 'mes' : 'año'}
                </span>
              </div>

              {/* Features */}
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      {feature.included ? (
                        <Check className="w-6 h-6 text-cannis-green flex-shrink-0 mt-0.5" strokeWidth={3} />
                      ) : (
                        <X className="w-6 h-6 text-gray-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span
                        className={`font-inter text-base ${
                          feature.included
                            ? 'text-gray-900 font-medium'
                            : 'text-gray-400'
                        }`}
                      >
                        {feature.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Botón */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-4 rounded-xl font-inter font-black text-base border-3 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all ${
                    plan.recommended
                      ? 'bg-cannis-green text-white'
                      : 'bg-white text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Elegir Plan
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PricingSlide;
