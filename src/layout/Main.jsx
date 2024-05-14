import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import NavbarTheme1 from "./navbar/nav-theme-1/NavbarTheme1";
import { theme } from "../config/config";
import FooterTheme1 from "./footers/FooterTheme1";
import MobileMenuTheme1 from "../components/menus/MobileMenuTheme1";
import NavbarTheme2 from "./navbar/nav-theme-2/NavbarTheme2";

const Main = () => {
  return (
    <>
      <div>
        {theme === "theme1" ? (
          <>
            <NavbarTheme1 />
            <MobileMenuTheme1 />
          </>
        ) : theme === "theme2" ? (
          <>
            <NavbarTheme2 />
          </>
        ) : (
          <div className="lg:w-[61vw] lg:min-w-[1170px] mx-auto">
            <Navbar />
          </div>
        )}

        <div
          className={`w-full ${
            theme === "theme1"
              ? "lg:w-[78vw] lg:min-w-[1500px]"
              : theme === "theme2"
              ? "lg:w-[1200px]"
              : "lg:w-[61vw] lg:min-w-[1170px]"
          } mx-auto overflow-hidden`}
        >
          <Outlet />
        </div>
      </div>

      {theme === "theme1" ? (
        <FooterTheme1 />
      ) : theme === "theme2" ? (
        <FooterTheme1 />
      ) : (
        <Footer />
      )}
    </>
  );
};

export default Main;
