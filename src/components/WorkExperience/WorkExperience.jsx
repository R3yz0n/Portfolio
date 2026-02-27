import { Link } from "react-router-dom";

const experiences = [
  {
    company: "Nepsky Technology Prev.(Bootwal R&D)",
    role: "FullStack Developer",
    period: "Feb 2023 ---- Jan 2024",
    description: `🔹 Frontend Development

• Built responsive and scalable UI using React.js and Tailwind CSS following modern best practices.
• Implemented global state management using Redux for predictable application flow.
• Developed reusable components and optimized rendering performance.
• Integrated REST APIs and handled authentication & protected routes.
• Worked as a Web3 frontend freelancer, building dApp interfaces and integrating smart contracts using modern Web3 libraries.

🔹 Backend Development

• Designed and developed RESTful APIs using Node.js and Express.js.
• Managed relational data using MySQL with Sequelize ORM.
• Implemented authentication, role-based access control, and input validation.
• Structured scalable backend architecture with proper error handling and middleware patterns.
• Deployed and managed backend services on VPS servers, handling production builds, environment configuration, and process management.
`,
    tech: ["React", "Tailwind CSS", "Nodejs", "Mysql"],
    siteLinkL: "https://nepsky.tech/",
    linkedIn: "https://www.linkedin.com/company/nepsky-technology-pvt-ltd/",
    info: "Involved in building managment system College MS and News Portal and as a Web3 frontend freelancer, building dApp interfaces and integrating smart contracts using modern Web3 libraries.",
  },

  {
    company: "Beyond Labs",
    role: "FullStack Developer",
    period: "March 2024 ---- Jan 2025",
    info: "Involved in building MVP for BeyondAI, a DeFi Copilot that replaces smart contract using prompt engineering and LLMs, and building serverless microservices using AWS Lambda.",

    description: `🔹 Frontend Development
• Developed frontend using Next.js and Next APIs.
• Used AI agent with to convert figma design into modern frontend components.
• Worked within a unified monorepo containing BeyondAI Docs, shared APIs, and frontend applications.
• Worked with frontend libraries such as wagmi, etherjs and many web3 development practices.


🔹 Serverless & Microservices
• Built serverless microservices using AWS Lambda.
• Followed TDD workflow across authentication, wallet, and Telegram services.
• Wrote Test Cases for all services and integrated with CI/CD pipelines.
• Developed DeFi Copilot using LLM integrations (OpenAI, Grok-3).
• Implemented rule-based instruction systems for blockchain interaction.
• Integrated EVM smart contracts across Polygon and Base networks.
`,
    tech: [
      "Serverless lamda",
      "PSQL",
      "Soft TDDD",
      "Next Js",
      "CI/CD",
      "Lamda microservices",
      "web3 frontend",
      "Evm smart contract integration (polygon, base)",
    ],
    siteLinkL: "https://www.beyondos.xyz/",
    linkedIn: "https://www.linkedin.com/company/bullieverse-inc/about/",
  },
];

export const WorkExperience = () => {
  return (
    <div className="bg-gradient-to-b pb-20 from-[rgb(27,33,41)]  to-[rgb(27,33,41)] w-full min-h-screen overflow-hidden pt-10 flex flex-col items-center">
      <div className="sm:w-full  p-1 md:px-4 xl:w-[85%]  xl:px-0 flex flex-col justify-center w-full h-full text-white mx-auto">
        <h2 id="experience" className="text-3xl px-3 md:px-1 font-bold text-white mb-8">
          Work Experience
        </h2>
        <div className="w-full  space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg shadow-lg p-3 flex flex-col md:flex-row md:items-center md:justify-between hover:scale-[1.02] transition-transform"
            >
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#00e6e6]">{exp.role}</h3>

                <p className="text-lg text-white">{exp.company}</p>
                <p className="text-gray-300 text-sm text-justify">{exp.info}</p>
                <p className="text-sm  text-gray-400 mb-2 flex items-center gap-2">
                  {exp.period}
                  <Link
                    className="ml-8 text-blue-400 underline -mt-1"
                    to={exp.siteLinkL}
                    target="_blank"
                  >
                    Site
                  </Link>
                  <Link
                    className="ml-2 text-blue-400 underline -mt-1"
                    to={exp.linkedIn}
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </p>
                <p className="text-gray-200 mb-2 whitespace-pre-line text-sm md:text-[15px]">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#00e6e6]/10 text-[#00e6e6] px-1 md:px-2 py-0.5 md:py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
