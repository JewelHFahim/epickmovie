import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { FaRegNewspaper, FaTelegram } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineSportsCricket } from "react-icons/md";
import { RiHome4Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSiteConfig } from "../../../utils/configHooks/ConfigHooks";
import { FaFacebookSquare } from "react-icons/fa";
import { PiMonitorPlayLight } from "react-icons/pi";
import { GrChannel } from "react-icons/gr";

const TvMobileMenu = () => {
  const route = useLocation();
  const { telegramLink, siteLogo } = useSiteConfig();
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Home", path: "/tv", isDrapdown: false, icon: <RiHome4Line /> },

    {
      title: "Sports",
      path: "/tv/sports",
      isDrapdown: false,
      icon: <MdOutlineSportsCricket />,
    },

    {
      title: "News",
      path: "/tv/news",
      isDrapdown: false,
      icon: <FaRegNewspaper />,
    },

    {
      title: "Entertainment",
      path: "/tv/entertainment",
      isDrapdown: false,
      icon: <PiMonitorPlayLight />,
    },

    {
      title: "All Tv",
      path: "/tv/all-tvs",
      isDrapdown: false,
      icon: <GrChannel />,
    },
  ];

  useEffect(() => {
    setState(false);
  }, [route.pathname]);

  return (
    <>
      <nav
        className={`w-full relative z-20 bg-[#282727] md:static md:text-sm md:border-none
        ${state ? "shadow-lg rounded-b-xl md:shadow-none" : ""}`}
      >
        <div className="w-full flex flex-col gap-y-3 items-center gap-x-14  mx-auto md:flex md:px-8">
          <div className={`w-full flex justify-between items-center py-8 `}>
            <button onClick={() => setState(!state)} className=" text-white">
              {state ? (
                <IoClose className="text-[50px]" />
              ) : (
                <GiHamburgerMenu className="text-[50px]" />
              )}
            </button>

            <Link to="/" className="w-[200px] h-[50px]">
              <img src={siteLogo} alt="logo" className="w-full h-full" />
            </Link>

            <div className="">
              <button className=" text-white text-[50px]">
                <LuSearch />
                {/* <SearchModal/> */}
              </button>
            </div>

            <div className="text-[50px] flex items-center gap-x-8">
              <FaFacebookSquare className="text-[#115b9d]" />
              <Link to={telegramLink} target="_blank">
                <FaTelegram className="text-[#29b6f6]" />
              </Link>
            </div>
          </div>

          <div
            className={`w-full nav-menu flex-1 pb-3 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      className="pl-2 flex items-center gap-3 py-8 text-[35px] font-inter font-[600] text-white border-b-[.5px border-[#2D2C2C] uppercase"
                    >
                      <p className="text-[35px]">{item?.icon}</p>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      {state ? (
        <div
          className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setState(false)}
        ></div>
      ) : (
        ""
      )}
    </>
  );
};

export default TvMobileMenu;
