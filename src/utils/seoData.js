// SEO data configuration for the portfolio website
export const seoData = {
  // Basic site information
  siteName: "Sagar Thapa Chhetri - Portfolio",
  siteUrl: "https://www.sagarthapachhetri.com.np",
  defaultTitle:
    "Sagar Thapa Chhetri (Reyzon) - MERN Stack Developer & Web3 Frontend Specialist | Nepathya College",
  defaultDescription:
    "Portfolio of Sagar Thapa Chhetri (Reyzon/Rejan/R3yz0n) - Experienced MERN Stack Developer and Web3 Frontend Developer from Nepathya College. Football enthusiast and Full Stack Developer specializing in React, Node.js, Firebase, and modern web technologies.",
  defaultKeywords:
    "Sagar Thapa Chhetri, Sagar Thapa, Sagar, Sagar Chhetri, Reyzon, Rejan, R3yz0n, Rezan, Nepathya College, MERN Stack, Frontend Developer, Web3 Frontend, Sagar Footballer, Footballer, Full Stack Developer, React Developer, UI/UX Designer, JavaScript, Node.js, Firebase, Portfolio, Web Developer Nepal",

  // Social media and branding
  author: "Sagar Thapa Chhetri",
  authorAlias: "Reyzon",
  alternateNames: ["Sagar Thapa", "Sagar", "Sagar Chhetri", "Reyzon", "Rejan", "R3yz0n", "Rezan"],
  education: "Nepathya College",
  specialties: ["MERN Stack Developer", "Web3 Frontend Developer", "Frontend Developer"],
  interests: ["Football", "Web Development", "Technology"],
  profileImage: "/static/media/reyzon.fe12d3d0333959e2a346.jpg",

  // Contact and social links
  email: "sagarthapachhetri@gmail.com",
  socialProfiles: {
    linkedin: "https://linkedin.com/in/sagar-thapa-chhetri",
    github: "https://github.com/reyzonchhetri",
    twitter: "https://twitter.com/reyzonchhetri",
    instagram: "https://instagram.com/reyzonchhetri",
  },

  // Technical skills and specializations
  skills: [
    "MERN Stack",
    "React",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Web3 Frontend",
    "Frontend Development",
    "Firebase",
    "Tailwind CSS",
    "Bootstrap",
    "HTML5",
    "CSS3",
    "Redux",
    "Git",
    "Figma",
    "UI/UX Design",
    "Responsive Design",
  ],

  // Location and availability
  location: "Nepal",
  availableForWork: true,

  // Structured data for rich snippets
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sagar Thapa Chhetri",
    alternateName: ["Reyzon", "Rejan", "R3yz0n", "Rezan", "Sagar Thapa", "Sagar", "Sagar Chhetri"],
    jobTitle: "MERN Stack Developer & Web3 Frontend Specialist",
    description:
      "Experienced MERN Stack Developer and Web3 Frontend Developer from Nepathya College. Football enthusiast specializing in React, Node.js, and modern web technologies",
    url: "https://www.sagarthapachhetri.com.np",
    image: "https://www.sagarthapachhetri.com.np/static/media/reyzon.fe12d3d0333959e2a346.jpg",
    email: "sagarthapachhetri@gmail.com",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Nepathya College",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "Nepal",
    },
    sameAs: [
      "https://linkedin.com/in/sagar-thapa-chhetri",
      "https://github.com/reyzonchhetri",
      "https://twitter.com/reyzonchhetri",
    ],

    hasOccupation: {
      "@type": "Occupation",
      name: "MERN Stack Developer",
      occupationLocation: {
        "@type": "Country",
        name: "Nepal",
      },
      skills:
        "MERN Stack, React, JavaScript, Node.js, MongoDB, Express.js, Web3 Frontend, UI/UX Design",
    },
    interestIn: ["Football", "Web Development", "Technology", "Web3"],
    knowsLanguage: ["English", "Nepali"],
  },
};

// Page-specific SEO configurations
export const pagesSEO = {
  home: {
    title: "Sagar Thapa Chhetri (Reyzon) - MERN Stack Developer | Nepathya College Graduate",
    description:
      "Welcome to my portfolio! I'm Sagar Thapa Chhetri (Reyzon/Rejan/R3yz0n), a passionate MERN Stack and Web3 Frontend Developer from Nepathya College. Football enthusiast with 2+ years of experience in React, Node.js, and modern web technologies.",
    keywords:
      "Sagar Thapa Chhetri, Sagar Thapa, Sagar, Sagar Chhetri, Reyzon, Rejan, R3yz0n, Rezan, Nepathya College, MERN Stack, Frontend Developer, Web3 Frontend, Sagar Footballer, Footballer, Portfolio, React Developer, Web Developer Nepal",
    path: "/",
  },

  portfolio: {
    title: "Projects by Sagar Thapa Chhetri | MERN Stack & Web3 Frontend Portfolio",
    description:
      "Explore MERN Stack and Web3 Frontend projects by Sagar Thapa Chhetri (Reyzon). React applications, full-stack solutions, and modern web development projects.",
    keywords:
      "Sagar Thapa Projects, Reyzon Portfolio, MERN Stack Projects, Web3 Frontend, React Projects, Web Development, JavaScript Applications",
    path: "/#portfolio",
  },
  experience: {
    title: "Skills & Experience - Sagar Thapa Chhetri | MERN Stack Expertise",
    description:
      "Professional experience and technical skills of Sagar Thapa Chhetri (Reyzon) - MERN Stack Developer, Web3 Frontend specialist from Nepathya College.",
    keywords:
      "Sagar Thapa Experience, Reyzon Skills, MERN Stack, Web3 Frontend, React, Node.js, MongoDB, Express.js, JavaScript, Nepathya College",
    path: "/#experience",
  },
  contact: {
    title: "Contact Sagar Thapa Chhetri (Reyzon) | MERN Stack Developer for Hire",
    description:
      "Get in touch with Sagar Thapa Chhetri (Reyzon) for MERN Stack development, Web3 Frontend projects, or collaborations. Nepathya College graduate available for freelance work.",
    keywords:
      "Contact Sagar Thapa, Hire Reyzon, MERN Stack Developer, Web3 Frontend, Nepathya College, Freelance Developer Nepal, Web Development Services",
    path: "/#contact",
  },
};
