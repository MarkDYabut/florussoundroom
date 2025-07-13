# Animation Configuration System

This document explains the animation configuration system that controls RevealFx animations throughout the website.

## Overview

The animation system is designed to enable RevealFx animations only on specific pages, with the homepage being the primary focus for animated content while other pages display static content for better performance and user experience.

## Configuration

### Location
The animation configuration is located in `/src/resources/content.js` under the `animations` object.

### Configuration Options

```javascript
const animations = {
  // Enable RevealFx animations only on specific pages
  enableRevealFx: {
    homepage: true,    // Enable on homepage (/)
    about: false,      // Disable on about page
    gallery: false,    // Disable on gallery page
    services: false,   // Disable on services pages
    work: false,       // Disable on work pages
    default: false,    // Default for other pages
  },
  // Function to check if RevealFx should be enabled for a given path
  shouldEnableRevealFx: function(pathname) {
    if (pathname === '/' || pathname === '') return this.enableRevealFx.homepage;
    if (pathname.startsWith('/about')) return this.enableRevealFx.about;
    if (pathname.startsWith('/gallery')) return this.enableRevealFx.gallery;
    if (pathname.startsWith('/services')) return this.enableRevealFx.services;
    if (pathname.startsWith('/work')) return this.enableRevealFx.work;
    return this.enableRevealFx.default;
  }
};
```

## Components

### ConditionalRevealFx
A wrapper component that automatically determines whether to apply RevealFx animations based on the current page route.

**Location**: `/src/components/ConditionalRevealFx.tsx`

**Usage**:
```jsx
import { ConditionalRevealFx } from '@/components';

// Replace RevealFx with ConditionalRevealFx
<ConditionalRevealFx translateY="12" delay={0.6} fillWidth>
  <YourContent />
</ConditionalRevealFx>
```

**Features**:
- Automatically detects current page route using `usePathname()`
- Applies RevealFx animations only when enabled for the current route
- Preserves layout properties (padding, margin, alignment) when animations are disabled
- Accepts all standard RevealFx props

### Updated Components

The following components have been updated to use the new animation system:

1. **PersonHeader** (`/src/components/PersonHeader.tsx`)
   - Removed `disableRevealFx` prop
   - Now automatically handles animations based on route

2. **ImageCarousel** (`/src/components/ImageCarousel.tsx`)
   - Replaced RevealFx with ConditionalRevealFx
   - Animations only appear on homepage

3. **Homepage** (`/src/app/page.tsx`)
   - All RevealFx instances replaced with ConditionalRevealFx
   - Maintains all existing animation timing and effects on homepage

## Customization

### Adding New Pages
To configure animations for new pages, update the `enableRevealFx` object and add a corresponding condition in `shouldEnableRevealFx()`:

```javascript
enableRevealFx: {
  // ...existing config...
  newPage: true,  // Enable animations for new page
},

shouldEnableRevealFx: function(pathname) {
  // ...existing conditions...
  if (pathname.startsWith('/new-page')) return this.enableRevealFx.newPage;
  return this.enableRevealFx.default;
}
```

### Enabling/Disabling Animations
Simply toggle the boolean values in the `enableRevealFx` configuration:

```javascript
enableRevealFx: {
  homepage: true,    // Animations enabled
  about: false,      // Animations disabled
  gallery: true,     // Enable animations for gallery
  // ...
}
```

## Benefits

1. **Performance**: Reduces unnecessary animations on non-homepage routes
2. **User Experience**: Focuses animated content on the main landing page
3. **Maintainability**: Centralized configuration for all animations
4. **Flexibility**: Easy to enable/disable animations per page
5. **Backward Compatibility**: Existing RevealFx props work seamlessly with ConditionalRevealFx

## Migration from Direct RevealFx Usage

To migrate existing components:

1. Import `ConditionalRevealFx` instead of `RevealFx`
2. Replace `<RevealFx>` with `<ConditionalRevealFx>`
3. Remove any manual `disableRevealFx` logic
4. All props remain the same

**Before**:
```jsx
import { RevealFx } from '@once-ui-system/core';

{!disableRevealFx ? (
  <RevealFx translateY="12" delay={0.6}>
    <Content />
  </RevealFx>
) : (
  <div>
    <Content />
  </div>
)}
```

**After**:
```jsx
import { ConditionalRevealFx } from '@/components';

<ConditionalRevealFx translateY="12" delay={0.6}>
  <Content />
</ConditionalRevealFx>
```

## Current Configuration

As of the current setup:
- **Homepage (/)**: All RevealFx animations enabled
- **About (/about)**: All RevealFx animations disabled
- **Gallery (/gallery)**: All RevealFx animations disabled
- **Services (/services)**: All RevealFx animations disabled
- **Work (/work)**: All RevealFx animations disabled
- **Other pages**: All RevealFx animations disabled (default)

This ensures that the homepage provides an engaging animated experience while other pages focus on content delivery without distracting animations.
