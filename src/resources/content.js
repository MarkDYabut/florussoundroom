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
      All-in-one destination in Toronto for professional DJ services, offering dynamic DJ bookings, premium gear rentals, and hands-on lessons to empower aspiring and seasoned artists alike—where sound meets skill in a creative, collaborative space.
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
        FLORUS is a studio and creative platform built
        with intention. More than a place to practice,
        FLORUS lives at the intersection of music, culture,
        and community — offering tools, education, and
        curated experiences for DJs and sound artists
        who value craft, individuality, and depth. Every
        detail, from programming to education is designed
        to foster growth and preserve the integrity of the
        art.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Recent Projects & Events",
    experiences: [
      {
        company: "DOWest Fest",
        timeframe: "2025 June 8",
        role: "Lead Sound Engineer & Equipment Provider",
        achievements: [
          <>
            Designed and implemented a comprehensive multi-stage sound system supporting 40+ artists
            across a 3-day festival, achieving zero technical failures and pristine audio quality throughout.
          </>,
          <>
            Deployed custom Pioneer CDJ-3000 and DJM-V10 mixer configurations with advanced DSP processing,
            ensuring optimal sound reproduction across diverse genres and performance styles.
          </>,
          <>
            Managed real-time technical support, equipment rental coordination, and artist liaison services,
            earning recognition for exceptional professionalism and technical expertise.
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
            Provided on-site technical support and turntable calibration services, ensuring optimal
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
      {
        company: "Private Studio Sessions",
        timeframe: "Ongoing",
        role: "Music Producer & Mix Engineer",
        achievements: [
          <>
            Produced and mixed tracks for emerging Toronto artists across hip-hop, electronic, and R&B genres
            using industry-standard analog and digital processing chains.
          </>,
          <>
            Specialized in beat making with the legendary Akai MPC 1000, creating authentic boom-bap and
            contemporary trap productions with impeccable sampling and drum programming.
          </>,
          <>
            Developed signature mixing techniques combining analog outboard gear with modern DAW workflows,
            resulting in releases that have gained traction on streaming platforms and radio.
          </>,
        ],
        images: [],
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

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Sound Engineering Insights & Tutorials",
  description: `Read the latest production tips, mixing techniques, and industry insights from ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects & Services – ${person.name}`,
  description: `Sound engineering projects, DJ services, and equipment installations by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Studio & Event Gallery – ${person.name}`,
  description: `Behind-the-scenes photos from studio sessions, events, and sound system installations by ${person.name}`,
  // Specify the folder path relative to public/ to automatically load all images
  imageFolder: "images/gallery",
};

export { person, social, newsletter, home, about, blog, work, gallery };
