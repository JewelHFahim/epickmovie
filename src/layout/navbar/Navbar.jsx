import Header from "./Header";
import MobileMenuButton from "../../utils/MobileMenuButton";
import MobileMenu from "../../components/menus/MobileMenu";
import { Link, useLocation } from "react-router-dom";
import Nav from "./nav/Nav";
import { useQuickMenuUserQuery } from "../../redux/features/settings/settingApi";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { data: quickMenu } = useQuickMenuUserQuery();

  return (
    <div className="lg:h-[184px] bg-[#27272A]">
      <Header/>

      <div className="lg:hidden">
        <MobileMenu />
      </div>

      {/* =====>> Quick Menu Only For Mobile Device <<===== */}
      {currentPath === "/" && (
        <div className="w-[94%] h-[100%] mx-auto mt-[20px] p-4 lg:hidden border-[3px] border-slate-700">
          <div className="flex-wrap flex gap-5">
            {quickMenu?.data?.map((menu, i) => (
              <Link key={i} to={`/terms/${menu?.slug}`}  >
                <MobileMenuButton key={i}>{menu.name}</MobileMenuButton>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="hidden lg:block">
        <Nav/>
      </div>
    </div>
  );
};

export default Navbar;
