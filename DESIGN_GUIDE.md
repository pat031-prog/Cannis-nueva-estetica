# Guía de Diseño - Cannis Landing Page

## Filosofía de Diseño

Esta landing page implementa una estética **Clean-Tech** que combina:
- Profesionalismo médico
- Interfaces tipo HUD/Dashboard
- Minimalismo funcional
- Interacciones táctiles e inmediatas

## Jerarquía Tipográfica

### 1. Agrandir (Institucional)
**Uso exclusivo:**
- Logo principal: `CANNIS`
- Títulos de sección: "¿Quién sos dentro de Cannis?", "Planes para ONGs"
- Frases de branding y headlines

**Propiedades:**
- Peso: 400 (normal), 700 (bold)
- Transmite: Autoridad, innovación, diseño premium

### 2. Inter (Interfaz)
**Uso principal:**
- Descripciones de tarjetas
- Navegación y menús
- Texto de botones
- Párrafos y contenido general
- Footer

**Propiedades:**
- Peso: 300-700
- Transmite: Legibilidad, modernidad, profesionalismo

### 3. Fira Code (Técnica/Monospace)
**Uso específico:**
- Precios: `$5.000 /mes`
- Etiquetas de sistema: `ID: 001-ADM`
- Indicadores de estado: `SISTEMA ACTIVO`
- Datos numéricos y códigos

**Propiedades:**
- Peso: 400, 500
- Transmite: Precisión técnica, datos confiables

## Paleta de Colores

```css
Blanco Puro:     #FFFFFF  /* Fondo principal */
Gris Claro:      #F8F9FA  /* Secciones alternadas */
Verde Cannis:    #1B7E44  /* Primario - Extraído del logo */
Teal/Cian:       #008C99  /* Acento - Inversión/secundario */
Texto Oscuro:    #1A1A1A  /* Títulos y texto principal */
Grises Neutros:  #6B7280, #9CA3AF, #D1D5DB  /* Texto secundario y bordes */
```

### Uso de Colores

#### Verde Cannis (#1B7E44)
- Botones primarios
- Bordes activos (hover)
- Iconos principales
- Indicadores de estado
- Checks en listas de features

#### Teal (#008C99)
- Etiquetas de categoría (ADVANCED, ENTERPRISE)
- Botones secundarios
- Elementos de énfasis alternativo

#### Grises
- Texto secundario
- Bordes sutiles
- Sombras y separadores

## Componentes Clave

### NetworkBackground
**Propósito:** Fondo dinámico representando el ecosistema bio-network

**Características:**
- Canvas animado con nodos interconectados
- Partículas que se mueven sutilmente
- Líneas que conectan nodos cercanos
- Opacidad baja para no distraer del contenido
- Gradiente sutil de blanco a gris claro

**Configuración:**
- Densidad: ~1 nodo cada 15.000px²
- Radio de conexión: 150px
- Opacidad de nodos: 15%
- Opacidad de líneas: 8%

### Header Táctico
**Características:**
- Sticky/fijo al hacer scroll
- Backdrop blur (efecto glassmorphism)
- Logo con icono geométrico
- Credencial de usuario estilo "digital badge"
- Botón "Portal" en verde institucional

**Estructura:**
```
[Logo + CANNIS]  <--spacing-->  [User Badge] [Portal Button]
```

### ProfileSelector (6 Tarjetas)
**Interacciones:**
1. Hover:
   - Elevación (-translate-y-1)
   - Borde verde activo
   - Sombra enhanced
   - Icono cambia a verde sobre fondo verde (inversión)

2. Layout:
   - Desktop: 3 columnas
   - Tablet: 2 columnas
   - Móvil: 1 columna

**Estructura de tarjeta:**
```
┌─────────────────┐
│   [Icono 20x20] │
│   Título Bold   │
│   Descripción   │
│   [→ ACCEDER]   │
└─────────────────┘
```

### PricingPlans
**Toggle de Facturación:**
- Diseño tipo "pill" con estados activos
- Transición suave de color
- Badge de ahorro al seleccionar anual

**Estructura de Plan:**
```
┌───────────────────────┐
│  BADGE (si highlight) │
│  SUBTITLE (mono)      │
│  Nombre Plan          │
│  $PRECIO /periodo     │
│  ─────────────────    │
│  ✓ Feature 1          │
│  ✓ Feature 2          │
│  ...                  │
│  [Elegir Plan]        │
│  ID: plan-m           │
└───────────────────────┘
```

**Plan destacado:**
- Ring verde 2px
- Badge "POPULAR"
- Botón sólido verde

### HeroSection
**Elementos clave:**
- Badge de estado "SISTEMA OPERATIVO"
- Headline con palabra destacada en verde
- Métricas en vivo (1.2K+, 180+, 25K+)
- Gráfico de red animado (desktop)
- Dos CTAs: primario y secundario

**Layout:**
- Desktop: 2 columnas (50/50)
- Móvil: 1 columna (texto arriba)

## Animaciones (Framer Motion)

### Entrada de Página
```javascript
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

### Tarjetas (Stagger)
```javascript
containerVariants: {
  staggerChildren: 0.1,
  delayChildren: 0.3
}
itemVariants: {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}
```

### Hover Estados
```javascript
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```

### Animaciones Continuas
- Nodos del fondo: movimiento sutil
- Badge de estado: pulse en el punto verde
- Gráfico de red: rotación lenta (20s)

## Diseño Responsive

### Breakpoints (Tailwind)
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

### Estrategia Mobile-First

**Móvil (< 768px):**
- 1 columna para todo
- Header compacto (ocultar badge de usuario)
- Texto más pequeño pero legible
- Botones full-width
- Gráfico de red oculto

**Tablet (768px - 1024px):**
- 2 columnas en perfiles
- Header completo
- Texto tamaño medio

**Desktop (> 1024px):**
- 3 columnas en perfiles y planes
- Gráfico de red visible
- Espaciado amplio

## Sombras y Profundidad

```css
tactical: 0 2px 8px rgba(27, 126, 68, 0.08)
tactical-hover: 0 8px 24px rgba(27, 126, 68, 0.15)
```

Uso:
- Tarjetas en reposo: `shadow-tactical`
- Tarjetas en hover: `shadow-tactical-hover`
- Evitar sombras muy marcadas

## Espaciado

- Secciones: `py-20` (80px vertical)
- Entre elementos: `mb-6` a `mb-12`
- Padding de tarjetas: `p-8`
- Gaps en grids: `gap-6` a `gap-8`

## Mejores Prácticas

1. **No usar emojis** en el código de producción
2. **Mantener contraste** AAA para accesibilidad
3. **Optimizar imágenes** y assets
4. **Usar lazy loading** para componentes pesados
5. **Probar en dispositivos reales** no solo en DevTools
6. **Mantener consistencia** en spacing y sizing
7. **Documentar** cambios en paleta de colores

## Futuras Mejoras

- [ ] Implementar fuente Agrandir real (actualmente fallback)
- [ ] Agregar modo oscuro opcional
- [ ] Optimizar animaciones para reduced-motion
- [ ] Agregar micro-interacciones en iconos
- [ ] Implementar skeletons para loading states
