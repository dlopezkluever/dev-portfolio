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
      I'm Daniel, a Full Stack Developer with a unique background in mechanical engineering, education 
      and video production. I build web applications and digital experiences that solve real problems.
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
    title: "Work Experience",
    description: "Professional experience across technology, education, and creative industries.",
    experiences: [
      {
        company: "Gauntlet AI",
        timeframe: "June 2025 – Present",
        role: "Challenger - AI Engineering Program",
        achievements: [
          <>Selected for elite 10-week intensive program developing next generation of AI-enabled technical leaders, maintaining 80-100 hours/week commitment while mastering cutting-edge AI technologies</>,
          <>Mastered AI-first development frameworks including Cursor, v0, Lovable, Replit, and Windsurf, successfully cloning and enhancing enterprise-grade applications with advanced AI capabilities</>,
          <>Architected sophisticated RAG and GraphRAG systems with Vector databases, building reliable data orchestration pipelines with industry-standard metrics for enterprise integration</>,
          <>Developed autonomous AI agents using n8n, LangChain and LangGraph, implementing multi-agent systems with CrewAI and Swarm for complex workflow coordination</>,
          <>Executed advanced fine-tuning techniques using PEFT, QLoRA, and LoRA methodologies, optimizing open-source models from HuggingFace for custom applications</>,
          <>Collaborated directly with hiring partner teams on real-world projects, delivering compelling MVPs that demonstrate practical AI engineering capabilities</>,
          <>Built and launched production-ready AI applications with active user acquisition strategies, preparing for high-stakes presentations to VCs and technical leadership</>,
        ],
        images: []
      },
      {
        company: "Culture Compass Tours",
        timeframe: "February 2025 – May 2025",
        role: "Tech & Marketing Lead",
        achievements: [
          <>Engineered full-stack web application using Flask framework, implementing PostgreSQL database with 99.9% uptime and automated email response system serving 200+ customer inquiries monthly</>,
          <>Developed dynamic booking system with real-time availability checking, payment processing integration, and automated confirmation workflows, increasing booking efficiency by 75%</>,
          <>Architected SEO-optimized content management system resulting in 150% increase in organic search traffic within first 90 days</>,
          <>Created comprehensive brand identity including professional photography portfolio, print marketing materials, and digital assets, establishing cohesive visual presence across 5+ marketing channels</>,
          <>Authored detailed business plan and investor presentation materials, successfully securing initial funding and operational partnerships for startup launch</>,
          <>Managed end-to-end customer support operations, maintaining 95% customer satisfaction rating while handling technical troubleshooting and booking modifications</>
        ],
        images: []
      },
      {
        company: "Chicago Bulls College Prep",
        timeframe: "July 2023 – May 2024",
        role: "Physics Professor",
        achievements: [
          <>Transformed underperforming physics program, elevating school ranking from 18th (second-worst) to 3rd place in Noble Schools District standardized physics assessments within single academic year</>,
          <>Instructed 6 advanced physics courses serving 120+ students across Honors and Standard tracks, covering university-level mechanics, thermodynamics, electricity & magnetism, and modern physics concepts</>,
          <>Designed comprehensive curriculum integrating SAT physics preparation strategies, resulting in 25% improvement in student standardized test scores and 90% college acceptance rate</>,
          <>Developed innovative laboratory experiments and project-based assignments connecting theoretical concepts to real-world applications, increasing student engagement scores by 40%</>,
          <>Implemented technology-enhanced learning tools including simulation software and interactive demonstrations, improving conceptual understanding metrics by 35%</>,
          <>Mentored students in advanced STEM pathways, with 85% of students choosing to pursue physics or engineering majors in college</>,
          <>Collaborated with department faculty to establish physics competition team, achieving top-3 regional placement in Illinois High School Physics Tournament</>
        ],
        images: []
      },
      {
        company: "Wildcat Watch",
        timeframe: "August 2019 – July 2022",
        role: "Executive Producer, Live Events Director, Co-Vice President",
        achievements: [
          <>Spearheaded video production operations for Kansas State University's premier media organization, managing $50K+ annual budget and coordinating 15+ student team members across multiple concurrent projects</>,
          <>Directed live broadcast coverage of 25+ major university events annually, including sporting events, graduation ceremonies, and conferences, reaching audiences of 10,000+ viewers per event</>,
          <>Orchestrated multi-camera production workflows utilizing professional equipment including 4K cameras, wireless audio systems, and live streaming technology for real-time distribution across digital platforms</>,
          <>Earned Platinum AVA Digital Award (First Place) for Commercial/Promotional content and Gold Award (Top 3) for Long Form Video Production, representing technical directing excellence</>,
          <>Established comprehensive production standards and training programs, reducing project turnaround time by 30% while maintaining broadcast-quality deliverables</>,
          <>Collaborated with university administration and external clients to develop custom video content, generating $15K+ annual revenue through client services</>,
          <>Implemented advanced lighting design and set construction techniques, elevating production value and securing repeat contracts with local businesses and organizations</>
        ],
        images: []
      },
      {
        company: "Entegrity Energy Partners",
        timeframe: "May - September 2021",
        role: "Energy Engineering Intern",
        achievements: [
          <>Conducted comprehensive investment-grade energy audits for 12+ school districts across Kansas and Missouri, evaluating HVAC systems, lighting infrastructure, and building envelope efficiency using advanced modeling software</>,
          <>Analyzed energy consumption data and calculated potential savings totaling $2.3M annually across audited facilities, presenting findings to district administrators and engineering teams</>,
          <>Developed detailed financial projections and ROI calculations for energy efficiency improvements, contributing to $8M+ in approved ESSER funding allocations</>,
          <>Researched and authored 45-page technical report on Bipolar Ionization technology effectiveness, incorporating literature review, field data analysis, and cost-benefit comparisons for client decision-making</>,
          <>Utilized industry-standard energy modeling tools including EnergyPlus and eQUEST to simulate building performance and validate energy savings projections with 95% accuracy</>,
          <>Collaborated with installation teams to develop implementation schedules and project timelines, ensuring minimal disruption to educational operations during equipment upgrades</>
        ],
        images: []
      },
      {
        company: "Kansas State ELP & U.S. Air Force",
        timeframe: "August 2020 – January 2021",
        role: "Video Producer",
        achievements: [
          <>Executed complete video production pipeline for specialized military training course "English for Aviation Professionals," creating 40+ instructional modules serving international pilot training programs</>,
          <>Coordinated complex filming operations in active aircraft environments, managing safety protocols while capturing high-definition instructional content using specialized aviation-grade equipment</>,
          <>Produced comprehensive educational materials including expert interviews, procedural demonstrations, and simulated emergency scenarios, meeting stringent military content standards and security clearance requirements</>,
          <>Delivered zero-defect final products under accelerated timeline, maintaining 100% adherence to U.S. Air Force content guidelines and Kansas State University academic standards</>,
          <>Collaborated with subject matter experts including certified pilots, air traffic controllers, and language instructors to ensure technical accuracy and educational effectiveness</>,
          <>Implemented advanced video editing techniques including multi-camera synchronization, professional audio mixing, and motion graphics integration to enhance learning engagement</>
        ],
        images: []
      },
      {
        company: "Lopez-Klu Productions",
        timeframe: "August 2021 - Present",
        role: "Video Producer & Founder",
        website: "lopezklu.myportfolio.com",
        achievements: [
          <>Founded independent media production company specializing in affordable, professional video services for local businesses and community organizations, generating $25K+ annual revenue</>,
          <>Delivered end-to-end production services from concept development through final delivery, maintaining 100% client satisfaction rating across 30+ completed projects</>,
          <>Produced diverse content portfolio including corporate promotional videos, documentary-style features, training materials, and narrative short films using professional-grade equipment and software</>,
          <>Established comprehensive workflow systems for client consultation, project management, and delivery, reducing production timelines by 40% while maintaining broadcast quality standards</>,
          <>Developed strategic pricing models making professional video production accessible to small businesses and nonprofits, serving underrepresented market segment</>,
          <>Built sustainable business model through repeat client relationships and referral network, achieving 60% recurring client rate and expanding service offerings based on market demand</>
        ],
        images: []
      }
    ]
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education & Academic Excellence",
    institutions: [
      {
        name: "Kansas State University",
        description: (
          <>
            <strong>Bachelor of Science, Mechanical Engineering</strong> | May 2022 | GPA: 3.3/4.0
            <br /><br />
            <strong>Relevant Coursework:</strong> Intermediate Dynamics, Finite Element Analysis, Composites, Machine Design, Computer Applications in Mechanical Engineering, Engineering Graphics, Additive Manufacturing, Controls of Mechanical Systems
            <br /><br />
            <strong>Key Projects:</strong>
            <br />• Programmable Automatic Dog-Feeder (C++, Arduino) - Designed and programmed automated pet feeding system with scheduling and portion control capabilities
            <br />• 3D-Printed RC-Boat (Python) - Engineered custom remote-controlled watercraft with 3D-printed hull and Python-based control systems
            <br />• Graphene Composite Fabrication and Property Characterization - Advanced materials research project investigating mechanical properties of graphene-enhanced composites
            <br /><br />
            <strong>Honors & Awards:</strong>
            <br />• K-State Launch Entrepreneurship Competition Spring 2021 Champion: SLENT
            <br />• Putman Scholar - Kansas State University's Top Academic Scholarship
            <br />• Hansen Scholar - Dane G. Hansen Foundation Recognition
            <br />• AVA Digital Awards 2021-22: Platinum (First Place) - Commercials/Promotion; Editor
            <br />• AVA Digital Awards 2021-22: Gold (Top 3) - Long Form Video Production; Technical Director
            <br /><br />
            <strong>Leadership & Activities:</strong>
            <br />• Snyder Leadership Legacy Fellow, Kansas State University (2021-2022)
            <br />• Peer Mentor for New Multicultural Undergraduates, Project IMPACT (2021-2022)
            <br />• Music Director & On-Air Host, 91.9 KSDBFM Radio, Manhattan, KS (2018-2020)
            <br />• Member, Alpha Kappa Psi Business Fraternity; Alpha Tau Omega (2018-2022)
            <br />• Youth Sports Coach - Football, Basketball, and Soccer (6 Seasons, 2017-2021)
            <br /><br />
            <strong>International Experience:</strong>
            <br />• Backpacked/Hitchhiked across South America, May – October 2022
          </>
        ),
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
