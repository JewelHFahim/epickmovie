import { Outlet } from "react-router-dom";
import NavbarTv from "./navbar/navbar-tv/NavbarTv";
import FooterTheme1 from "./footers/FooterTheme1";
import TvMobileMenu from "../components/tv-channels/tv-mobile-menu/TvMobileMenu";

const TvLayout = () => {
  return (
    <div className="bg-[#2C2B2B]">
      
      <div className="hidden lg:block">
        <NavbarTv />
      </div>

      <div className="block lg:hidden">
        <TvMobileMenu />
      </div>

      <div className="lg:w-[1300px] mx-auto">
        <Outlet />
      </div>

      <FooterTheme1 />
    </div>
  );
};

export default TvLayout;
