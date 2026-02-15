# Agustin Zamar - Portfolio

A modern, performant portfolio showcasing advanced frontend development techniques and cutting-edge technologies.

## Tech Stack

### Core Framework
- **Next.js 16** - React framework with App Router and React Compiler
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS with CSS-first configuration
- **shadcn/ui** - Headless, accessible component primitives
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Modern icon library

### Animation & Motion
- **Motion (Framer Motion)** - Production-ready animation library
- **Custom Canvas Animations** - High-performance particle systems and 3D effects

### Internationalization
- **next-intl** - Type-safe i18n with routing support
- **Bilingual** - English/Spanish with locale-based routing

### Development Tools
- **Biome** - Fast linter and formatter
- **Babel React Compiler** - Optimized React compilation

## Advanced Features

### Custom Animation Components

#### Particles (`components/ui/particles.tsx`)
Interactive particle system with mouse tracking:
- Canvas-based rendering with 60fps animation loop
- Mouse position tracking with magnetic particle behavior
- Configurable quantity, size, color, and physics
- Edge detection with alpha fading
- Responsive resize handling with debouncing

```typescript
<Particles
  quantity={50}
  ease={80}
  color="#6366F1"
  staticity={50}
/>
```

#### Icon Cloud (`components/ui/icon-cloud.tsx`)
Interactive 3D sphere of icons:
- Fibonacci sphere algorithm for even distribution
- Mouse drag rotation with momentum
- Smooth easing with cubic interpolation
- Canvas-based rendering for performance
- Click-to-focus animation

#### Magic Card (`components/ui/magic-card.tsx`)
Spotlight gradient card effect:
- Mouse position tracking with motion values
- Radial gradient following cursor
- Pointer event handling with global cleanup
- Smooth opacity transitions

#### Shimmer Button (`components/ui/shimmer-button.tsx`)
Animated button with rotating shimmer:
- CSS conic gradients for shimmer effect
- Container query units for responsive sizing
- Custom CSS properties for theming
- Multi-layer composition with backdrop

#### Aurora Text (`components/ui/aurora-text.tsx`)
Animated gradient text:
- Continuous background position animation
- Configurable colors and speed
- Memoized for performance
- Screen reader accessible

#### Text Animate (`components/ui/text-animate.tsx`)
Text animation with multiple variants:
- Character, word, line, or full text animation
- 10+ animation presets (fade, blur, slide, scale)
- Staggered children animations
- Viewport-triggered animations

#### Blur Fade (`components/ui/blur-fade.tsx`)
Scroll-triggered blur animation:
- Intersection Observer integration
- Configurable direction and blur amount
- One-time or repeated animations

#### Border Beam (`components/ui/border-beam.tsx`)
Animated border effect:
- CSS offset-path for border traversal
- Configurable colors and duration
- Reverse animation support
- Mask-based rendering

### Performance Optimizations

#### React Compiler
Enabled in `next.config.ts` for automatic memoization:
```typescript
const nextConfig: NextConfig = {
  reactCompiler: true,
};
```

#### Canvas Animation Performance
- `requestAnimationFrame` for smooth 60fps
- Debounced resize handlers (200ms)
- Proper cleanup on unmount
- Device pixel ratio scaling
- `will-change` CSS hints

#### Image Optimization
- Next.js Image component with WebP
- Priority loading for above-fold images
- Responsive sizing with aspect ratios

### Accessibility Features

- **ARIA labels** on all interactive elements
- **Screen reader support** with `sr-only` text
- **Reduced motion** media query support
- **Keyboard navigation** throughout
- **Focus management** in mobile menu
- **Semantic HTML** structure

### Theme System

- **Dark/Light mode** with next-themes
- **System preference** detection
- **CSS variables** for theming
- **Smooth transitions** between themes
- **OKLCH color space** for perceptually uniform colors

### Navigation Features

#### Smart Navigation (`components/navigation.tsx`)
- Scroll-aware glassmorphism effect
- Active section highlighting with Intersection Observer
- Smooth scroll to sections
- Mobile-responsive hamburger menu
- Language switcher with visual feedback
- Theme toggle with animated icons

### Internationalization Architecture

```
/messages
├── en.json    # English translations
└── es.json    # Spanish translations

/src/i18n
├── routing.ts    # Locale routing config
├── request.ts    # Message loading
└── navigation.ts # Locale-aware navigation
```

- Type-safe translations
- Locale-prefixed URLs (`/en/`, `/es/`)
- Automatic locale detection
- Metadata translation support

### Project Structure

```
/src
├── app/[locale]/          # Locale-aware routes
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # Animation & UI components
│   ├── navigation.tsx     # Main navigation
│   └── theme-provider.tsx # Theme context
├── sections/              # Page sections
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── skills-section.tsx
│   ├── experience-section.tsx
│   ├── projects-section.tsx
│   ├── education-section.tsx
│   ├── clients-section.tsx
│   └── contact-section.tsx
├── i18n/                  # i18n configuration
└── lib/
    └── utils.ts           # Utility functions
```

### Custom CSS Features

#### Tailwind v4 Configuration
```css
@theme inline {
  --animate-shimmer-slide: shimmer-slide var(--speed) ease-in-out infinite alternate;
  --animate-spin-around: spin-around calc(var(--speed) * 2) infinite linear;
  --animate-aurora: aurora 8s ease-in-out infinite alternate;
}
```

#### Custom Keyframes
- Aurora animation with rotation and scaling
- Shimmer slide for button effects
- Spin-around for continuous rotation

#### OKLCH Color System
Modern perceptually uniform colors:
```css
--primary: oklch(0.205 0 0);
--background: oklch(1 0 0);
```

### Development Workflow

```bash
# Development
npm run dev

# Linting
npm run lint        # Biome check

# Formatting
npm run format      # Biome format --write

# Building
npm run build
```

### Key Implementation Details

#### Smooth Scroll Progress
```typescript
// ScrollProgress component tracks page scroll
<ScrollProgress />
```

#### Tooltip System
```typescript
// Global tooltip provider with delay
<TooltipProvider delayDuration={100}>
  <Tooltip>
    <TooltipTrigger />
    <TooltipContent />
  </Tooltip>
</TooltipProvider>
```

#### Motion Variants Pattern
```typescript
// Reusable animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
```

#### 3D Card Transform
```typescript
// Mouse-based 3D rotation
const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Modern mobile browsers

## Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: Optimized with tree-shaking

## License

MIT License - Feel free to use this as inspiration for your own portfolio!

---

Built with passion and attention to detail by Agustin Zamar
