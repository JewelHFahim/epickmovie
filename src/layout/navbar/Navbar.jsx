import Header from "./Header";
import home1 from "../../assets/home1.svg";
import home2 from "../../assets/home2.svg";
import gener from "../../assets/link.svg";
import year from "../../assets/calender.svg";
import quality from "../../assets/death.svg";
import series from "../../assets/video.svg";
import bangla from "../../assets/www.svg";
import telegram from "../../assets/telegram.svg";

const Navbar = () => {
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
    },
    {
      titile: "Gener",
      url: "/",
      icon: gener,
    },
    {
      titile: "Year",
      url: "/",
      icon: year,
    },
    {
      titile: "Quality",
      url: "/",
      icon: quality,
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

  return (
    <div className="w-fll h-[184px] bg-[#27272A]">
      <Header />

      <div className="bg-[#494949] w-full h-[54px] flex items-center gap-5 font-inter">
        {menus.map((menu, i) => (
          <ul
            key={i}
            className="text-[14px] text-white w-[140px] h-[41px] flex justify-center items-center border-r rounded-[6px]"
          >
            <li>
              <a href="" className="flex items-center gap-1">
                <img src={menu.icon} alt="" className="w-[22px] h-[22px]" />
                {menu.titile}
              </a>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
