import { NavigationItem } from "@/components/LandingNavigation";

export const landingNavigation = {
  // Main navigation configuration
  title: "FLORUS Sound Room",
  subtitle: "Toronto Hub for DJ Craft & Sound Culture",
  
  // Optional criteria for showing small text below logos
  showSubtext: true, // Set to false to hide all subtext
  
  // Navigation items with custom logo images
  items: [
    {
      id: "about",
      label: "About Us",
      image: "/logos/default-florus.webp", // Custom logo image
      href: "/about",
      description: "Learn about our studio",
      subtext: "Discover Our Story" // Small text below logo
    },
    {
      id: "booking",
      label: "Book Session",
      image: "/logos/book-now-florus.webp", // Custom booking logo
      href: "https://florussoundroom.setmore.com",
      external: true,
      description: "Schedule your session",
      subtext: "Reserve Your Slot" // Small text below logo
    },
    {
      id: "gallery",
      label: "Studio Gallery",
      image: "/logos/default-florus.webp", // Custom logo image
      href: "/gallery",
      description: "View our space",
      subtext: "Explore Gallery"
    }
  ] as NavigationItem[]
};

// Alternative configuration with flower logos
export const landingNavigationFlower = {
  title: "FLORUS Sound Room",
  subtitle: "Toronto Hub for DJ Craft & Sound Culture",
  
  // Optional criteria for showing small text below logos
  showSubtext: true, // Set to false to hide all subtext
  
  items: [
    {
      id: "about",
      label: "About Us",
      image: "/logos/flower-1.png", // Flower logo variant 1
      href: "/about",
      description: "Learn about our studio",
      subtext: "Discover Our Story"
    },
    {
      id: "booking",
      label: "Book Session",
      image: "/logos/flower-2.png", // Flower logo variant 2
      href: "https://florussoundroom.setmore.com",
      external: true,
      description: "Schedule your session",
      subtext: "Reserve Your Slot"
    },
    {
      id: "gallery",
      label: "Studio Gallery",
      image: "/logos/flower-3.png", // Flower logo variant 3
      href: "/gallery",
      description: "View our space",
      subtext: "Explore Gallery"
    }
  ] as NavigationItem[]
};

// Custom configuration examples:
// landingNavigation: Uses default-florus.webp and book-now-florus.webp logos
// landingNavigationFlower: Uses flower-1.png, flower-2.png, and flower-3.png logos
// Both configurations can be imported and used on the same page to show different appearances
// To use the flower version, import landingNavigationFlower instead
// To use custom logo images, set the "image" property with path to your logo
// To use regular icons, set the "icon" property to any available IconName
// You can mix both images and icons in the same configuration
// Logo images should be placed in /public/logos/ directory
// To add external links, set external: true
// To show small text below logos, set showSubtext: true and add subtext property to items
// To modify styling, update the component props or add custom CSS
