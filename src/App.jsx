import NetworkBackground from './components/NetworkBackground';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProfileSelector from './components/ProfileSelector';
import PricingPlans from './components/PricingPlans';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Fondo Dinámico de Red de Nodos */}
      <NetworkBackground />

      {/* Header Táctico */}
      <Header />

      {/* Contenido Principal */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Selector de Perfiles */}
        <ProfileSelector />

        {/* Planes para ONGs */}
        <PricingPlans />
      </main>

      {/* Footer */}
      <footer className="bg-cannis-dark text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Columna 1: Logo y Descripción */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-cannis-green rounded-lg flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-agrandir text-xl font-bold">CANNIS</h3>
              </div>
              <p className="font-inter text-gray-400 text-sm leading-relaxed max-w-md">
                Plataforma bio-network que conecta profesionales de la salud, ONGs,
                pacientes e inversores en un ecosistema innovador y transparente.
              </p>
              <p className="font-mono text-xs text-gray-500 mt-4">
                EST. 2024 • SISTEMA V1.0.0
              </p>
            </div>

            {/* Columna 2: Enlaces Rápidos */}
            <div>
              <h4 className="font-inter font-semibold text-sm mb-4 uppercase tracking-wider">
                Navegación
              </h4>
              <ul className="space-y-2 font-inter text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-cannis-green transition-colors">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-cannis-green transition-colors">
                    Casos de Éxito
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-cannis-green transition-colors">
                    Documentación API
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-cannis-green transition-colors">
                    Centro de Ayuda
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 3: Contacto */}
            <div>
              <h4 className="font-inter font-semibold text-sm mb-4 uppercase tracking-wider">
                Contacto
              </h4>
              <ul className="space-y-2 font-inter text-sm">
                <li>
                  <a
                    href="mailto:contacto@cannis.com"
                    className="text-gray-400 hover:text-cannis-green transition-colors"
                  >
                    contacto@cannis.com
                  </a>
                </li>
                <li className="text-gray-400">+54 11 1234-5678</li>
                <li className="text-gray-400">Buenos Aires, Argentina</li>
              </ul>
            </div>
          </div>

          {/* Separador */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-inter text-sm text-gray-500">
              © 2024 Cannis. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-cannis-green transition-colors">
                <span className="font-inter text-sm">Términos</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-cannis-green transition-colors">
                <span className="font-inter text-sm">Privacidad</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-cannis-green transition-colors">
                <span className="font-inter text-sm">Seguridad</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
