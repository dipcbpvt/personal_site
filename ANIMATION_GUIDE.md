# Animation & Components Quick Reference

## Quick Links to All New Animations

### 1. Parallax Hook
```tsx
import { useParallax } from "@/hooks/use-parallax"

const { ref, y, opacity, scale } = useParallax(
  speed = 0.5,    // Parallax speed multiplier
  distance = 100  // Movement distance in pixels
)

// Use ref on container, apply style animations to child
<motion.div ref={ref} style={{ y, opacity, scale }}>
  Content moves on scroll
</motion.div>
```

### 2. Drag Interaction Hook
```tsx
import { useDragInteraction } from "@/hooks/use-drag-interaction"

const { x, y, isDragging, handleDragStart, handleDrag, handleDragEnd } = 
  useDragInteraction({
    stiffness: 300,
    damping: 30,
    mass: 1
  })

<div onPointerDown={handleDragStart} onPointerMove={handleDrag} onPointerUp={handleDragEnd}>
  Draggable element
</div>
```

### 3. Enhanced TiltCard
```tsx
import { TiltCard } from "@/components/tilt-card"

<TiltCard 
  glassEffect={true}      // Enable liquid glass glow
  enableTilt={true}       // Enable 3D tilt (auto-disabled on mobile)
  className="h-full"
>
  <div>Card content</div>
</TiltCard>
```

### 4. PageTransition
```tsx
import { PageTransition } from "@/components/page-transition"

<PageTransition 
  variant="slideUp"        // fade | slideUp | slideDown | blur | scale
  duration={0.5}          // Animation duration in seconds
  delay={0}               // Delay before animation starts
>
  <YourPageContent />
</PageTransition>
```

### 5. DraggableCarousel
```tsx
import { DraggableCarousel } from "@/components/draggable-carousel"

<DraggableCarousel
  items={[<Item1 />, <Item2 />, <Item3 />]}
  showArrows={true}
  showDots={true}
  autoPlay={false}
  autoPlayInterval={5000}
  containerClassName="h-96"
  itemClassName="flex items-center justify-center"
/>
```

### 6. StaggeredList
```tsx
import { StaggeredList } from "@/components/staggered-list"

<StaggeredList
  items={arrayOfItems}
  direction="vertical"        // vertical | horizontal
  staggerDelay={0.08}        // Delay between items
  delayChildren={0.1}        // Initial delay before start
  itemClassName="px-4 py-2"
/>
```

### 7. OptimizedImage
```tsx
import { OptimizedImage } from "@/components/optimized-image"

<OptimizedImage
  src="/image.jpg"
  alt="Description"
  width={1200}
  height={630}
  lazy={true}               // Enable lazy loading
  blur={true}               // Use blur placeholder
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

---

## Animation Variants Library

Import all variants from `@/lib/animation-variants`:

### Fade Variants
- `fadeInVariants` - Simple opacity fade
- `fadeInUpVariants` - Fade + slide up
- `fadeInDownVariants` - Fade + slide down
- `fadeInLeftVariants` - Fade + slide left
- `fadeInRightVariants` - Fade + slide right
- `blurInVariants` - Fade with blur effect

### Scale & Rotation
- `scaleInVariants` - Scale from 0.9 to 1
- `rotateInVariants` - Rotate from -10deg
- `hoverScaleVariants` - Scale on hover (1 -> 1.05)

### Container & Lists
- `containerVariants` - Parent for staggered children
- `childVariants` - Child items with stagger
- `listContainerVariants` - Optimized for lists
- `listItemVariants` - Individual list items

### Special Effects
- `glassHoverVariants` - Glass morphism hover
- `pulseVariants` - Pulse animation
- `shimmerVariants` - Shimmer effect
- `floatVariants` - Floating animation
- `tiltVariants` - Subtle tilt animation

---

## CSS Animation Classes

Add to any element for immediate animation:

### Entrance Animations
- `.slide-up` - Slide in from bottom
- `.slide-down` - Slide in from top
- `.slide-left` - Slide in from right
- `.slide-right` - Slide in from left
- `.scale-up` - Scale in from 0.95

### Continuous Animations
- `.float` - Gentle floating motion
- `.glow` - Pulsing glow effect
- `.shimmer` - Shimmer across element
- `.parallax` - Parallax scroll effect

### Effects
- `.fade-in` - Fade in animation
- `.fade-out` - Fade out animation
- `.exit-down` - Exit with slide down

### Performance
- `.gpu-accelerate` - Enable GPU acceleration
- `.will-animate` - Hint for transform/opacity changes
- `.will-scroll` - Optimize for scrolling
- `.lazy-visibility` - Use content-visibility

### Utilities
- `.drag-handle` - Show grab cursor on hover
- `.sr-only` - Screen reader only text
- `.glass` - Basic glass effect
- `.liquid-glass` - Enhanced glass with glow
- `.frosted-glass` - Opaque glass effect

---

## Accessibility Features

### Automatic Features
✓ All animations respect `prefers-reduced-motion`
✓ Touch-friendly navigation on mobile
✓ ARIA labels on all interactive elements
✓ Minimum 44x44px touch targets
✓ Color contrast compliance

### Using Reduced Motion
```tsx
// Animations automatically disable when user 
// has "prefers-reduced-motion: reduce" set in OS

// Or manually detect:
const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

useEffect(() => {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
  setPrefersReducedMotion(mediaQuery.matches)
}, [])

{!prefersReducedMotion && <AnimatedComponent />}
```

---

## Mobile Optimization

### Automatic Mobile Detection
```tsx
import { useIsMobile } from "@/hooks/use-mobile"

const isMobile = useIsMobile()

{isMobile ? <MobileLayout /> : <DesktopLayout />}
```

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: ≥ 1024px

### Mobile Features
✓ Bottom tab navigation (left sidebar)
✓ Compact top-right social icons (right sidebar)
✓ No 3D tilt on touch devices
✓ Simplified animations for performance
✓ Full content visibility, no cropping

---

## Performance Tips

### Best Practices
1. Use `gpu-accelerate` class for animated elements
2. Prefer `transform` and `opacity` for animations
3. Use spring physics for smooth motion
4. Lazy load images with `loading="lazy"`
5. Enable `prefers-reduced-motion` support

### Measuring Performance
```tsx
// In your component
useEffect(() => {
  const perfData = performance.getEntriesByType("navigation")[0]
  console.log("FCP:", perfData.domContentLoadedEventStart)
  console.log("LCP:", perfData.loadEventStart)
}, [])
```

### Animation Performance
- Stick to `transform` and `opacity`
- Avoid animating `width`, `height`, `position`
- Use `will-change` sparingly
- Test on low-end devices with DevTools throttling

---

## SEO Features

### Automatic SEO
✓ Structured data (Person schema)
✓ Open Graph tags
✓ Twitter Card metadata
✓ Sitemap generation utilities
✓ JSON-LD structured data

### Using SEO Utilities
```tsx
import { generateMetadataObject, buildPersonSchema } from "@/lib/seo"

const metadata = generateMetadataObject({
  title: "Your Title",
  description: "Your description",
  image: "/og-image.png",
  url: "https://yoursite.com",
  keywords: ["tag1", "tag2"]
})

const schema = buildPersonSchema(
  "Your Name",
  "email@example.com",
  "https://yoursite.com",
  "/profile.jpg"
)
```

---

## Common Patterns

### Animated Card Grid
```tsx
import { TiltCard } from "@/components/tilt-card"
import { motion } from "framer-motion"
import { containerVariants, childVariants } from "@/lib/animation-variants"

export function CardGrid({ items }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {items.map((item) => (
        <motion.div key={item.id} variants={childVariants}>
          <TiltCard glassEffect={true}>
            <div className="glass rounded-2xl p-6">
              {item.content}
            </div>
          </TiltCard>
        </motion.div>
      ))}
    </motion.div>
  )
}
```

### Animated Section with Parallax
```tsx
import { useParallax } from "@/hooks/use-parallax"
import { motion } from "framer-motion"

export function ParallaxSection() {
  const { ref, y, opacity } = useParallax(0.5, 150)

  return (
    <section ref={ref} className="py-24">
      <motion.div style={{ y, opacity }} className="text-center">
        <h2 className="text-4xl font-bold">Section Title</h2>
        <p className="text-lg text-muted-foreground mt-4">Content</p>
      </motion.div>
    </section>
  )
}
```

### Draggable Portfolio Showcase
```tsx
import { DraggableCarousel } from "@/components/draggable-carousel"

export function Portfolio() {
  const projects = [
    <ProjectCard key={1} />,
    <ProjectCard key={2} />,
    <ProjectCard key={3} />
  ]

  return (
    <DraggableCarousel
      items={projects}
      containerClassName="h-96 rounded-2xl"
      showArrows={true}
      showDots={true}
    />
  )
}
```

---

## Troubleshooting

### Animations not playing?
- Check `prefers-reduced-motion` setting
- Ensure Framer Motion is properly imported
- Verify `initial` and `animate` props are set

### 3D tilt not working on mobile?
- This is intentional - 3D disables on touch devices for performance
- Use `enableTilt={false}` to disable on desktop too

### Performance issues?
- Use Chrome DevTools Performance tab to profile
- Reduce number of animated elements
- Check for expensive animations (width, height changes)
- Use `will-change` sparingly

### Mobile layout broken?
- Check that sidebars use `useIsMobile()` hook
- Verify breakpoints match Tailwind config
- Test with actual mobile devices, not just browser resize

---

## Further Customization

### Creating Custom Variants
```tsx
export const myCustomVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, type: "spring" }
  }
}

// Use with motion.div
<motion.div variants={myCustomVariant} initial="hidden" animate="visible">
  Content
</motion.div>
```

### Custom Animation Timing
```tsx
const customEasing = {
  duration: 0.6,
  ease: [0.23, 1, 0.32, 1], // Custom cubic-bezier
  type: "spring",
  stiffness: 300,
  damping: 30
}

<motion.div animate={{ x: 100 }} transition={customEasing}>
  Animated with custom timing
</motion.div>
```

---

For more details, see the main ENHANCEMENTS.md file.
