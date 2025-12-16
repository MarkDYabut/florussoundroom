# PWA Icons Directory

This directory contains the icons needed for PWA (Progressive Web App) functionality.

## Required Icons

You need to create the following icon sizes and place them in this directory:

- icon-72x72.png (72x72 pixels)
- icon-96x96.png (96x96 pixels)
- icon-128x128.png (128x128 pixels)
- icon-144x144.png (144x144 pixels)
- icon-152x152.png (152x152 pixels)
- icon-192x192.png (192x192 pixels)
- icon-384x384.png (384x384 pixels)
- icon-512x512.png (512x512 pixels)

## How to Generate Icons

### Option 1: Using an Online Tool
1. Go to https://realfavicongenerator.net/ or https://www.pwabuilder.com/
2. Upload your logo/icon (ideally a square PNG or SVG, at least 512x512)
3. Download the generated icons and place them here

### Option 2: Using ImageMagick (CLI)
If you have a source image (e.g., logo.png):

```bash
# Install ImageMagick first: brew install imagemagick

convert logo.png -resize 72x72 icon-72x72.png
convert logo.png -resize 96x96 icon-96x96.png
convert logo.png -resize 128x128 icon-128x128.png
convert logo.png -resize 144x144 icon-144x144.png
convert logo.png -resize 152x152 icon-152x152.png
convert logo.png -resize 192x192 icon-192x192.png
convert logo.png -resize 384x384 icon-384x384.png
convert logo.png -resize 512x512 icon-512x512.png
```

### Option 3: Using a Node.js Script
Create and run this script in the project root:

```javascript
// generate-icons.js
const sharp = require('sharp');
const fs = require('fs');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const sourceImage = 'path/to/your/logo.png'; // Update this path

async function generateIcons() {
  for (const size of sizes) {
    await sharp(sourceImage)
      .resize(size, size)
      .png()
      .toFile(`public/icons/icon-${size}x${size}.png`);
    console.log(`Generated icon-${size}x${size}.png`);
  }
}

generateIcons();
```

## Important Notes

- Icons should have a **transparent or solid background**
- Use **PNG format** for best compatibility
- The **512x512 icon** is most important (used for splash screens)
- Icons should be **square** (equal width and height)
- Consider using your logo or brand mark as the icon

## Testing

After adding icons, test your PWA:
1. Build: `npm run build`
2. Start: `npm start`
3. Open Chrome DevTools > Application > Manifest
4. Verify all icons are loading correctly
