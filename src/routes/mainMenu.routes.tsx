import AboutUsPage from "../pages/aboutUs/AboutUsPage";
import ContactUsPage from "../pages/contactUs/ContactUsPage";
import HomePage from "../pages/home/HomePage";
import ServicesPage from "../pages/services/ServicesPage";

export const mainMenuPaths = [
  {
    name: "Home",
    path: "/",
    element: <HomePage />,
  },
  {
    name: "Services",
    path: "/services",
    element: <ServicesPage />,
  },
  {
    name: "About Us",
    path: "/about-us",
    element: <AboutUsPage />,
  },
  {
    name: "Contact",
    path: "/contact",
    element: <ContactUsPage />,
  },
];
