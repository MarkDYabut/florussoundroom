import { NavigationItem } from "@/components/LandingNavigation";

export const landingNavigation = {
  // Main navigation configuration
  title: "FLORUS Sound Room",
  subtitle: "Toronto Hub for DJ Craft & Sound Culture",
  
  // Navigation items
  items: [
    {
      id: "about",
      label: "About Us",
      icon: "person",
      href: "/about",
      description: "Learn about our studio"
    },
    {
      id: "booking",
      label: "Book Session",
      icon: "calendar",
      href: "https://florussoundroom.setmore.com",
      external: true,
      description: "Schedule your session"
    },
    {
      id: "gallery",
      label: "Studio Gallery",
      icon: "gallery",
      href: "/gallery",
      description: "View our space"
    },
    {
      id: "services",
      label: "Services",
      icon: "rocket",
      href: "/services",
      description: "What we offer"
    }
  ] as NavigationItem[]
};

// Alternative minimal configuration (if you want fewer items)
export const landingNavigationMinimal = {
  title: "FLORUS Sound Room",
  subtitle: "Toronto Hub for DJ Craft & Sound Culture",
  
  items: [
    {
      id: "about",
      label: "About Us",
      icon: "person",
      href: "/about",
      description: "Learn about our studio"
    },
    {
      id: "booking",
      label: "Book Session",
      icon: "calendar",
      href: "https://florussoundroom.setmore.com",
      external: true,
      description: "Schedule your session"
    }
  ] as NavigationItem[]
};

// Custom configuration examples:
// To use the minimal version, import landingNavigationMinimal instead
// To customize icons, change the icon property to any available IconName
// To add external links, set external: true
// To modify styling, update the component props or add custom CSS
