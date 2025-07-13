import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "FOF",
  lastName: "Florus Sound Room",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Sound Studio",
  avatar: "/images/avatar.webp",
  email: "florussoundroom@gmail.com",
  location: "America/Toronto", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  address: {
    street: "146 Thirtieth Street",
    city: "Etobicoke",
    state: "ON",
    country: "Canada"
  },
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

// Global animation configuration
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

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      Stay updated with the latest in sound engineering, production techniques, mixing insights, and
      exclusive events from Toronto's premier DJ sound room and creative space.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "SoundCloud",
    icon: "github",
    link: "https://soundcloud.com/florussoundroom",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/florussoundroom",
  },
  {
    name: "Instagram",
    icon: "threads",
    link: "https://www.instagram.com/florussoundroom/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/homepage-og.jpg",
  label: "Home",
  title: `${person.name}'s Landing Site`,
  description: `Landing website showcasing brand as a ${person.role}`,
  headline: <>Toronto Hub for DJ Craft & Sound Culture</>,
  featured: {
    display: false,
    title: <>Recent project: <strong className="ml-4">Launch of our v1 sound system</strong></>,
    href: "/work/launch-of-our-v1-sound-system",
  },
  subline: (
    <>
      While our services continue to evolve, our core mission remains: to provide a dynamic space where sound meets skill, empowering artists to create, perform, and connect. Book a studio session now or inquire for other services.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p>Before Florus Collective officially came to life, the physical studio space already existed. Our initial motivation was simple: to create a dedicated place where we—Julian, Christian, and Kang—could collaborate, experiment, and share ideas without the pressure of commercial expectations.</p>
        <p>We found a place in 2024 and after a year, we felt like our dream came true. We had a studio of our own, a space where we had complete control and freedom of our own musical creations. We realized the space could grow into something bigger—a welcoming environment where like-minded artists and producers could come together to express themselves authentically.</p>
        <p>One of our first community initiatives was “Nina’s Intro to DJing” workshop at JAYU, which introduced newcomers to turntablism and crate digging in an accessible, welcoming way.</p>
        <p>We’ve also had the opportunity to extend our presence through collaborations—such as when Toronto jewelry retailer Nick’s Jewellery offered us space during Do West Fest to showcase what Florus does for a wider audience.
          That event also marked the debut of a custom-built sound system we designed and built from scratch—one of several passion-driven, music-related projects we plan to continue.
          Projects like this allow us to create unique, DIY platforms for DJs to perform and build community outside of traditional venues, offering more accessible opportunities for engagement, growth, and visibility.
        </p>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Recent Experiences",
    experiences: [
      {
        company: "Private DJ Training & Practice Sessions",
        timeframe: "Ongoing",
        role: "DJ Instructor & Technical Consultant",
        achievements: [
          <>
            Provide comprehensive DJ training on industry-standard equipment including Pioneer CDJ-3000s,
            DJM-V10 mixer, and classic Technics 1210 turntables for artists of all skill levels.
          </>,
          <>
            Teach advanced mixing techniques including harmonic mixing, beatmatching, live remixing, and
            creative transition methods across vinyl, CDJ, and digital formats.
          </>,
          <>
            Offer personalized rekordbox preparation sessions, helping DJs organize their music libraries,
            set cue points, and develop their unique performance style and workflow.
          </>,
        ],
        images: [],
      },
      {
        company: "Private Music Production Sessions",
        timeframe: "Ongoing",
        role: "Music Producer & Mix Engineer",
        achievements: [
          <>
            Produced and mixed tracks for emerging Toronto artists across hip-hop, electronic, and R&B genres
            using industry-standard analog and digital processing chains.
          </>,
          <>
            Specialized in beat making with tools such as the legendary Akai MPC 2000XL, creating authentic boom-bap and
            contemporary trap productions with innovative sampling and drum programming.
          </>,
          <>
            Developed signature mixing techniques combining analog outboard gear with modern DAW workflows,
            resulting in releases that have gained traction on streaming platforms and radio.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/gallery/FLORUS-74.jpg",
            alt: "Syntesizer setup",
            width: 20,
            height: 15,
          },
          {
            src: "/images/gallery/FLORUS-68.jpg",
            alt: "MPC2000xl setup",
            width: 20,
            height: 15,
          },
        ],
      },
      {
        company: "DOWest Fest",
        timeframe: "2025 June 8",
        role: "Lead Sound Engineer & Equipment Provider",
        achievements: [
          <>
            Designed and implemented a comprehensive multi-stage sound system supporting 40+ artists
            across a 3-day festival, achieving reliable technical performance and clear audio quality throughout.
          </>,
          <>
            Deployed custom Pioneer CDJ-3000 and DJM-V10 mixer configurations with advanced DSP processing,
            ensuring optimal sound reproduction across diverse genres and performance styles.
          </>,
          <>
            Managed real-time technical support, equipment rental coordination, and artist liaison services,
            earning positive feedback for professionalism and technical knowledge.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-05.png",
            alt: "DOWest Fest sound system setup",
            width: 20,
            height: 15,
          },
        ],
      },
      {
        company: "KYDS BOP",
        timeframe: "2025 June 14",
        role: "Vinyl Specialist & Sound System Designer",
        achievements: [
          <>
            Curated premium vinyl-focused DJ setups for 25+ artists, featuring legendary Technics 1210 MK5
            turntables paired with modern mixing technology for the ultimate analog experience.
          </>,
          <>
            Engineered a specialized hybrid sound system combining classic Technics 1210 MK5s with the
            flagship DJM-V10 mixer, delivering warm analog character with contemporary mixing capabilities.
          </>,
          <>
            Provided on-site technical support and turntable calibration services, helping ensure good
            performance for both veteran vinyl DJs and newcomers to the format.
          </>,
        ],
        images: [{
          src: "/images/projects/project-01/image-01.jpg",
          alt: "Studio mixing session",
          width: 20,
          height: 30,
        },
        ],
      },
    ],
  },
  studies: {
    display: false, // set to true to show this section
    title: "Education & Certifications",
    institutions: [
      {
        name: "Audio Engineering Society (AES)",
        description: <>Professional certification in sound engineering and acoustics.</>,
      },
      {
        name: "Pioneer DJ Academy",
        description: <>Advanced training in rekordbox, CDJ operation, and professional mixing techniques.</>,
      },
      {
        name: "Ableton Live Certified Trainer Program",
        description: <>Comprehensive music production and live performance certification.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical Expertise",
    skills: [
      {
        title: "Sound Production & Engineering",
        description: <>Professional music production using industry-standard DAWs including Ableton Live, Pro Tools, and Logic Pro. Expert in sampling, sound design, mixing, and mastering with analog and digital processing. Specialized in beat making with iconic gear like the Akai MPC 1000 and modern controllers.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Sound production setup",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Studio mixing board",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Professional DJ Performance",
        description: <>Master of all formats - vinyl, CDJ, and digital. Expert operation of Pioneer CDJ-3000s, DJM-V10 mixer, and classic Technics 1210 turntables. Advanced skills in harmonic mixing, beatmatching, rekordbox preparation, and live remixing for seamless, dynamic performances across all genres.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "DJ setup with CDJs",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Speaker System Design & DSP",
        description: <>Comprehensive expertise in active speaker systems, DSP configuration, and amplifier matching. Skilled in acoustic analysis, crossover design, room treatment, and system tuning for optimal sound reproduction. Experience with professional brands like Meyer Sound, d&b audiotechnik, and QSC.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-05.png",
            alt: "Professional speaker system",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const services = {
  path: "/services",
  label: "Services",
  title: "Professional Sound Engineering Services",
  description: `Explore our professional sound engineering services, mixing techniques, and industry expertise from ${person.name}`,
  // Create new service posts by adding a new .mdx file to app/services/posts
  // All services will be listed on the /services route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Past Work Experiences`,
  description: `Sound engineering projects, DJ services, and equipment installations by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Studio & Event Gallery`,
  description: `Behind-the-scenes photos from studio sessions, events, and sound system installations by ${person.name}`,
  // Specify the folder path relative to public/ to automatically load all images
  imageFolder: "images/gallery",
};

export { person, social, newsletter, home, about, services, work, gallery, animations };
