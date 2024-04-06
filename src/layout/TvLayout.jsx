import { Outlet } from "react-router-dom";
import NavbarTv from "./navbar/navbar-tv/NavbarTv";
import FooterTheme1 from "./footers/FooterTheme1";

const TvLayout = () => {
  return (
    <div className="bg-[#2C2B2B]">
      <NavbarTv />
      <div className="lg:w-[1300px] mx-auto">
        <Outlet />
      </div>
      <FooterTheme1 />
    </div>
  );
};

export default TvLayout;
