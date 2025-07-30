const person = {
  name: "Daniel Lopez",
  role: "Full Stack Developer",
  location: "America/Chicago", // Austin, Texas time zone (Central Time)
  avatar: "/images/avatar.jpg",
  languages: ["English", "Spanish"], // Bilingual as mentioned in skills
};

// Define social links based on resume
const social = [
  {
    name: "Github",
    icon: "github",
    link: "https://github.com/dlopezkluever",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:lopezklu@yahoo.com",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/lopezklu",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "",
  },
];

const newsletter = {
  display: false, // Turning off newsletter for now
  title: <>Subscribe to my newsletter</>,
  description: <>Get the latest updates on my work and projects.</>,
};

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `Daniel Lopez - Full Stack Developer`,
  description: `Portfolio website showcasing my work as a Full Stack Developer with expertise in web development, video production, and entrepreneurship`,
  headline: <>Building innovative solutions through code and creativity</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Culture Compass Tours</strong></>,
    href: "/work/culture-compass-tours",
  },
  subline: (
    <>
      I'm Daniel, a Full Stack Developer with a unique background in mechanical engineering 
      <br /> and video production. I build web applications and digital experiences that solve real problems.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – Daniel Lopez`,
  description: `Meet Daniel Lopez, Full Stack Developer from Austin, Texas`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false, // Setting to false for now
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Daniel is an Austin-based Full Stack Developer with a unique blend of technical expertise and creative skills. 
        With a background in mechanical engineering from Kansas State University and extensive experience in both 
        software development and video production, he brings a multidisciplinary approach to solving complex problems 
        and building innovative digital solutions.
      </>
    ),
  },
  projects: {
    display: true, // set to false to hide this section
    title: "Development Projects",
    description: "A showcase of my software development projects, from educational platforms to AI-powered applications.",
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Kansas State University",
        description: <>BSc. Mechanical Engineering, Graduated May 2022, GPA: 3.3/4.0</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Full Stack Development",
        description: (
          <>
            Proficient in React, React Native, TypeScript, JavaScript, Next.js, and Vite for modern web applications. 
            Experienced with Python, Flask, and Django for backend development with PostgreSQL integration and RESTful APIs.
            Skilled in Tailwind CSS and Shadcn UI for responsive design, with Firebase, Supabase, and Redis for backend services.
          </>
        ),
        images: [],
      },
      {
        title: "Programming Languages & Frameworks",
        description: (
          <>
            Strong skills in Python (scripting, automation, web scraping, APIs), JavaScript, TypeScript & C++ 
            (interactive front-end and OOP principles), with experience in API integration for third-party services.
            Proficient in Three.JS for 3D graphics and Phaser for game development.
          </>
        ),
        images: [],
      },
      {
        title: "Rapid Prototyping and Development",
        description: (
          <>
            Experienced in rapid application development, leveraging AI-powered tools to accelerate the project lifecycle. 
            I specialize in building full-scale applications within a one-week sprint, consistently delivering a minimum 
            viable product (MVP) in the first two days. This process is followed by a period of refinement, feature expansion, 
            and final polish to ensure a high-quality product. I've successfully completed over 10 projects using this agile methodology.
          </>
        ),
        images: [],
      },
      {
        title: "Video Production & Design",
        description: (
          <>
            Advanced in Premiere Pro with 6 years experience, multi-cam live stream broadcast expertise. 
            Intermediate skills in After Effects, Lightroom, Photoshop, and graphic design.
          </>
        ),
        images: [],
      },
      {
        title: "Engineering Tools",
        description: <>SolidWorks Associate in Mechanical Design and Finite Element Analysis.</>,
        images: [],
      },
    ],
  },
  accomplishments: {
    display: true,
    title: "Accomplishments & Awards",
    items: [
      {
        title: "K-State Launch Entrepreneurship Competition Spring Champion",
        organization: "SLENT",
        year: "2021",
        description: "Won the spring entrepreneurship competition with an innovative business concept.",
      },
      {
        title: "Snyder Leadership Legacy Fellow",
        organization: "Kansas State University",
        year: "2021-2022",
        description: "Selected for prestigious leadership fellowship program recognizing exceptional student leaders.",
      },
      {
        title: "Peer Mentor",
        organization: "Project IMPACT, Kansas State",
        year: "2020-2022",
        description: "Mentored new multicultural undergraduates, helping them navigate university life and academic success.",
      },
    ],
  },
};

const work = {
  path: "/work",
  label: "Projects",
  title: `Development Projects – Daniel Lopez`,
  description: `Software development projects by Daniel Lopez, showcasing expertise in educational platforms, game development, and AI applications`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – Daniel Lopez`,
  description: `A photo collection by Daniel Lopez`,
  // Images by Daniel Lopez
  images: [
    {
      src: "/images/gallery/horizontal (1).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal (2).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal (3).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal (4).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal (5).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal (6).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal (7).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal (8).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal (9).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal (10).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal (11).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal (12).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal (13).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal (14).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal (15).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal (16).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal (17).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal (18).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal (19).jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal (20).jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, work, gallery };
