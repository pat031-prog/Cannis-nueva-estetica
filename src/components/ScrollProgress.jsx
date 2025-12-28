import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  // Añadir spring physics para suavidad extra
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed left-1/2 top-0 bottom-0 z-50 w-[2px] -translate-x-1/2 pointer-events-none hidden md:block">
      {/* Línea base (gris muy sutil) */}
      <div className="absolute inset-0 bg-gray-200/30" />

      {/* Línea de progreso (verde Cannis) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-cannis-green via-cannis-teal to-cannis-green origin-top"
        style={{ scaleY }}
      />

      {/* Glow effect en el extremo */}
      <motion.div
        className="absolute left-1/2 w-3 h-3 -translate-x-1/2 bg-cannis-green rounded-full blur-sm"
        style={{
          top: useSpring(scrollYProgress, {
            stiffness: 100,
            damping: 30,
          }),
          y: '-50%'
        }}
      />
    </div>
  );
};

export default ScrollProgress;
