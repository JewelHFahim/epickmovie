import { Link } from "react-router-dom";
import { useSiteConfig } from "../../../utils/configHooks/ConfigHooks";
import { IoSearch } from "react-icons/io5";
import { useGenreListQuery } from "../../../redux/features/movies/movieApi";
import "./NavbarTheme1.css";

const NavbarTheme1 = () => {
  const { siteLogo } = useSiteConfig();
  const { data: genreList } = useGenreListQuery();

  const menus = [
    { title: "Home", url: "/", isDrapdown: false },
    { title: "Movies", url: "/movies/page/1", isDrapdown: false },
    { title: "Web-Series", url: "/tv-show/page/1" },
    {
      title: "Genres",
      url: "",
      isDrapdown: true,
      subMenu: genreList?.data,
    },
    { title: "Hollywood", url: "", isDrapdown: false },
    { title: "Bollywood", url: "", isDrapdown: false },
    { title: "Join Telegram", url: "", isDrapdown: false },
  ];

  return (
    <div className="w-full h-[70px] bg-[#262626] flex items-center">
      <div className="lg:w-[78vw] lg:min-w-[1500px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-x-5 ">
          <Link to="/">
            <img
              src={siteLogo}
              alt="site-logo"
              className="w-[190px] h-[31px]"
            />
          </Link>

          <ul className="font-lilita text-[22px] text-white flex items-center gap-x-5 menus ">
            {menus.map((item, i) => (
              <li key={i} className="relative">
                <Link to={item.url}>{item.title}</Link>

                {item?.isDrapdown && (
                  <ul className="z-[999] absolute top-[35px] left-0 bg-[#323131] flex flex-wrap flex-col gap-y-2 gap-x-5 h-[450px] p-4 shadow-md text-[16px] font-[300] w-[450px] submenu">
                    {item?.subMenu?.map((sMenu, i) => (
                      <Link
                        to={`/terms/${sMenu?.slug}/page/1`}
                        key={i}
                        className="hover:bg-slate-700 py-1 pl-2 rounded-md"
                      >
                        <span>{sMenu?.name}</span>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Serach Field */}
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
