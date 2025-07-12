# Animated GIF Background Implementation Guide

## Overview
I've implemented an animated GIF background system that only appears on the home page and responds to your existing light/dark theme system.

## What's Been Added

### 1. AnimatedBackground Component (`src/components/AnimatedBackground.tsx`)
- Automatically switches GIFs based on current theme (light/dark)
- Includes loading states and error handling
- Respects user's motion preferences (accessibility)
- Optimized for performance with image preloading

### 2. Home Page Integration (`src/app/page.tsx`)
- Added the AnimatedBackground component only to the home page
- Configured with separate GIFs for light and dark themes
- Set to 20% opacity for subtle effect

### 3. Enhanced Styling (`src/resources/animated-background.css`)
- Theme-specific filters and adjustments
- Mobile responsiveness (reduced opacity on small screens)
- Accessibility support (respects `prefers-reduced-motion`)
- Fallback gradient when GIFs fail to load

### 4. GIF Directory (`public/gifs/`)
- Organized location for background GIF files
- Includes README with optimization tips

## How to Add Your Own GIFs

### Step 1: Prepare Your GIF Files
1. **Light Theme GIF**: Should be bright/vibrant but not overwhelming
2. **Dark Theme GIF**: Should be darker/muted to complement dark theme
3. **Recommended specs**:
   - Resolution: 1920x1080 or higher
   - File size: Under 5MB for good performance
   - Duration: 3-10 seconds (loops automatically)

### Step 2: Add Files to Project
```bash
# Place your GIF files in the public/gifs directory
public/gifs/light-background.gif
public/gifs/dark-background.gif
```

### Step 3: Customize Settings (Optional)
In `src/app/page.tsx`, you can adjust:

```tsx
<AnimatedBackground 
  lightGif="/gifs/light-background.gif"      // Path to light theme GIF
  darkGif="/gifs/dark-background.gif"        // Path to dark theme GIF
  opacity={0.2}                              // Opacity (0.1 to 0.5 recommended)
/>
```

## Key Features

### Theme Responsiveness
- **Light Mode**: Shows `light-background.gif`
- **Dark Mode**: Shows `dark-background.gif`
- **Automatic Switching**: Changes when you toggle the theme button
- **Smooth Transitions**: Fades between GIFs when theme changes

### Performance Optimizations
- **Image Preloading**: GIFs are loaded before being displayed
- **Error Handling**: Graceful fallback if GIF fails to load
- **Mobile Optimization**: Reduced opacity on smaller screens
- **Loading States**: Smooth fade-in when GIF loads

### Accessibility
- **Motion Preferences**: Respects `prefers-reduced-motion` setting
- **Screen Reader Friendly**: Background doesn't interfere with content
- **Keyboard Navigation**: No impact on keyboard accessibility

## Customization Options

### Opacity Levels
- `0.1` - Very subtle, barely noticeable
- `0.2` - Default, subtle but visible
- `0.3` - More prominent
- `0.4` - Strong presence
- `0.5` - Maximum recommended (may interfere with readability)

### Different GIFs for Different Pages
You can add the AnimatedBackground to other pages:

```tsx
// In any page component
import { AnimatedBackground } from "@/components";

export default function SomePage() {
  return (
    <>
      <AnimatedBackground 
        lightGif="/gifs/page-specific-light.gif"
        darkGif="/gifs/page-specific-dark.gif"
        opacity={0.15}
      />
      {/* Your page content */}
    </>
  );
}
```

## File Structure Created
```
src/
  components/
    AnimatedBackground.tsx    # Main component
    index.ts                 # Exports AnimatedBackground
  app/
    page.tsx                 # Home page with background
  resources/
    animated-background.css  # Styling for background

public/
  gifs/
    light-background.gif     # Light theme GIF (add your own)
    dark-background.gif      # Dark theme GIF (add your own)
    README.md               # Instructions
```

## Testing Checklist
- [ ] **Theme switching**: Verify GIFs change when toggling light/dark mode
- [ ] **Mobile responsive**: Check appearance on different screen sizes
- [ ] **Performance**: Test loading times and animation smoothness
- [ ] **Accessibility**: Test with motion preferences disabled
- [ ] **Error handling**: Test with missing or broken GIF files

## Removing the Background
If you want to remove the animated background later:

1. Remove the `<AnimatedBackground />` component from `src/app/page.tsx`
2. Remove the CSS import from `src/app/layout.tsx`
3. Optionally remove the GIF files from `public/gifs/`

## GIF Recommendations

### For Light Theme:
- Subtle particle animations
- Soft geometric patterns
- Nature scenes (clouds, water ripples)
- Abstract light patterns
- Minimal line art animations

### For Dark Theme:
- Space/cosmic animations
- Dark particle effects
- Neon/glowing elements
- Abstract dark patterns
- Minimal geometric animations

### Tools for GIF Optimization:
- **GIPHY Optimizer**: Free online tool
- **ImageOptim**: Mac app for file compression
- **TinyPNG**: Online compression tool
- **Photoshop**: Export for web settings

## Current Status
✅ Component created and integrated
✅ Theme switching implemented
✅ Performance optimizations added
✅ Accessibility features included
✅ CSS styling complete
✅ Directory structure created
⏳ **Add your own GIF files to `public/gifs/` directory**

## Next Steps
1. Add your `light-background.gif` and `dark-background.gif` files to the `public/gifs/` directory
2. Test the theme switching functionality
3. Adjust opacity if needed
4. Optimize GIF files for best performance

Once you add your GIF files, the animated background will be fully functional and will automatically switch between light and dark versions based on your theme selection!
