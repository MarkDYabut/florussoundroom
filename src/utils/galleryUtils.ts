import fs from 'fs';
import path from 'path';

export interface GalleryImage {
  src: string;
  alt: string;
  orientation: 'horizontal' | 'vertical';
}

/**
 * Reads all images from a specified gallery folder and returns them as GalleryImage objects
 * @param folderPath - Path relative to public/ (e.g., 'images/gallery')
 * @returns Array of GalleryImage objects
 */
export function getImagesFromFolder(folderPath: string): GalleryImage[] {
  try {
    const fullPath = path.join(process.cwd(), 'public', folderPath);
    
    // Check if directory exists
    if (!fs.existsSync(fullPath)) {
      console.warn(`Gallery folder not found: ${fullPath}`);
      return [];
    }

    const files = fs.readdirSync(fullPath);
    
    // Filter for image files
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
    const imageFiles = files.filter(file => 
      imageExtensions.some(ext => file.toLowerCase().endsWith(ext))
    );

    // Sort files for consistent ordering
    imageFiles.sort();

    return imageFiles.map(filename => {
      const nameWithoutExt = path.parse(filename).name;
      
      // Generate alt text from filename
      const altText = generateAltText(nameWithoutExt);
      
      // Determine orientation based on filename patterns or default to horizontal
      const orientation = determineOrientation(nameWithoutExt);

      return {
        src: `/${folderPath}/${filename}`,
        alt: altText,
        orientation
      };
    });
  } catch (error) {
    console.error('Error reading gallery folder:', error);
    return [];
  }
}

/**
 * Generates human-readable alt text from filename
 */
function generateAltText(filename: string): string {
  // Remove common prefixes and clean up the name
  const cleaned = filename
    .replace(/^(FLORUS|DSC)-?/i, '') // Remove FLORUS- or DSC prefixes
    .replace(/[-_]/g, ' ') // Replace hyphens and underscores with spaces
    .replace(/\d+/g, match => `#${match}`) // Add # before numbers
    .trim();

  // If filename indicates orientation, create appropriate alt text
  if (filename.toLowerCase().includes('horizontal')) {
    return `Studio photo ${cleaned}`;
  }
  if (filename.toLowerCase().includes('vertical')) {
    return `Studio photo ${cleaned}`;
  }

  // Default alt text patterns
  if (filename.toUpperCase().startsWith('FLORUS')) {
    return `FLORUS studio photo ${cleaned}`;
  }
  if (filename.toUpperCase().startsWith('DSC')) {
    return `Behind the scenes studio photo ${cleaned}`;
  }

  return `Studio gallery photo ${cleaned}`;
}

/**
 * Determines image orientation based on filename patterns
 */
function determineOrientation(filename: string): 'horizontal' | 'vertical' {
  const lower = filename.toLowerCase();
  
  // Explicit orientation in filename
  if (lower.includes('horizontal')) return 'horizontal';
  if (lower.includes('vertical')) return 'vertical';
  
  // Pattern-based guessing (you can customize these rules)
  // For now, let's assume most FLORUS photos are horizontal and DSC are mixed
  if (lower.startsWith('florus')) {
    // You could add more sophisticated logic here based on image analysis
    // For now, alternating pattern or random assignment
    const num = parseInt(filename.match(/\d+/)?.[0] || '0');
    return num % 2 === 0 ? 'horizontal' : 'vertical';
  }
  
  // Default to horizontal
  return 'horizontal';
}
