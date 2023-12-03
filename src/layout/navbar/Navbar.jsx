import Header from "./Header";
import home1 from "../../assets/home1.svg";
import home2 from "../../assets/home2.svg";
import gener from "../../assets/link.svg";
import year from "../../assets/calender.svg";
import quality from "../../assets/death.svg";
import series from "../../assets/video.svg";
import bangla from "../../assets/www.svg";
import telegram from "../../assets/telegram.svg";
import MovieMenu from "../../components/menus/MovieMenu";
import { useState } from "react";
import GenerMenu from "../../components/menus/GenerMenu";
import YearMenu from "../../components/menus/YearMenu";
import QualityMenu from "../../components/menus/QualityMenu";
import { IoMenu } from "react-icons/io5";
import MobileMenuButton from "../../utils/MobileMenuButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [gener1, setGener] = useState(false);
  const [year1, setYear] = useState(false);
  const [quality1, setQuality] = useState(false);

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  const menus = [
    {
      titile: "Home",
      url: "/",
      icon: home1,
    },
    {
      titile: "Home",
      url: "/",
      icon: home2,
      fn: setIsOpen,
    },
    {
      titile: "Gener",
      url: "/",
      icon: gener,
      fn: setGener,
    },
    {
      titile: "Year",
      url: "/",
      icon: year,
      fn: setYear,
    },
    {
      titile: "Quality",
      url: "/",
      icon: quality,
      fn: setQuality,
    },
    {
      titile: "Web Series",
      url: "/",
      icon: series,
    },
    {
      titile: "Bangla",
      url: "/",
      icon: bangla,
    },
    {
      titile: "Join Telegram",
      url: "/",
      icon: telegram,
    },
  ];

  const movieCategory = [
    {
      title: "Hollywood",
      url: "",
    },
    {
      title: "Bollywood",
      url: "",
    },
    {
      title: "Tamil",
      url: "",
    },
    {
      title: "Telugu",
      url: "",
    },
    {
      title: "Malaylam",
      url: "",
    },
    {
      title: "Kannada",
      url: "",
    },
    {
      title: "Bengali",
      url: "",
    },
    {
      title: "Action",
      url: "",
    },
    {
      title: "Adventure",
      url: "",
    },
    {
      title: "Animation",
      url: "",
    },
    {
      title: "Comedy",
      url: "",
    },
    {
      title: "Crime",
      url: "",
    },
    {
      title: "Drama",
      url: "",
    },
    {
      title: "Sci-Fi",
      url: "",
    },
    {
      title: "Horror",
      url: "",
    },
    {
      title: "Fantasy",
      url: "",
    },
    {
      title: "Thriller",
      url: "",
    },
    {
      title: "Romance",
      url: "",
    },
    {
      title: "Mystery",
      url: "",
    },
  ];

  return (
    <div className=" lg:h-[184px] bg-[#27272A]">
      <Header />

      <div className="w-full h-[35px] bg-[#464646] mt-[15px] flex  items-center justify-between px-4 lg:hidden">
        <p className="text-[14px] font-[600] font-inter text-[#BDBBBB]">MENU</p>
        <IoMenu className="text-[25px] text-[#D6D6D6]" />
      </div>

      <div className="w-[95%] h-[100%] border border-black mx-auto mt-[34px] p-2 lg:hidden mb-[30px]">
        <div className="grid grid-cols-5 gap-2">
          {movieCategory.map((movie, i) => (
            <MobileMenuButton key={i}>{movie.title}</MobileMenuButton>
          ))}
        </div>
      </div>

      <div className="bg-[#494949] w-full h-[54px]  items-center gap-5 font-inter z-[999] hidden lg:flex">
        {menus.map((menu, i) => (
          <ul
            key={i}
            className="text-[14px] text-white px-5 py-2 flex justify-center items-center border-r rounded-[6px]"
          >
            <li>
              {/* have a issue multiple open */}
              <button
                onClick={() => menu.fn((l) => !l)}
                className="flex items-center gap-1"
              >
                <img src={menu.icon} alt="" className="w-[22px] h-[22px]" />
                {menu.titile}
              </button>
            </li>
          </ul>
        ))}
      </div>

      <MovieMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <GenerMenu gener1={gener1} setGener={setGener} />
      <YearMenu year1={year1} setYear={setYear} />
      <QualityMenu quality1={quality1} setQuality={setQuality} />


    </div>
  );
};

export default Navbar;
