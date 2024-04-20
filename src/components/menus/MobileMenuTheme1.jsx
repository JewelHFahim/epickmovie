import { GoGlobe } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { RiHome2Line } from "react-icons/ri";
import { RiMovie2Line } from "react-icons/ri";
import { LuFolderInput } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiListIndefinite } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { LiaTelegramPlane } from "react-icons/lia";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineMovieFilter } from "react-icons/md";
import { useSiteConfig } from "../../utils/configHooks/ConfigHooks";
import { useGenreListQuery } from "../../redux/features/movies/movieApi";

const MobileMenu = () => {
  const location = useLocation();
  const { data: genreList } = useGenreListQuery();
  const { telegramLink } = useSiteConfig();

  const [state, setState] = useState(false);
  const [drapdownState, setDrapdownState] = useState({
    isActive: false,
    idx: null,
  });

  const navigation = [
    { title: "Home", path: "/", isDrapdown: false, icon: <RiHome2Line /> },

    {
      title: "Movies",
      path: "/movies",
      isDrapdown: false,
      icon: <MdOutlineMovieFilter />,
    },

    {
      title: "Web Series",
      path: "/tv-show",
      isDrapdown: false,
      icon: <GoGlobe />,
    },

    {
      title: "Genre",
      path: "",
      isDrapdown: true,
      navs: genreList?.data,
      icon: <RiListIndefinite />,
    },

    {
      title: "Hollywood",
      path: "/english",
      isDrapdown: false,
      icon: <RiMovie2Line />,
    },

    {
      title: "Bollywood",
      path: "/hindi",
      isDrapdown: false,
      icon: <RiMovie2Line />,
    },

    {
      title: "Join Telegram",
      path: telegramLink,
      isDrapdown: false,
      icon: <LiaTelegramPlane />,
    },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".nav-menu"))
        setDrapdownState({ isActive: false, idx: null });
    };
  }, []);

  useEffect(() => {
    setState(false);
  }, [location]);

  const handleSubMenuClick = (idx) => {
    setDrapdownState((prevState) => ({
      idx,
      isActive: prevState.idx === idx ? !prevState.isActive : true,
    }));
  };

  return (
    <div className="lg:hidden">
      <nav
        className={`w-full py-2 relative z-20 bg-[#464646]  md:static md:text-sm md:border-none
        ${state ? "shadow-lg rounded-b-xl md:shadow-none" : ""}`}
      >
        <div className="w-full flex flex-col gap-y-3 items-center gap-x-14  mx-auto md:flex md:px-8 bg-[#464646]">
          <div
            className={`w-full flex justify-between items-center p-2`}
          >
            <div onClick={() => setState(!state)} className="w-full py-2">
              <button className="w-full flex justify-between items-center text-white">
                <p className="text-[35px] font-medium">MENU</p>
                {state ? (
                  <IoClose className="text-[50px]" />
                ) : (
                  <GiHamburgerMenu className="text-[50px]" />
                )}
              </button>
            </div>
          </div>

          <div
            className={`w-full nav-menu flex-1 pb-3 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col gap-y-">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx}>
                    {item.isDrapdown ? (
                      // =======================>> WITH SUB MENUS <===========================
                      <button
                        className="w-full flex items-center justify-between text-white font-inter font-[600]  relative"
                        onClick={() => handleSubMenuClick(idx)}
                      >
                        <div className="ml-2 flex items-center gap-3  w-full bg-green-0 py-8 text-[30px] font-[600] uppercase z-[9]">
                          <p className="text-[40px]">{item?.icon}</p>
                          <p>{item.title}</p>
                        </div>

                        <div className="text-[50px] h-full w-[100px] flex justify-center items-center absolute right-0">
                          {drapdownState.idx == idx &&
                          drapdownState.isActive ? (
                            <FaMinus />
                          ) : (
                            <FaPlus />
                          )}
                        </div>
                      </button>
                    ) : (
                      // ======================>> WITHOUT SUB MENUS <=========================
                      <Link
                        to={item.path}
                        className="pl-2 flex items-center gap-3 py-8 text-[30px] font-inter font-[600] text-white uppercase"
                      >
                        <p className="text-[40px]">{item?.icon}</p>
                        {item.title}
                      </Link>
                    )}

                    {/* ==========================>> SUB MENUS <============================ */}
                    {item.isDrapdown &&
                      drapdownState.idx === idx &&
                      drapdownState.isActive && (
                        <div>
                          <ul className="flex flex-col gap-y-4 mx-10">
                            {item?.navs?.map((item, i) => (
                              <Link
                                to={`/terms/${item?.slug}`}
                                key={i}
                                className="flex items-center gap-2 text-white px-2 py-4 my-2"
                              >
                                <LuFolderInput className="w-[30px] h-[30px]" />
                                <p className="text-[30px] font-inter font-[600]">
                                  {item.name}
                                </p>
                              </Link>
                            ))}
                          </ul>
                        </div>
                      )}
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
    </div>
  );
};

export default MobileMenu;
