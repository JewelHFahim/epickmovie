import Header from "./Header";
import MobileMenuButton from "../../utils/MobileMenuButton";
import MobileMenu from "../../components/menus/MobileMenu";
import { useLocation } from "react-router-dom";
import Nav from "./nav/Nav";
import { genreList } from "../../utils/menu-list/menu-list";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className=" lg:h-[184px] bg-[#27272A] mx-2">

      <Header />

      <div className="lg:hidden">
        <MobileMenu />
      </div>


      {/* =====>> Only For Mobile Device <<===== */}
      {currentPath === "/" && (
        <div className="w-[95%] h-[100%] border border-black mx-auto mt-[34px] p-2 lg:hidden mb-[30px]">
          <div className="grid grid-cols-5 gap-2">
            {genreList.map((movie, i) => (
              <MobileMenuButton key={i}>{movie.title}</MobileMenuButton>
            ))}
          </div>
        </div>
      )}

      <div className="hidden lg:block">
        <Nav />
      </div>


    </div>
  );
};

export default Navbar;
