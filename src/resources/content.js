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
    link: "https://linkedin.com/in/",
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
  work: {
    display: true, // set to false to hide this section
    title: "Work experience",
    experiences: [
      {
        company: "Culture Compass Tours",
        role: "Tech & Marketing Lead",
        timeframe: "February 2025 – May 2025",
        achievements: [
          <>
            Co-founded a local tour guide company in Mexico, leading all tech and marketing operations.
          </>,
          <>
            Built a full-stack website using Flask with dynamic booking system, automated email replies, 
            and SEO-optimized content management.
          </>,
          <>
            Created marketing assets including photography, fliers, and business cards to increase bookings.
          </>,
          <>
            Authored the business plan & investment letters, managed customer support, and occasionally led tours on-site.
          </>,
        ],
        images: [],
      },
      {
        company: "Chicago Bulls College Prep",
        role: "Physics Professor",
        timeframe: "July 2023 – May 2024",
        achievements: [
          <>
            Taught 6 courses of Honors & Standard Physics covering University Physics 1 & 2 content.
          </>,
          <>
            Designed new curriculum tailored to optimize student learning outcomes and improve SAT skills.
          </>,
          <>
            Created engaging project & lab assignments to apply theories into real-life examples.
          </>,
        ],
        images: [],
      },
      {
        company: "Wildcat Watch",
        role: "Executive Producer, Live Events Director, Co-Vice President",
        timeframe: "August 2019 – July 2022",
        achievements: [
          <>
            Produced video and online material for clients and K-State organizations.
          </>,
          <>
            Directed and distributed live filming of large events within and outside the University.
          </>,
          <>
            Led team meetings and constructed comprehensive production plans & schedules.
          </>,
          <>
            Often responsible for other aspects of production, from lighting & set design to directing & interviewing.
          </>,
          <>
            Produced marketing video content for the University's social media.
          </>,
        ],
        images: [],
      },
      {
        company: "Lopez-Klu Productions",
        role: "Video Producer",
        timeframe: "August 2021 - Present",
        achievements: [
          <>
            Founded an independent video freelance service offering affordable production to the community.
          </>,
          <>
            Produced various videos from corporate content to narrative short films to client satisfaction.
          </>,
          <>
            Portfolio available at lopezklu.myportfolio.com
          </>,
        ],
        images: [],
      },
      {
        company: "Entegrity Energy Partners",
        role: "Energy Engineering Intern",
        timeframe: "May - September 2021",
        achievements: [
          <>
            Completed investment grade audits of ESSER projects for school districts in KS & MO.
          </>,
          <>
            Presented in client meetings over energy optimization strategies, finances, and installation schedules.
          </>,
          <>
            Authored a comprehensive report detailing the ineffectiveness of Bipolar Ionization.
          </>,
        ],
        images: [],
      },
      {
        company: "Kansas State ELP & U.S. Air Force",
        role: "Video Producer",
        timeframe: "August 2020 – January 2021",
        achievements: [
          <>
            Responsible for all video content needed in the making of the online course, "English for Aviation Professionals."
          </>,
          <>
            The video content included interviews & demonstrations, to lessons & simulated scenario footage in aircrafts.
          </>,
          <>
            Being under the strict guidelines of KSU & U.S.A.F, all videos were edited punctually, & to a tee without error.
          </>,
        ],
        images: [],
      },
    ],
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
            Proficient in React, React Native, TypeScript, Next.js, and Vite for modern web applications. 
            Experienced with Python, Flask, and Django for backend development with PostgreSQL integration and RESTful APIs.
          </>
        ),
        images: [],
      },
      {
        title: "Programming Languages",
        description: (
          <>
            Strong skills in Python (scripting, automation, web scraping, APIs), JavaScript & C++ 
            (interactive front-end and OOP principles), with experience in API integration for third-party services.
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
  label: "Work",
  title: `Projects – Daniel Lopez`,
  description: `Design and development projects by Daniel Lopez`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – Daniel Lopez`,
  description: `A photo collection by Daniel Lopez`,
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

export { person, social, newsletter, home, about, work, gallery };
