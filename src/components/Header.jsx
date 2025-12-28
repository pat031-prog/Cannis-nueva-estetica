import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-cannis-green rounded-lg flex items-center justify-center">
              <svg
                width="28"
                height="28"
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
            <div>
              <h1 className="font-agrandir text-2xl font-bold text-cannis-dark">
                CANNIS
              </h1>
              <p className="font-mono text-xs text-gray-500 tracking-wider">
                BIO-NETWORK
              </p>
            </div>
          </div>

          {/* User Info & Portal */}
          <div className="flex items-center space-x-4">
            {/* User Credential */}
            <div className="hidden md:flex items-center space-x-3 px-4 py-2 rounded-lg border border-gray-200 bg-cannis-light/50">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cannis-green to-cannis-teal flex items-center justify-center">
                <span className="font-agrandir text-white font-bold text-sm">
                  TD
                </span>
              </div>
              <div>
                <p className="font-inter text-sm font-medium text-cannis-dark">
                  Tomás David
                </p>
                <p className="font-mono text-xs text-gray-500">ID: 001-ADM</p>
              </div>
            </div>

            {/* Portal Button */}
            <button className="btn-primary flex items-center space-x-2">
              <span>Portal</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
