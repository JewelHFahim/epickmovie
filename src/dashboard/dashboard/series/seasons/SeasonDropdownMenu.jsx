import { useState } from "react";
import { BsCameraReels } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { GoQuestion } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdMovieEdit, MdOutlineDashboardCustomize } from "react-icons/md";
import { TbMovie } from "react-icons/tb";


// NESTED MENUS
const Menu = (props) => {
    
    const { children, items } = props;
    const [isOpened, setIsOpened] = useState(false);
  
    return (
      <div>
        <button
          className="w-full flex items-center justify-between text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
          onClick={() => setIsOpened(!isOpened)}
        >
          <div className="flex items-center gap-x-2"> {children} </div>
          <IoIosArrowDown
            className={`w-5 h-5 duration-150 ${isOpened ? "rotate-180" : ""}`}
          />
        </button>
  
        {isOpened ? (
          <ul className="mx-4 px-2 border-l text-xs">
            {items.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className="flex items-center p-1  hover:bg-gray-200 duration-150"
                >
                  {item.icon ? <div>{item.icon}</div> : ""}
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    );
  };


const SeasonDropdownMenu = () => {

    const navigation = [
        {
          href: "/admin/dashboard",
          name: "Dashboard",
          icon: <MdOutlineDashboardCustomize />,
        },
    
        {
          href: "/admin/dashboard/db-movies",
          name: "Dbmovies",
          icon: <BsCameraReels />,
        },
      ];
    
      const navsFooter = [
        {
          href: "/admin/dashboard/users",
          name: "Users",
          icon: <FaUsers />,
        },
    
        {
          href: "javascript:void(0)",
          name: "Help",
          icon: <GoQuestion />,
        },
    
        {
          href: "javascript:void(0)",
          name: "Settings",
          icon: <IoSettingsOutline />,
        },
      ];
    
      const nestedMovie = [
        { name: "Movies", href: "/admin/dashboard/movies-db", icon: "" },
        { name: "Add New Post", href: "/admin/dashboard/add-movie", icon: "" },
        { name: "Audio", href: "/admin/dashboard/add-audio", icon: "" },
        { name: "Tags", href: "/admin/dashboard/add-tags", icon: "" },
        { name: "Genres", href: "/admin/dashboard/add-genre", icon: "" },
        { name: "Quality", href: "/admin/dashboard/add-quality", icon: "" },
        { name: "Cast", href: "/admin/dashboard/add-cast", icon: "" },
        { name: "Director", href: "/admin/dashboard/add-director", icon: "" },
        { name: "Year", href: "/admin/dashboard/add-year", icon: "" },
      ];
    
      const nestedNavTV = [
        { name: "Tv Shows", href: "/admin/dashboard/db-series", icon: "" },
        { name: "Add New Post", href: "/admin/dashboard/add-series", icon: "" },
        { name: "Tags", href: "/admin/dashboard/add-tags", icon: "" },
        { name: "Genres", href: "/admin/dashboard/add-genre", icon: "" },
        { name: "Cast", href: "/admin/dashboard/add-cast", icon: "" },
        { name: "Creator", href: "/admin/dashboard/add-creator", icon: "" },
        { name: "Studio", href: "/admin/dashboard/add-studio", icon: "" },
        { name: "Networks", href: "/admin/dashboard/add-networks", icon: "" },
        { name: "Year", href: "/admin/dashboard/add-year", icon: "" },
        { name: "Seasons", href: "/admin/dashboard/db-seasons", icon: "" },
        { name: "Episodes", href: "/admin/dashboard/episode", icon: "" },
      ];
    

    return (
        <div>
            {/* ========================>> MENUES <<=========================*/}
          <div className="overflow-auto">
            {/* ======================>> MAIN MENUES <<====================*/}
            <ul className="text-sm font-medium flex-1">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
                  >
                    <div className="text-gray-500 text-lg">{item.icon}</div>
                    {item.name}
                  </a>
                </li>
              ))}

              {/* ==================>> NESTED MENUES <<=====================*/}
              <li>
                <Menu items={nestedMovie}>
                  <MdMovieEdit className="text-lg" /> Movies
                </Menu>
                <Menu items={nestedNavTV}>
                  <TbMovie className="text-lg" /> TV Shows
                </Menu>
              </li>
            </ul>

            {/* =====================>> FOOTER MENUES <<======================*/}
            <div className="pt-2 mt-2 border-t">
              <ul className="text-sm font-medium">
                {navsFooter.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
                    >
                      <div className="text-gray-500">{item.icon}</div>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
    );
};

export default SeasonDropdownMenu;