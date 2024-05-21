import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import NavbarTheme1 from "./navbar/nav-theme-1/NavbarTheme1";
import NavbarTheme2 from "./navbar/nav-theme-2/NavbarTheme2";
import FooterTheme1 from "./footers/FooterTheme1";
import MobileMenuTheme1 from "../components/menus/MobileMenuTheme1";
import { theme } from "../config/config";
import NavbarTheme3 from "./navbar/nav-theme-3/navbarTheme3";

const Main = () => {
  // Define theme-based components
  const navbars = {
    theme1: (
      <>
        <NavbarTheme1 />
        <MobileMenuTheme1 />
      </>
    ),
    theme2: (
      <>
        <NavbarTheme2 />
        <MobileMenuTheme1 />
      </>
    ),
    theme3: (
      <>
        <NavbarTheme3 />
        <MobileMenuTheme1 />
      </>
    ),
    default: (
      <div className="lg:w-[61vw] lg:min-w-[1170px] mx-auto">
        <Navbar />
      </div>
    ),
  };

  const footers = {
    theme1: <FooterTheme1 />,
    theme2: <FooterTheme1 />,
    default: <Footer />,
  };

  // Define the container width based on theme
  const containerWidth = {
    theme1: "lg:w-[78vw] lg:min-w-[1500px]",
    theme2: "lg:w-[1200px]",
    theme3: "lg:w-[1200px]",
    default: "lg:w-[61vw] lg:min-w-[1170px]",
  };

  return (
    <>
      <div>
        {navbars[theme] || navbars.default}

        <div
          className={`w-full ${
            containerWidth[theme] || containerWidth.default
          } mx-auto overflow-hidden`}
        >
          <Outlet />
        </div>
      </div>

      {footers[theme] || footers.default}
    </>
  );
};

export default Main;
