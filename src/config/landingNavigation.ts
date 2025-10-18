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
      image: "/logos/flower-1.png", // Custom logo image
      href: "https://parsnip-sealion-9ja2.squarespace.com/blog",
      description: "Learn about us",
      subtext: "Discover our story", // Small text below logo
      spin: {
        enabled: true,
        duration: 17, // 15 seconds for normal rotation
        hoverDuration: 3 // 3 seconds on hover
      }
    },
    {
      id: "booking",
      label: "Book Session",
      image: "/logos/flower-2.png", // Custom booking logo
      href: "https://florussoundroom.setmore.com",
      external: true,
      description: "Schedule your session",
      subtext: "Reserve a session", // Small text below logo
      spin: {
        enabled: true // No spinning for booking button
      }
    },
    {
      id: "rentals",
      label: "Contact us for rentals",
      image: "/logos/flower-3.png", // Custom logo image
      href: "https://parsnip-sealion-9ja2.squarespace.com/contact-1",
      description: "",
      subtext: "Plan an event with us",
      spin: {
        enabled: true,
        duration: 20, // Slower rotation for gallery
        hoverDuration: 2 // Faster hover effect
      }
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
      subtext: "Discover Our Story",
      spin: {
        enabled: true,
        duration: 12, // Faster rotation for flower variant
        hoverDuration: 2
      }
    },
    {
      id: "booking",
      label: "Book Session",
      image: "/logos/flower-2.png", // Flower logo variant 2
      href: "https://florussoundroom.setmore.com",
      external: true,
      description: "Schedule your session",
      subtext: "Reserve Your Slot",
      spin: {
        enabled: true,
        duration: 18, // Medium rotation
        hoverDuration: 4
      }
    },
    {
      id: "gallery",
      label: "Studio Gallery",
      image: "/logos/flower-3.png", // Flower logo variant 3
      href: "/gallery",
      description: "View our space",
      subtext: "Explore Gallery",
      spin: {
        enabled: true,
        duration: 25, // Slowest rotation
        hoverDuration: 5
      }
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

// Spin Animation Configuration:
// Each navigation item supports optional spin animation settings:
// - spin.enabled: true/false to enable/disable spinning for that item
// - spin.duration: number in seconds for normal rotation speed (default: 15)
// - spin.hoverDuration: number in seconds for hover rotation speed (default: 3)
// Example:
// spin: {
//   enabled: true,
//   duration: 20,      // 20 seconds per rotation
//   hoverDuration: 2   // 2 seconds per rotation on hover
// }
// Set enabled: false to completely disable spinning for specific items
