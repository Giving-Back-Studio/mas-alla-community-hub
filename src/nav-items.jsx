import { HomeIcon, InfoIcon, UsersIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import GetInvolved from "./pages/GetInvolved.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Get Involved",
    to: "/get-involved",
    icon: <UsersIcon className="h-4 w-4" />,
    page: <GetInvolved />,
  },
];
