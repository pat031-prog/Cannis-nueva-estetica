import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HeroSlide from './slides/HeroSlide';
import BentoSlide from './slides/BentoSlide';
import PricingSlide from './slides/PricingSlide';

const slides = [
  { id: 0, component: HeroSlide, name: 'Hero' },
  { id: 1, component: BentoSlide, name: 'Perfiles' },
  { id: 2, component: PricingSlide, name: 'Planes' },
];

const HorizontalSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    const newSlide = currentSlide + newDirection;
    if (newSlide >= 0 && newSlide < slides.length) {
      setDirection(newDirection);
      setCurrentSlide(newSlide);
    }
  };

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') paginate(1);
      if (e.key === 'ArrowLeft') paginate(-1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  // Navegación con wheel
  useEffect(() => {
    let isThrottled = false;

    const handleWheel = (e) => {
      if (isThrottled) return;

      if (e.deltaY > 0) {
        // Scroll down = ir a la derecha
        paginate(1);
      } else if (e.deltaY < 0) {
        // Scroll up = ir a la izquierda
        paginate(-1);
      }

      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, 800);
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Formas abstractas de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-cannis-green/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 -right-40 w-96 h-96 bg-cannis-teal/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Slides con AnimatePresence */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0"
        >
          <CurrentSlideComponent onNext={() => paginate(1)} />
        </motion.div>
      </AnimatePresence>

      {/* Flechas de navegación */}
      {currentSlide > 0 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => paginate(-1)}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-white/80 backdrop-blur-md border-2 border-gray-900 shadow-lg hover:bg-cannis-green hover:text-white transition-all duration-200 flex items-center justify-center group"
        >
          <ChevronLeft size={28} className="group-hover:scale-110 transition-transform" />
        </motion.button>
      )}

      {currentSlide < slides.length - 1 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => paginate(1)}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-white/80 backdrop-blur-md border-2 border-gray-900 shadow-lg hover:bg-cannis-green hover:text-white transition-all duration-200 flex items-center justify-center group"
        >
          <ChevronRight size={28} className="group-hover:scale-110 transition-transform" />
        </motion.button>
      )}

      {/* Dots de progreso */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-3">
        {slides.map((slide) => (
          <button
            key={slide.id}
            onClick={() => {
              setDirection(slide.id > currentSlide ? 1 : -1);
              setCurrentSlide(slide.id);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === slide.id
                ? 'w-12 bg-cannis-green'
                : 'w-2 bg-gray-400 hover:bg-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Indicador de slide */}
      <div className="absolute top-8 right-8 z-50 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border-2 border-gray-900">
        <span className="font-mono text-sm font-bold text-gray-900">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
};

export default HorizontalSlider;
