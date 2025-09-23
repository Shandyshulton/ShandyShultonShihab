import portfolio1 from "../assets/RentalPS/PS(1).jpg";
import portfolio2 from "../assets/EcoCraft/Eco1.jpg";
import portfolio3 from "../assets/Lifebalance/Home(1).png";
import portfolio4 from "../assets/vkellogs/header.png";

export const portfolioList = [
  {
    id: "1",
    title: "PlayStation Rental Management System",
    category: "Fullstack",
    status: "completed",
    image: portfolio1,
    description:
      "A web-based system to manage PlayStation rentals, covering customer reservations, console inventory, and real-time transaction tracking.",
    features: [
      "Comprehensive admin panel",
      "Secure payment gateway",
      "Responsive design for mobile & desktop",
    ],
    tech: ["Laravel", "MySQL", "Bootstrap", "PHP", "HTML"],
    repo: "https://github.com/Shandyshulton/Sistem-Manajemen-Rental-PS",
    // demo: "../pages/PageNotFound.jsx",
  },
  {
    id: "2",
    title: "Eco Craft",
    category: "Fullstack",
    status: "not-completed",
    image: portfolio2,
    description:
      "EcoCraft is a Laravel 9 e-commerce web app that connects local craft sellers to buyers. It includes multi-role authentication (Admin, Seller, Customer), seller KTP verification, product management with image galleries, an admin approval workflow for stores and listings, and shopping features like cart, checkout, and order tracking—backed by MySQL and role-based access control.",
    features: [
      "Multi-guard auth + role-based access",
      "Seller KTP verification & admin approvals",
      "Product CRUD with image galleries, cart, checkout, order tracking",
    ],
    tech: ["Laravel", "MySQL", "Bootstrap", "PHP", "HTML"],
    repo: "https://github.com/Shandyshulton/WebECommerce-EcoCraft",
    // demo: "../pages/PageNotFound.jsx",
  },
  {
    id: "3",
    title: "Lifebalance Apps",
    category: "UI/UX",
    status: "completed",
    image: portfolio3,
    description:
      "LifeBalance is a Figma-designed healthy-lifestyle app that personalizes meal recommendations, calorie tracking, and workout programs. The design covers onboarding, daily input flows, a balanced schedule, activity tracking with reminders, sleep insights, and educational articles—built as a responsive, systematized UI with components, variants, and motion specs for handoff.",
    features: [
      "Personalized meals & calorie tracking",
      "Adaptive workout plans",
      "Daily logs & balanced schedule",
      "Activity tracking with reminders",
      "Sleep insights",
      "To-do & habit checklist + articles",
    ],
    tech: ["Figma"],
    // repo: "../pages/PageNotFound.jsx",
    demo: "https://www.figma.com/design/CrzhONDV1UUwIEdAEHiVxJ/LifebalanceApps?node-id=0-1&t=wLv8cJbOX8ltDfLf-1",
  },
  {
    id: "4",
    title: "VKellog's",
    category: "Frontend",
    status: "completed",
    image: portfolio4,
    description:
      "VKelloggs is a responsive multi-page static website that highlights nutritious whole-grain products, creative recipes, and healthy eating ideas for families.",
    features: ["A homepage with a slideshow and featured products", "An About Us page highlighting the company’s history and team", "A product page with menu listings and ratings", "A contact form for receiving visitor messages"],
    tech: ["HTML5", "CSS3", "JavaScript"],
    repo: "https://github.com/Shandyshulton/vkellogs",
    demo: "https://www.figma.com/design/zCorNSxoRGeBQcLceRJ1p2/Shandy-Shulton-Shihab_2702362320_HCI?node-id=0-1&t=zMbRM2Od77Cr77E7-1",
  },
];
