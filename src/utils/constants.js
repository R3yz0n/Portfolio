import foodFeature from "../assets/portfolio/foodFeature.png";
import food1 from "../assets/portfolio/food1.png";
import food2 from "../assets/portfolio/food2.png";
import food3 from "../assets/portfolio/food3.png";
import airaFeature from "../assets/portfolio/airaFeature.png";
import aira1 from "../assets/portfolio/aira1.png";
import aira2 from "../assets/portfolio/aira2.png";
import newsFeature from "../assets/portfolio/newsFeature.png";
import news1 from "../assets/portfolio/news1.png";
import news2 from "../assets/portfolio/news2.png";
import news3 from "../assets/portfolio/news3.png";
import tradeFeature from "../assets/portfolio/tradeFeature.png";
import trade1 from "../assets/portfolio/trade1.png";
import trade2 from "../assets/portfolio/trade2.png";
import trade3 from "../assets/portfolio/trade3.png";
import orbitFeature from "../assets/portfolio/orbitFeature.png";
import orbit1 from "../assets/portfolio/orbit1.png";
import orbit2 from "../assets/portfolio/orbit2.png";

export const projectData = [
  {
    id: 1,
    title: "Food Ordering System",
    priority: 3,
    description: `I built a full-stack Food Ordering System that streamlines online food purchases from browsing to checkout and order tracking. The platform supports both customer and admin workflows, combining a responsive user experience with secure backend services and optional blockchain-based testnet payments.

As a customer-facing solution, the application enables user authentication, profile management, category-based menu browsing, search, cart updates, and order placement with real-time status tracking. I focused on creating a smooth and intuitive ordering flow so users can move quickly from discovery to payment while maintaining visibility into current and past orders.

On the administrative side, I implemented a dashboard for managing menu items, users, and order lifecycle updates, along with sales reporting features to support operational decisions. This improved control over day-to-day restaurant workflows by centralizing management actions and reducing manual coordination.

Technically, I developed the frontend with React, Redux Toolkit, Tailwind CSS, and React Router, and built the backend using Node.js, Express, MySQL, and Sequelize ORM. I also integrated JWT-based authentication, file upload support using cloudinary, and an optional Ethereum Sepolia Web3 payment flow to explore modern payment extensions in a production-style architecture.

To explore modern payment architectures, I implemented an optional Web3 payment flow using the Ethereum Sepolia test network with MetaMask wallet integration. Users can connect their wallet, switch to the Sepolia network, and complete payments directly through blockchain transactions. The system validates transaction hashes on the backend before confirming orders, ensuring payment integrity while maintaining a familiar checkout experience. This integration demonstrates my ability to extend traditional web applications with decentralized payment capabilities in a secure and production-oriented manner.`,
    featuredImage: foodFeature,
    site: "https://foodzoone.vercel.app/",
    code: "https://github.com/R3yz0n/Food-Ordering-System",
    images: [food1, food2, food3],
  },
  {
    id: 2,
    title: "Aira Events (Event Management)",
    priority: 1,
    description: `Aira Events is a full-stack event management platform I built to solve real operational needs in event discovery, administration, and booking workflows.

I developed the application using Next.js (App Router), TypeScript, MongoDB, Tailwind CSS, and shadcn/ui, with a strong focus on clean architecture and scalable code practices. The system supports public event browsing alongside a dedicated admin dashboard where organizers can efficiently manage events, categories, and bookings. To keep the codebase maintainable and production-ready, I structured it using a layered architecture that clearly separates domain logic, repositories, services, API routes, and UI hooks.

This separation of concerns makes each layer independently testable, easier to debug, and simpler to extend as new features are introduced. I implemented JWT-based authentication with role-based access control, including a secure read-only guest dashboard mode for safe demos and stakeholder reviews. For reliability and data safety, I integrated Zod schema validation and standardized API response patterns to ensure predictable behavior and consistent error handling across the application.

In addition, I wrote comprehensive README documentation and detailed API documentation covering request/response structures, validation rules, authentication flows, and edge cases for each endpoint. To streamline this process, I leveraged AI-assisted tooling (Copilot-style agent workflows) to help structure the documentation and generate realistic cURL examples for every API route. Each endpoint includes sample success and failure scenarios, authorization edge cases, and example payloads, ensuring that developers can quickly understand, test, and integrate with the system confidently.

Overall, this project demonstrates my ability to design and deliver a production-style, end-to-end application with strong architectural`,
    // template literal/
    featuredImage: airaFeature,
    site: "https://airaevents.vercel.app/",
    code: "https://github.com/R3yz0n/aira",
    images: [aira1, aira2],
  },
  {
    id: 3,
    title: "News Portal",
    priority: 3,
    description: `I built a full-stack News Portal Platform designed to manage and publish digital news content through structured, role-based workflows for superadmins, admins, editors, and users. The platform was architected as a fully dynamic system, beginning at the company level (news portal channel) and extending through categories, articles, advertisements, advertisers, and transaction records. The goal was to support scalable content publishing, structured data management, and a clean reader experience across devices.

On the frontend, I developed a responsive React application styled with Tailwind CSS, using modular and reusable components for landing pages, category-based news listings, authentication flows, and administrative dashboards. I integrated a customized CKEditor setup to support rich-text article creation, media embedding, and enhanced editorial control. The UI architecture was built to dynamically render content based on company configuration, category structures, and active advertisements.

On the backend, I implemented RESTful APIs using Node.js and Express, with Sequelize ORM handling relational database modeling, migrations, and associations for companies (news channels), users, roles, posts, categories, advertisements, advertisers, and transaction details. The system supports multi-tenant-style management where a superadmin can create and manage news portal companies, assign administrators, and control user roles within each organization. JWT-based authentication and role-based authorization middleware enforce secure and structured access control across all workflows.

From a revenue and monetization perspective, I developed a dynamic advertisement management module that allows ads to be placed in seven predefined positions across the platform. Administrators can schedule ads by time range, activate or deactivate placements, associate advertisers, and maintain structured transaction records for payment tracking (data-level management without direct payment gateway integration). This enables transparent ad lifecycle management and revenue monitoring.

Additionally, I integrated Cloudinary for secure image uploads and media optimization, enabling efficient storage and delivery of article images, advertisement banners, and company branding assets. This ensures performance optimization while maintaining scalable media handling across the system.

Overall, this project demonstrates my ability to design a production-style, end-to-end content management ecosystem with multi-role access control, dynamic configuration, monetization workflows, relational data modeling, and scalable frontend-backend integration.`,
    featuredImage: newsFeature,
    site: "https://nepathyamedia.vercel.app/",
    code: "https://github.com/R3yz0n/news-portal-frontend",
    images: [news1, news2, news3],
  },
  {
    id: 4,
    title: "Trade Flux (Using CCIP)",
    priority: 4,
    description: `Built a DeFi trading application that helps users automate crypto trades using price feed throught chainlink oracle. The platform is designed to improve timing during high-volatility conditions and reduce emotion-driven decisions.

The user flow starts with EVM wallet authentication through MetaMask. After login, the system creates a new smart account using Thirdweb account abstraction. The app uses a multi-token keeper architecture powered by a factory contract, where users can deploy their own keeper wallet for strategy execution and asset management.

To create a multi-token keeper, the user must hold at least 3 LINK tokens on the Base Sepolia network (or use a faucet drip to obtain test LINK). Once this requirement is met, a dedicated multi-token keeper account address is created, and users can use that address to hold assets such as BTC, ETH, LINK, and USDT.

The core trading feature allows users to place conditional limit orders using BTC or ETH price action as trigger logic. Since BTC often drives broader altcoin movement (for example, a 10% BTC drop can cause many alts to fall 25–30%), the system enables users to automatically buy alts on BTC drawdowns and act in reverse on upward moves. This provides a structured, rule-based advantage for capturing opportunities across correlated crypto assets.`,
    featuredImage: tradeFeature,
    site: "https://tradeflux.netlify.app/",
    code: "https://github.com/R3yz0n/cross-defi",
    images: [trade1, trade2, trade3],
  },
  {
    id: 5,
    title: "Orbit College CMS",
    priority: 5,
    description: `I developed a College Website Platform with a lightweight CMS system to manage dynamic content such as gallery images and institutional notices. The platform was designed to provide a modern, responsive public-facing website while enabling administrators to update content efficiently without modifying source code.

On the frontend, I built a responsive interface optimized for desktop and mobile users, ensuring smooth navigation across sections such as home, about, academic programs, notices, and gallery. The design focuses on clarity, accessibility, and structured information display to support students, faculty, and visitors.

For content management, I implemented an admin panel secured using Firebase Authentication with email and password login. Authorized administrators can manage the gallery section by uploading and deleting images stored in Firebase Storage. Images are dynamically fetched and rendered on the website, ensuring real-time updates without redeployment.

I also integrated Firestore as a NoSQL database to manage notices displayed on the site. Admin users can create, update, and delete notices, which are instantly reflected on the public interface. Firestore’s real-time capabilities ensure that announcements remain synchronized across sessions.

This project strengthened my experience in integrating Firebase services (Authentication, Firestore, and Storage), building secure admin workflows, and implementing real-time content management features in a scalable and user-friendly web application.`,
    featuredImage: orbitFeature,
    site: "https://www.orbitcollegechitwan.com/",
    images: [orbit1, orbit2],
  },
];
// Returns a new array sorted by priority (1 first)
export function getProjectData() {
  return [...projectData].sort((a, b) => a.priority - b.priority);
}
