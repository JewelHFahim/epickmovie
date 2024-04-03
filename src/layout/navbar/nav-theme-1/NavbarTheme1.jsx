import { Link } from "react-router-dom";
import { useSiteConfig } from "../../../utils/configHooks/ConfigHooks";
import { IoSearch } from "react-icons/io5";

const NavbarTheme1 = () => {
  const { siteLogo } = useSiteConfig();

  const menus = [
    { title: "Home", url: "" },
    { title: "Movies", url: "" },
    { title: "Web-Series", url: "" },
    { title: "Genres", url: "" },
    { title: "Hollywood", url: "" },
    { title: "Bollywood", url: "" },
    { title: "Join Telegram", url: "" },
  ];

  return (
    <div className="w-full h-[70px] bg-[#262626] flex items-center">
      <div className="lg:w-[78vw] lg:min-w-[1500px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-x-5">
          <img src={siteLogo} alt="site-logo" className="w-[190px] h-[31px]" />
          <ul className="font-lilita text-[22px] text-white ">
            <li className="flex items-center gap-x-5">
              {menus.map((item, i) => (
                <Link key={i} to="">
                  {item.title}
                </Link>
              ))}
            </li>
          </ul>
        </div>

        <div className="w-[332px] h-[26px] rounded-md flex items-center bg-[#444444]">
          <input
            type="text"
            className="w-[90%] focus:outline-none bg-transparent px-4 text-slate-200 text-sm font-semibold"
          />
          <IoSearch className="10% text-[#d73ee3]" />
        </div>
      </div>
    </div>
  );
};

export default NavbarTheme1;
