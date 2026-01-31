# 🎬 Smooth Transitions Implementation Guide

Quick reference for using the enhanced smooth transition system in your personal site.

## 🎯 Quick Start

### For Section Transitions
```tsx
import { PageTransition } from "@/components/page-transition"

export default function MySection() {
  return (
    <PageTransition staggerChildren={true}>
      <div>Content 1</div>
      <div>Content 2</div>
      <div>Content 3</div>
    </PageTransition>
  )
}
```

### For Section Headers
```tsx
import { SectionHeader } from "@/components/section-header"

<SectionHeader 
  label="My Section"
  title="Section Title"
  description="Optional description text"
/>
```

---

## 🎨 Animation Patterns

### Pattern 1: Fade + Slide In
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Pattern 2: Scale + Fade (Premium Effect)
```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
>
  Content
</motion.div>
```

### Pattern 3: Staggered Children
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  }}
>
  {items.map(item => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

---

## ✨ Interactive Element Enhancements

### Hover Lift Effect (For Buttons/Cards)
```tsx
<motion.div
  whileHover={{ y: -2 }}
  whileTap={{ scale: 0.98 }}
  className="cursor-interactive"
>
  <button>Click me</button>
</motion.div>
```

### Scale on Hover
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }}
>
  Interactive Element
</motion.div>
```

### Glow Effect on Hover
```tsx
<motion.div
  className="bg-card rounded-lg"
  whileHover={{
    boxShadow: '0 8px 16px rgba(59, 130, 246, 0.1)'
  }}
>
  Content
</motion.div>
```

---

## 🎯 Using the Custom Cursor

The custom cursor is automatically active! Features:

- ✨ **Auto-hides** when mouse leaves window
- 🎨 **Trail particles** follow your cursor
- 🔄 **Smart scaling** on interactive elements
- 💫 **Glow effects** with multiple rings

Mark elements as interactive:
```tsx
className="cursor-interactive"
```

---

## 📱 Mobile Optimization Classes

### Ensure Proper Touch Targets
```tsx
// Automatically enforced in globals.css
// Min 44x44px for buttons/links
<button className="min-h-[44px] min-w-[44px]">
  Touch-friendly button
</button>
```

### Responsive Text
```tsx
{/* Scales from 14px on mobile to 16px on desktop */}
<p className="text-sm sm:text-base">
  Responsive text
</p>
```

---

## ⚡ Performance Tips

### 1. Use `once: true` for Animations
```tsx
whileInView={{ opacity: 1 }}
viewport={{ once: true }}  // ← Only animate once
```

### 2. Add Viewport Margins
```tsx
viewport={{ 
  once: true, 
  margin: '-100px'  // ← Trigger before fully visible
}}
```

### 3. Limit Active Animations
- Don't animate every element
- Use staggered animations for groups
- Keep animation durations under 1s

### 4. Optimize 3D Transforms
```tsx
// Use these for GPU acceleration
transform: 'translate3d(0, 0, 0)'
transform: 'translateZ(0)'
backfaceVisibility: 'hidden'
```

---

## 🎬 Timing Guide

### Standard Durations
- **Quick interactions**: 0.2-0.3s (hover effects, hover states)
- **Element entry**: 0.6-0.8s (fade in, slide)
- **Page transitions**: 0.8-1.0s (full screen transitions)
- **Stagger delay**: 0.1-0.15s between children

### Recommended Easing
```typescript
// Premium bouncy effect
ease: [0.34, 1.56, 0.64, 1]

// Standard ease
ease: "easeInOut"

// Spring physics
type: "spring"
stiffness: 400
damping: 10
```

---

## 📊 Accessibility

### Respect Reduced Motion
The site automatically respects `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
}
```

Users with motion preferences will see instant transitions.

---

## 🚀 Advanced Patterns

### Parallax Scroll Effect
```tsx
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const { ref, y, opacity } = useScrollAnimation(200)

return (
  <div ref={ref}>
    <motion.div style={{ y, opacity }}>
      Parallax content
    </motion.div>
  </div>
)
```

### Scroll Progress Indicator
```tsx
const { scrollYProgress } = useScroll()
const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

return (
  <motion.div
    style={{ scaleX }}
    className="h-1 bg-primary origin-left"
  />
)
```

### Mouse Tracking
```tsx
const { x, y } = useMotionValue(0), useMotionValue(0)

const handleMouse = (e) => {
  x.set(e.clientX)
  y.set(e.clientY)
}

return (
  <div onMouseMove={handleMouse}>
    {/* content */}
  </div>
)
```

---

## 🐛 Debugging

### Check Animation is Triggering
```tsx
// Add this to see when animation triggers
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
onAnimationComplete={() => console.log('Animation done!')}
```

### Performance Profiling
- Open DevTools → Performance tab
- Record interaction
- Look for yellow (scripting) or red (painting) blocks
- Smooth animations should be mostly green (rendering)

### Disable Animations for Testing
Add to component:
```tsx
const prefersNoMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const duration = prefersNoMotion ? 0 : 0.6
```

---

## 📝 Component Checklist

When adding new sections:
- [ ] Use `PageTransition` wrapper
- [ ] Use `SectionHeader` for titles
- [ ] Add `cursor-interactive` to clickable elements
- [ ] Set proper viewport margins
- [ ] Test on mobile (< 768px)
- [ ] Check animation timing (0.6-0.8s)
- [ ] Verify touch targets (44x44px minimum)
- [ ] Add proper margins for scroll safety

---

## 🎉 You're All Set!

Your site now has premium smooth transitions throughout. Every user interaction feels polished and intentional. The animations are optimized for performance while maintaining visual appeal across all devices.

**Happy building! 🚀**
