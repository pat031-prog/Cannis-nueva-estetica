import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Izquierda */}
          <div className="flex items-center">
            <h1 className="font-agrandir text-2xl font-bold text-cannis-green tracking-tight">
              CANNIS
            </h1>
          </div>

          {/* Navegación Central */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="font-inter text-sm font-medium text-gray-600 hover:text-cannis-green transition-colors duration-200"
            >
              Inicio
            </a>
            <a
              href="#"
              className="font-inter text-sm font-medium text-gray-600 hover:text-cannis-green transition-colors duration-200"
            >
              Soluciones
            </a>
            <a
              href="#"
              className="font-inter text-sm font-medium text-gray-600 hover:text-cannis-green transition-colors duration-200"
            >
              Casos de Uso
            </a>
            <a
              href="#"
              className="font-inter text-sm font-medium text-gray-600 hover:text-cannis-green transition-colors duration-200"
            >
              Recursos
            </a>
          </nav>

          {/* Usuario y Portal - Derecha */}
          <div className="flex items-center space-x-4">
            {/* Credencial Médica Digital */}
            <div className="hidden lg:flex items-center space-x-3 px-4 py-2 rounded-lg bg-gray-50 border border-gray-200">
              {/* Avatar */}
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cannis-green to-cannis-teal flex items-center justify-center">
                <span className="font-agrandir text-white font-bold text-xs">
                  TD
                </span>
              </div>
              {/* Info */}
              <div className="flex flex-col">
                <span className="font-inter text-sm font-medium text-gray-900">
                  Tomás David
                </span>
                <span className="font-mono text-xs text-gray-500">
                  ID: Paciente Activo
                </span>
              </div>
            </div>

            {/* Botón Portal - Sólido Verde */}
            <button className="flex items-center space-x-2 bg-cannis-green text-white px-5 py-2.5 rounded-lg font-inter font-medium text-sm transition-all duration-200 hover:bg-opacity-90 hover:shadow-md active:scale-95">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 17L15 12L10 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 12H3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Portal</span>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
