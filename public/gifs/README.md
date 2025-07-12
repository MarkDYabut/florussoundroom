# GIF Background Files

This directory contains the animated GIF files used for the home page background.

## Current Files:
- `light-background.gif` - Animated background for light theme
- `dark-background.gif` - Animated background for dark theme

## Adding Your Own GIFs:

1. **Prepare your GIF files:**
   - Light theme GIF: Should complement light colors (subtle, not too bright)
   - Dark theme GIF: Should complement dark colors (subtle, not too dark)
   - Recommended size: 1920x1080 or similar high resolution
   - File size: Try to keep under 5MB for good performance

2. **Name your files:**
   - `light-background.gif`
   - `dark-background.gif`

3. **Replace the files in this directory**

4. **Adjust opacity if needed:**
   In `/src/app/page.tsx`, you can modify the `opacity` prop:
   ```tsx
   <AnimatedBackground 
     lightGif="/gifs/light-background.gif"
     darkGif="/gifs/dark-background.gif"
     opacity={0.2} // Adjust this value between 0.1 and 0.5
   />
   ```

## Performance Tips:
- Use optimized GIFs (tools like GIPHY's optimizer can help)
- Consider using WebP format for better compression
- Test on mobile devices to ensure good performance
- You can also use different GIFs for mobile vs desktop

## Alternative Formats:
The component also supports:
- WebP animated files
- MP4 videos (though you'd need to modify the component)
- Static images as fallbacks

## GIF Recommendations:

### Light Theme GIFs
- Subtle particle effects
- Soft geometric animations
- Nature scenes (clouds, water)
- Abstract patterns in light colors

### Dark Theme GIFs
- Space/cosmic animations
- Dark particle effects
- Neon/glowing elements
- Abstract patterns in dark colors
