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
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MarkDYabut/magic-portfolio-for-next-js",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com",
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
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Landing Site`,
  description: `Landing website showcasing brand as a ${person.role}`,
  headline: <>Toronto Hub for DJ Craft & Sound Culture</>,
  featured: {
    display: true,
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
    display: true,
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
    title: "Work Experience",
    experiences: [
      {
        company: "DOWest Fest",
        timeframe: "2025 June 8",
        role: "Sound",
        achievements: [
          <>
            Provided comprehensive DJ equipment rental and technical support for over 40 artists 
            throughout the 3-day festival, ensuring seamless performances with zero technical failures.
          </>,
          <>
            Designed and deployed a custom multi-stage sound system featuring Pioneer CDJ-3000s 
            and DJM-V10 mixers, delivering pristine audio quality across multiple venues simultaneously.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "KYDS BOP",
        timeframe: "2025 June 14",
        role: "Sound",
        achievements: [
          <>
            Curated and provided premium vinyl-focused DJ setups for 25+ artists during the event, 
            featuring classic Technics 1210 MK5 turntables for authentic analog mixing experiences.
          </>,
          <>
            Engineered a specialized sound system combining legendary Technics 1210 MK5s with 
            the flagship DJM-V10 mixer, delivering warm analog sound with modern mixing capabilities.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Sound Production",
        description: <>Crafting cutting-edge beats and soundscapes using industry-standard tools like Ableton Live, FL Studio, and the legendary Akai MPC 1000. From intricate sampling and drum programming to full track production and mixing, delivering professional-grade music that pushes creative boundaries.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "All Format DJing",
        description: <>Master of vinyl and digital formats, delivering seamless mixes on industry-leading Pioneer CDJ-3000s paired with the flagship DJM-V10 mixer. Expert in rekordbox preparation, harmonic mixing, and the timeless art of vinyl beatmatching—bridging classic turntable techniques with cutting-edge digital precision for unforgettable performances.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
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
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
