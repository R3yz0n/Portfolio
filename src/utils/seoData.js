// SEO data configuration for the portfolio website
export const seoData = {
  // Basic site information
  siteName: "Sagar Thapa Chhetri - Portfolio",
  siteUrl: "https://www.sagarthapachhetri.com.np",
  defaultTitle: "Sagar Thapa Chhetri - Full Stack Developer & UI/UX Designer",
  defaultDescription: "Portfolio of Sagar Thapa Chhetri (Reyzon) - Experienced Full Stack Developer specializing in React, Node.js, Firebase, and modern web technologies. View my projects, skills, and contact me for collaboration opportunities.",
  defaultKeywords: "Sagar Thapa Chhetri, Reyzon, Full Stack Developer, React Developer, UI/UX Designer, JavaScript, Node.js, Firebase, Portfolio, Web Developer Nepal, Frontend Developer, Backend Developer",
  
  // Social media and branding
  author: "Sagar Thapa Chhetri",
  authorAlias: "Reyzon",
  profileImage: "/static/media/reyzon.fe12d3d0333959e2a346.jpg",
  
  // Contact and social links
  email: "sagarthapachhetri@gmail.com",
  socialProfiles: {
    linkedin: "https://linkedin.com/in/sagar-thapa-chhetri",
    github: "https://github.com/reyzonchhetri",
    twitter: "https://twitter.com/reyzonchhetri",
    instagram: "https://instagram.com/reyzonchhetri"
  },
  
  // Technical skills and specializations
  skills: [
    "React", "JavaScript", "Node.js", "Firebase", "MongoDB", 
    "Express.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3", 
    "Redux", "Git", "Figma", "UI/UX Design", "Responsive Design"
  ],
  
  // Location and availability
  location: "Nepal",
  availableForWork: true,
  
  // Structured data for rich snippets
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sagar Thapa Chhetri",
    "alternateName": "Reyzon",
    "jobTitle": "Full Stack Developer",
    "description": "Experienced Full Stack Developer specializing in React, Node.js, and modern web technologies",
    "url": "https://www.sagarthapachhetri.com.np",
    "image": "https://www.sagarthapachhetri.com.np/static/media/reyzon.fe12d3d0333959e2a346.jpg",
    "email": "sagarthapachhetri@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Nepal"
    },
    "sameAs": [
      "https://linkedin.com/in/sagar-thapa-chhetri",
      "https://github.com/reyzonchhetri",
      "https://twitter.com/reyzonchhetri"
    ],
    "knowsAbout": [
      "React", "JavaScript", "Node.js", "Firebase", "MongoDB",
      "Express.js", "Tailwind CSS", "UI/UX Design", "Web Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Developer",
      "occupationLocation": {
        "@type": "Country",
        "name": "Nepal"
      },
      "skills": "React, JavaScript, Node.js, Firebase, MongoDB, Express.js, UI/UX Design"
    }
  }
};

// Page-specific SEO configurations
export const pagesSEO = {
  home: {
    title: "Sagar Thapa Chhetri - Full Stack Developer Portfolio",
    description: "Welcome to my portfolio! I'm Sagar Thapa Chhetri, a passionate Full Stack Developer with 2+ years of experience in React, Node.js, and modern web technologies. Explore my projects and get in touch!",
    keywords: "Sagar Thapa Chhetri, Reyzon, Portfolio, Full Stack Developer, React Developer, Web Developer Nepal, JavaScript Expert",
    path: "/"
  },
  about: {
    title: "About Me - Sagar Thapa Chhetri | Full Stack Developer",
    description: "Learn more about Sagar Thapa Chhetri (Reyzon) - my journey as a Full Stack Developer, skills, experience, and passion for creating amazing web applications.",
    keywords: "About Sagar Thapa Chhetri, Developer Experience, Skills, Background, Full Stack Developer Nepal",
    path: "/#about"
  },
  portfolio: {
    title: "My Projects - Sagar Thapa Chhetri | Web Development Portfolio",
    description: "Explore my web development projects including React applications, full-stack solutions, and UI/UX designs. See my technical expertise in action.",
    keywords: "Projects, Portfolio, React Projects, Web Development, JavaScript Applications, Full Stack Projects",
    path: "/#portfolio"
  },
  experience: {
    title: "Experience & Skills - Sagar Thapa Chhetri | Professional Journey",
    description: "Discover my professional experience, technical skills, and expertise in React, Node.js, Firebase, and modern web development technologies.",
    keywords: "Experience, Skills, React, Node.js, Firebase, JavaScript, Web Development Skills, Technical Expertise",
    path: "/#experience"
  },
  contact: {
    title: "Contact Me - Sagar Thapa Chhetri | Let's Work Together",
    description: "Get in touch with Sagar Thapa Chhetri for web development projects, collaborations, or job opportunities. Available for freelance and full-time positions.",
    keywords: "Contact, Hire Developer, Web Development Services, Collaboration, Freelance Developer Nepal",
    path: "/#contact"
  },
  dashboard: {
    title: "Dashboard - Sagar Thapa Chhetri | Project Management",
    description: "Admin dashboard for managing portfolio projects and content.",
    keywords: "Dashboard, Admin, Project Management",
    path: "/dashboard"
  }
};
