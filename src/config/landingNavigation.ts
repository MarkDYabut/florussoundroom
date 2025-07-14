import { NavigationItem } from "@/components/LandingNavigation";

export const landingNavigation = {
  // Main navigation configuration
  title: "FLORUS Sound Room",
  subtitle: "Toronto Hub for DJ Craft & Sound Culture",
  
  // Navigation items with custom logo images
  items: [
    {
      id: "about",
      label: "About Us",
      image: "/logos/default-florus.webp", // Custom logo image
      href: "/about",
      description: "Learn about our studio"
    },
    {
      id: "booking",
      label: "Book Session",
      image: "/logos/book-now-florus.webp", // Custom booking logo
      href: "https://florussoundroom.setmore.com",
      external: true,
      description: "Schedule your session"
    }
  ] as NavigationItem[]
};

// Alternative full configuration (with mix of custom images and icons)
export const landingNavigationFull = {
  title: "FLORUS Sound Room",
  subtitle: "Toronto Hub for DJ Craft & Sound Culture",
  
  items: [
    {
      id: "about",
      label: "About Us",
      image: "/logos/default-florus.webp", // Custom logo
      href: "/about",
      description: "Learn about our studio"
    },
    {
      id: "booking",
      label: "Book Session",
      image: "/logos/book-now-florus.webp", // Custom logo
      href: "https://florussoundroom.setmore.com",
      external: true,
      description: "Schedule your session"
    },
    {
      id: "gallery",
      label: "Studio Gallery",
      icon: "gallery", // Regular icon
      href: "/gallery",
      description: "View our space"
    },
    {
      id: "services",
      label: "Services",
      icon: "rocket", // Regular icon
      href: "/services",
      description: "What we offer"
    }
  ] as NavigationItem[]
};

// Custom configuration examples:
// To use the full version with all options, import landingNavigationFull instead
// To use custom logo images, set the "image" property with path to your logo
// To use regular icons, set the "icon" property to any available IconName
// You can mix both images and icons in the same configuration
// Logo images should be placed in /public/logos/ directory
// To add external links, set external: true
// To modify styling, update the component props or add custom CSS
