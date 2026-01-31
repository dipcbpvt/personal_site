# 🖱️ Cursor Interactive Class Guide

## Overview

The custom cursor system automatically detects interactive elements and provides visual feedback. This guide explains how to properly mark elements and customize the cursor behavior.

---

## Basic Usage

### Automatically Detected Elements
The cursor automatically scales and glows on these elements:

```typescript
a                    // Links
button               // Buttons
input                // Input fields
select               // Select dropdowns
textarea             // Text areas
[role="button"]      // ARIA buttons
[onclick]            // Elements with onclick
.cursor-interactive  // Custom marked elements
```

**No additional configuration needed for these!**

### Example
```tsx
// ✅ These automatically get cursor feedback
<a href="/about">About</a>
<button>Click me</button>
<input type="text" />

// No need to add anything - cursor will scale!
```

---

## Custom Interactive Elements

### Mark Custom Elements
For custom interactive elements not in the auto-detected list:

```tsx
// Add class for cursor feedback
<div className="cursor-interactive" onClick={handleClick}>
  Custom interactive element
</div>

// Multiple classes work fine
<div className="cursor-interactive p-4 rounded-lg hover:bg-primary/10">
  Clickable div
</div>
```

### Styled Components
```tsx
// Using Tailwind
<div 
  className="cursor-interactive px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
  onClick={handleAction}
>
  Interactive Widget
</div>
```

---

## Cursor Behavior

### Visual Feedback States

#### Default State
```
Ring opacity: 0.7
Inner dot: Full scale (1.0)
Glow: Subtle
```

#### Hover State (On `.cursor-interactive`)
```
Ring opacity: 0.6
Ring scale: 1.3x
Inner dot: Scale 0.6x
Glow: Intense (20px)
```

#### Trail Particles
```
Spawns every ~30% of cursor movement
15 particle maximum active
Fade out over 0.8s
Glow effect: rgba(59, 130, 246, 0.6)
```

---

## Component Examples

### Navigation Links
```tsx
// ✅ Automatically handled
<nav>
  <a href="/experience">Experience</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
</nav>
```

### Custom Buttons
```tsx
// ✅ Need cursor-interactive class
<motion.div whileHover={{ y: -2 }}>
  <button 
    onClick={handleClick}
    className="cursor-interactive px-6 py-2 rounded-full bg-primary"
  >
    Call to Action
  </button>
</motion.div>
```

### Interactive Cards
```tsx
// ✅ Add to card wrapper
<motion.div 
  className="cursor-interactive p-6 rounded-xl border border-primary/10 hover:bg-primary/5"
  whileHover={{ scale: 1.02 }}
  onClick={handleCardClick}
>
  <h3>Card Title</h3>
  <p>Card content</p>
</motion.div>
```

### Badge/Tag Elements
```tsx
// ✅ Mark as interactive if clickable
<motion.div
  className="cursor-interactive px-3 py-1 rounded-full bg-primary/10"
  whileHover={{ scale: 1.05 }}
  onClick={() => filterByTag(tag)}
>
  {tag}
</motion.div>
```

### Social Links
```tsx
// ✅ Automatically handled (a tags)
<div className="flex gap-4">
  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
    GitHub
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    LinkedIn
  </a>
</div>
```

---

## Advanced Usage

### Conditional Interactive
```tsx
// Toggle interactive based on state
<div 
  className={cn(
    "p-4 rounded-lg",
    isClickable && "cursor-interactive"
  )}
  onClick={isClickable ? handleClick : undefined}
>
  {content}
</div>
```

### With Motion
```tsx
// Combine cursor class with framer-motion
<motion.div
  className="cursor-interactive"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  onClick={handleClick}
>
  Interactive Element
</motion.div>
```

### Group Interactive Elements
```tsx
// Parent can be interactive
<div className="cursor-interactive space-y-4" onClick={handleGroupClick}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

---

## CSS Customization

### Global Cursor Class
The `.cursor-interactive` class only adds the cursor class marker. All visual effects are handled by the cursor component.

### If You Need Custom Styling
```tsx
// Create variant class
<div className="cursor-interactive custom-interactive" onClick={...}>
  Element
</div>
```

Then style in your CSS:
```css
.custom-interactive {
  /* Your custom styles */
  background: linear-gradient(...);
}

.custom-interactive:hover {
  /* Hover states */
}
```

---

## Performance Considerations

### Cursor Scaling
The cursor automatically finds all interactive elements on page load and adds event listeners. This means:

- ✅ No manual DOM queries needed
- ✅ Efficient event delegation
- ✅ 60fps smooth interactions
- ⚠️ Dynamically added elements won't get listeners

### For Dynamic Content
If you add interactive elements dynamically:

```tsx
// Option 1: Add cursor-interactive class
<div className="cursor-interactive" onClick={handleClick}>
  Dynamically added element
</div>

// Option 2: Re-run cursor init (not recommended)
// The cursor component will auto-detect a, button, input, etc.
```

---

## Accessibility

### Cursor Class Doesn't Affect Accessibility
The `.cursor-interactive` class is purely visual and doesn't impact:
- Keyboard navigation
- Screen readers
- Semantic HTML
- Focus indicators

### Best Practices
```tsx
// ✅ Good - Proper semantic HTML
<button className="cursor-interactive">
  Click me
</button>

// ✅ Good - ARIA for custom elements
<div 
  className="cursor-interactive"
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
>
  Custom button
</div>

// ❌ Avoid - Non-semantic without ARIA
<div className="cursor-interactive" onClick={handleClick}>
  Not accessible
</div>
```

---

## Real-World Examples

### Portfolio Card
```tsx
<motion.div
  className="cursor-interactive p-6 rounded-xl border border-primary/10"
  whileHover={{ scale: 1.02, y: -2 }}
  onClick={() => navigateTo(project.url)}
>
  <h3>{project.title}</h3>
  <p>{project.description}</p>
  <span className="text-primary">View Project →</span>
</motion.div>
```

### Skill Tag
```tsx
<motion.button
  className="cursor-interactive px-3 py-1 rounded-full bg-primary/10 hover:bg-primary/20"
  whileHover={{ scale: 1.05 }}
>
  {skill}
</motion.button>
```

### Experience Item
```tsx
<motion.div
  className="cursor-interactive p-4 rounded-lg border border-border hover:bg-muted/50"
  whileHover={{ x: 4 }}
  onClick={() => setSelected(item.id)}
>
  <h4>{item.title}</h4>
  <p>{item.company}</p>
</motion.div>
```

### Navigation Item
```tsx
<Link href={path} className="cursor-interactive">
  Navigation Text
</Link>
```

---

## Debugging

### Check if Cursor Class Works

1. **Open DevTools** (F12)
2. **Move mouse over element**
3. **Check if cursor scales** (should get bigger)
4. **Check glow effect** (blue ring should intensify)

### If Not Working

**Issue**: Cursor doesn't scale on element
```
Solution: Add .cursor-interactive class
```

**Issue**: Class added but cursor still doesn't scale
```
Solution: Check if event listener is attached
  1. Inspect element in DevTools
  2. Should have mouseenter/mouseleave listeners
  3. If not, check console for errors
```

**Issue**: Cursor disappears or behaves strangely
```
Solution: 
  1. Check if mouse left window
  2. Check console for JavaScript errors
  3. Verify cursor component is mounted
```

---

## Common Mistakes

### ❌ Don't Do This
```tsx
// Wrong: Adding styling instead of class
<div onClick={...} style={{ cursor: 'pointer' }}>
  {/* Won't work with custom cursor */}
</div>

// Wrong: Using cursor:pointer on custom cursor element
<div className="cursor-pointer cursor-interactive" onClick={...}>
  {/* Conflicting cursor styles */}
</div>

// Wrong: Forgetting the class on custom elements
<div onClick={handleClick}>
  {/* Won't scale - need .cursor-interactive */}
</div>
```

### ✅ Do This Instead
```tsx
// Correct: Use cursor-interactive class
<div className="cursor-interactive" onClick={...}>
  {/* Works perfectly */}
</div>

// Correct: Auto-detected elements
<button onClick={...}>
  {/* No class needed */}
</button>

// Correct: For links
<a href="/path" className="cursor-interactive">
  {/* Works great */}
</a>
```

---

## FAQ

**Q: Do I need to add cursor-interactive to all elements?**
A: No! Only custom interactive elements. Links, buttons, inputs, etc. are automatically detected.

**Q: What if I add elements dynamically?**
A: Add the `.cursor-interactive` class to custom elements. Auto-detected elements work automatically.

**Q: Can I customize the cursor appearance?**
A: Edit `/components/custom-cursor.tsx` to change colors, sizes, or effects.

**Q: Does cursor-interactive affect performance?**
A: No, it's just a CSS class marker. The cursor component handles all animation.

**Q: How do I disable the custom cursor?**
A: Remove `<CustomCursor />` from `/app/layout.tsx`.

**Q: Can I use cursor-interactive with other cursor libraries?**
A: The site sets `cursor: none` globally, so other cursor libraries won't show.

---

## Best Practices

### 1. Be Consistent
```tsx
// ✅ Always add to custom interactive elements
All custom buttons, cards, links
```

### 2. Combine with Motion
```tsx
// ✅ Great combination
<motion.div
  className="cursor-interactive"
  whileHover={{ y: -2 }}
  onClick={handleClick}
>
  Element
</motion.div>
```

### 3. Keep Semantics
```tsx
// ✅ Proper semantic HTML
<a href="/page" className="cursor-interactive">Link</a>
<button className="cursor-interactive">Button</button>
```

### 4. Test on Mobile
```
Note: Custom cursor only works on desktop
Mobile uses default touch feedback
```

---

## Summary

| Element Type | Auto-Detected? | Action |
|--------------|----------------|--------|
| `<a>` | ✅ Yes | None needed |
| `<button>` | ✅ Yes | None needed |
| `<input>` | ✅ Yes | None needed |
| Custom div | ❌ No | Add `.cursor-interactive` |
| Custom component | ❌ No | Add `.cursor-interactive` |
| `[role="button"]` | ✅ Yes | None needed |

---

**Ready to use the cursor effectively! 🖱️✨**

