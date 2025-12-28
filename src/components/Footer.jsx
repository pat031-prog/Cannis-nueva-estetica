const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <h3 className="font-agrandir text-2xl font-bold mb-3">Cannis</h3>
            <p className="font-inter text-gray-400 text-sm max-w-sm">
              El ecosistema médico conectado que une profesionales, ONGs y
              pacientes en una plataforma transparente.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-agrandir font-bold mb-3 text-sm">Producto</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-inter text-sm text-gray-400 hover:text-cannis-green transition-colors"
                >
                  Características
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-inter text-sm text-gray-400 hover:text-cannis-green transition-colors"
                >
                  Precios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-inter text-sm text-gray-400 hover:text-cannis-green transition-colors"
                >
                  Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-agrandir font-bold mb-3 text-sm">Contacto</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-inter text-sm text-gray-400 hover:text-cannis-green transition-colors"
                >
                  Soporte
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-inter text-sm text-gray-400 hover:text-cannis-green transition-colors"
                >
                  Documentación
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-inter text-sm text-gray-400 hover:text-cannis-green transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6">
          <p className="font-inter text-sm text-gray-500 text-center">
            © 2024 Cannis. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
