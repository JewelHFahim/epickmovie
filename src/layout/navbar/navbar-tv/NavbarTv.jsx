import "./NavbarTv.css";
import { GrChannel } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { RiHome4Line } from "react-icons/ri";
import { FaRegNewspaper } from "react-icons/fa";
import { PiMonitorPlayLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { MdOutlineSportsCricket } from "react-icons/md";
import { useSiteConfig } from "../../../utils/configHooks/ConfigHooks";
import { useGenreListQuery } from "../../../redux/features/movies/movieApi";

const NavbarTv = () => {
  const { siteLogo } = useSiteConfig();
  const { data: genreList } = useGenreListQuery();

  const menus = [
    { title: "Home", url: "/tv", icon: <RiHome4Line />, isDrapdown: false },
    {
      title: "Sports",
      url: "/tv/sports",
      icon: <MdOutlineSportsCricket />,
      isDrapdown: false,
    },
    {
      title: "News",
      url: "/tv/news",
      icon: <FaRegNewspaper />,
      isDrapdown: false,
    },
    {
      title: "Entertainment",
      url: "/tv/entertainment",
      icon: <PiMonitorPlayLight />,
      isDrapdown: false,
    },
    {
      title: "All Tv",
      url: "/tv/all-tvs",
      icon: <GrChannel />,
      isDrapdown: false,
      subMenu: genreList?.data,
    },
  ];

  return (
    <div className="w-full h-[70px] bg-[#282727] flex items-center">
      <div className="lg:w-[78vw] lg:min-w-[1500px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-x-5 ">
          <Link to="/">
            <img src={siteLogo} alt="site-logo" className="w-[190px] h-[31px]"/>
          </Link>

          <ul className="font-lilita text-[22px] text-white flex items-center gap-x-5 menus ">
            {menus.map((item, i) => (
              <li key={i} className="relative">
                <Link to={item.url} target={`${item.newTab ? "_blank" : ""}`} className="flex items-center gap-1">
                  {item.icon}
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Serach Field */}
        <form className="w-[332px] py-2 rounded-md flex items-center bg-[#444444]">
          <input type="text" placeholder="Search Tv Channel" className="w-[90%] focus:outline-none bg-transparent px-4 text-slate-200 text-sm font-semibold"/>
          <IoSearch className="10% text-[#d73ee3]" />
        </form>
      </div>
    </div>
  );
};

export default NavbarTv;
