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
    description: `This is a typical food ordering system which includes the features
     like menu management, and placing items on the cart, also the order placing system. It also offers user profile feature. On the dashboard A general overview of data based on field are graphical display. And CRUD operation has been done on other modules.`,
    featuredImage: foodFeature,
    site: "https://foodzoone.vercel.app/",
    code: "https://github.com/R3yz0n/Food-Ordering-System",
    images: [food1, food2, food3],
  },
  {
    id: 2,
    title: "Aira Events (Event Management)",
    priority: 1,
    description:
      "This is a typical food ordering system hich includes the features like menu management, hich includes the features like menu management, and placing items on the carhich includes the features like menu management, and placing items on the car and placing items on the carhich includes the features like menu management, and placing items on the car  which includes the features like menu management, and placing items on the cart, also the order placing system. It also offers user profile feature. On the dashboard A general overview of data basend of field are graphfical display. And CRUD operation has been done on other modules.",
    featuredImage: airaFeature,
    site: "https://airaevents.vercel.app/",
    code: "https://github.com/R3yz0n/aira",
    images: [aira1, aira2],
  },
  {
    id: 3,
    title: "News Portal",
    priority: 3,
    description:
      "This is a typical food ordering system hich includes the features like menu management, hich includes the features like menu management, and placing items on the carhich includes the features like menu management, and placing items on the car and placing items on the carhich includes the features like menu management, and placing items on the car  which includes the features like menu management, and placing items on the cart, also the order placing system. It also offers user profile feature. On the dashboard A general overview of data basend of field are graphfical display. And CRUD operation has been done on other modules.",
    featuredImage: newsFeature,
    site: "https://nepathyamedia.vercel.app/",
    code: "https://github.com/R3yz0n/news-portal-frontend",
    images: [news1, news2, news3],
  },
  {
    id: 4,
    title: "Trade Flux (Using CCIP)",
    priority: 4,
    description:
      "This is a typical food ordering system hich includes the features like menu management, hich includes the features like menu management, and placing items on the carhich includes the features like menu management, and placing items on the car and placing items on the carhich includes the features like menu management, and placing items on the car  which includes the features like menu management, and placing items on the cart, also the order placing system. It also offers user profile feature. On the dashboard A general overview of data basend of field are graphfical display. And CRUD operation has been done on other modules.",
    featuredImage: tradeFeature,
    site: "https://tradeflux.netlify.app/",
    code: "https://github.com/R3yz0n/cross-defi",
    images: [trade1, trade2, trade3],
  },
  {
    id: 5,
    title: "Orbit College CMS",
    priority: 5,
    description:
      "This is a typical food ordering system hich includes the features like menu management, hich includes the features like menu management, and placing items on the carhich includes the features like menu management, and placing items on the car and placing items on the carhich includes the features like menu management, and placing items on the car  which includes the features like menu management, and placing items on the cart, also the order placing system. It also offers user profile feature. On the dashboard A general overview of data basend of field are graphfical display. And CRUD operation has been done on other modules.",
    featuredImage: orbitFeature,
    site: "https://www.orbitcollegechitwan.com/",
    images: [orbit1, orbit2],
  },
];
// Returns a new array sorted by priority (1 first)
export function getProjectData() {
  return [...projectData].sort((a, b) => a.priority - b.priority);
}
