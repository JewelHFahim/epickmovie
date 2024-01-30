import Header from "./Header";
import MobileMenuButton from "../../utils/MobileMenuButton";
import MobileMenu from "../../components/menus/MobileMenu";
import { Link, useLocation } from "react-router-dom";
import Nav from "./nav/Nav";
import { useDispatch } from "react-redux";
import { collectFilteredItem } from "../../redux/features/search/searchSlice";
import { useQuickMenuUserQuery } from "../../redux/features/settings/settingApi";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const dispatch = useDispatch();
  const { data: quickMenu } = useQuickMenuUserQuery();

  const handleQuickMenuNavigation = (data) => {
    dispatch(collectFilteredItem(data));
  };

  return (
    <div className="lg:h-[184px] bg-[#27272A]">
      <Header />

      <div className="lg:hidden">
        <MobileMenu />
      </div>

      {/* =====>>Quick Menu Only For Mobile Device <<===== */}
      {currentPath === "/" && (
        <div className="w-[94%] h-[100%] mx-auto mt-[20px] p-4 lg:hidden border-[3px] border-black">
          <div className="grid grid-cols-4 gap-5">
            {quickMenu?.data?.map((menu, i) => (
              <Link key={i} to="/filter-list" onClick={() => handleQuickMenuNavigation(menu?.slug)}>
                <MobileMenuButton key={i}>{menu.name}</MobileMenuButton>
              </Link>
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
