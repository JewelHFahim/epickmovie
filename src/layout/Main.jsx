import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import NavbarTheme1 from "./navbar/nav-theme-1/NavbarTheme1";
import NavbarTheme2 from "./navbar/nav-theme-2/NavbarTheme2";
import FooterTheme1 from "./footers/FooterTheme1";
import MobileMenuTheme1 from "../components/menus/MobileMenuTheme1";
import NavbarTheme3 from "./navbar/nav-theme-3/navbarTheme3";
import SideContentTheme3 from "../components/theme3-contents/side-content/SideContentTheme3";
import MobileMenuTheme3 from "../components/menus/MobileMenuTheme3";
import { themeValue } from "../config/config";

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
        <MobileMenuTheme3 />
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
    theme3: "lg:w-[1200px] flex flex-col lg:flex-row gap-y-5 bg-black bg-opacity-[10%]",
    default: "lg:w-[61vw] lg:min-w-[1170px]",
  };

  return (
    <>
      <div>
        {navbars[themeValue] || navbars.default}

        <div className={`w-full ${ containerWidth[themeValue] || containerWidth.default} mx-auto overflow-hidden`}>
          <Outlet />

          {themeValue === "theme3" && (
            <div className="lg:w-[350px] h-full p-4 border-l border-slate-800 ">
              <SideContentTheme3 />
            </div>
          )}
        </div>
      </div>

      {footers[themeValue] || footers.default}
    </>
  );
};

export default Main;
