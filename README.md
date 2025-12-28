# Cannis - Bio-Network Platform

Landing page innovadora con estética Clean-Tech para Cannis, transformando la experiencia de usuario en una interfaz tipo HUD/Dashboard manteniendo profesionalismo médico.

## Características

- **Diseño Clean-Tech**: Interfaz tipo tablero de control con estética médica profesional
- **Fondo Dinámico**: Red de nodos interconectados representando el ecosistema
- **Jerarquía Tipográfica Estricta**:
  - Agrandir: Logo, títulos principales y branding
  - Inter: Interfaz, descripciones y navegación
  - Monospace (Fira Code): Datos técnicos, etiquetas y precios
- **Paleta de Colores**:
  - Blanco puro (#FFFFFF)
  - Gris claro (#F8F9FA)
  - Verde Cannis (#1B7E44)
  - Teal (#008C99)
  - Texto oscuro (#1A1A1A)
- **Componentes Principales**:
  - Header táctico con credencial de usuario
  - Selector de perfiles (6 tarjetas interactivas)
  - Planes para ONGs con toggle mensual/anual
  - Animaciones fluidas con Framer Motion
- **Diseño Responsive**: Optimizado para desktop, tablet y móvil

## Stack Tecnológico

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Google Fonts (Inter, Fira Code)

## Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Preview de producción
npm run preview
```

## Estructura del Proyecto

```
src/
├── components/
│   ├── NetworkBackground.jsx    # Fondo dinámico de red de nodos
│   ├── Header.jsx               # Header táctico
│   ├── ProfileSelector.jsx      # 6 tarjetas de perfiles
│   └── PricingPlans.jsx         # Planes con toggle de facturación
├── App.jsx                      # Componente principal
├── main.jsx                     # Entry point
└── index.css                    # Estilos globales y Tailwind
```

## Personalización

### Colores

Editá `tailwind.config.js` para modificar la paleta:

```js
colors: {
  'cannis-green': '#1B7E44',
  'cannis-teal': '#008C99',
  'cannis-dark': '#1A1A1A',
  'cannis-light': '#F8F9FA',
}
```

### Fuentes

Para usar la fuente Agrandir real:
1. Agregá los archivos `.woff2` en `/public/fonts/`
2. Actualizá `@font-face` en `src/index.css`

### Planes

Editá el array `plans` en `src/components/PricingPlans.jsx`

## Licencia

© 2024 Cannis. Todos los derechos reservados.
