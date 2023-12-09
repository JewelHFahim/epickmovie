import { useState } from "react";
import logo from "../assets/logo.png";
import {
  MdOutlineDashboardCustomize,
  MdOutlineLocalMovies,
} from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

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

const Sidebar = () => {
  const navigation = [
    {
      href: "/dashboard",
      name: "Dashboard",
      icon: <MdOutlineDashboardCustomize />,
    },

    {
      href: "/dashboard/db-movies",
      name: "Dbmovies",
      icon: <BsCameraReels />,
    },
  ];

  const navsFooter = [
    {
      href: "javascript:void(0)",
      name: "Help",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
          />
        </svg>
      ),
    },
    {
      href: "javascript:void(0)",
      name: "Settings",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  const nestedNMovie = [
    { name: "Movies", href: "/dashboard/movies-db", icon: "" },
    { name: "Add New Post", href: "/dashboard/add-movie", icon: "" },
    { name: "Tags", href: "/dashboard/add-tags", icon: "" },
    { name: "Genres", href: "/dashboard/add-genre", icon: "" },
    { name: "Quality", href: "/dashboard/add-quality", icon: "" },
    { name: "Cast", href: "/dashboard/add-cast", icon: "" },
    { name: "Director", href: "/dashboard/add-director", icon: "" },
    { name: "Year", href: "/dashboard/add-year", icon: "" },
  ];

  const nestedNavTV = [
    { name: "Tv Shows", href: "/dashboard/db-series", icon: "" },
    { name: "Add New Post", href: "/dashboard/add-series", icon: "" },
    { name: "Tags", href: "/dashboard/add-tags", icon: "" },
    { name: "Genres", href: "/dashboard/add-genre", icon: "" },
    { name: "Cast", href: "/dashboard/add-cast", icon: "" },
    { name: "Creator", href: "/dashboard/add-creator", icon: "" },
    { name: "Studio", href: "/dashboard/add-studio", icon: "" },
    { name: "Networks", href: "/dashboard/add-networks", icon: "" },
    { name: "Year", href: "/dashboard/add-year", icon: "" },
    { name: "Seasons", href: "/dashboard/db-seasons", icon: "" },
    { name: "Episodes", href: "/dashboard/episode", icon: "" },
  ];

  return (
    <>
      <nav className="full h-screen border-r bg-white space-y-8">
        <div className="flex flex-col h-full px-4 overflow-y-auto">
          {/* =================>> ADMIN/PROFILE RELATED <<======================*/}
          <div className="h-20 flex items-center pl-2">
            <img src={logo} alt="" className="object-cover" />
          </div>

          <div className="overflow-auto">
            {/* ========================>> MAIN MENUES <<=======================*/}
            <ul className="text-sm font-medium flex-1">
              {navigation.map((item, idx) => (
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

              {/* =====================>> NESTED MENUES <<==========================*/}
              <li>
                <Menu items={nestedNMovie}>
                  {" "}
                  <MdOutlineLocalMovies /> Movies{" "}
                </Menu>
                <Menu items={nestedNavTV}>
                  {" "}
                  <MdOutlineLocalMovies /> TV Shows{" "}
                </Menu>
              </li>
            </ul>

            {/* =======================>> FOOTER MENUES <<========================*/}
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
      </nav>
    </>
  );
};

export default Sidebar;
