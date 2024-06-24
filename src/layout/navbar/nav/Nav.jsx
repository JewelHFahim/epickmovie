import "./Nav.css";
import home from "../../../assets/homeIcon.svg";
import link from "../../../assets/link.svg";
import calender from "../../../assets/calender.svg";
import quality from "../../../assets/death.svg";
import webSer from "../../../assets/www.svg";
import bangla from "../../../assets/video.svg";
import telegram from "../../../assets/telegram.svg";
import movie from "../../../assets/home2.svg";
import {
  useGenreListQuery,
  usePixelQualityClientQuery,
  usePrintQualityClientQuery,
  useYearListQuery,
} from "../../../redux/features/movies/movieApi";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { useSiteConfig } from "../../../utils/configHooks/ConfigHooks";

const Nav = () => {
  const { telegramLink } = useSiteConfig();
  const { data: yearList } = useYearListQuery();
  const { data: genreList } = useGenreListQuery();
  const { data: pixelQualityList } = usePixelQualityClientQuery();
  const { data: printQualityList } = usePrintQualityClientQuery();

  const pixel = pixelQualityList?.data;
  const print = printQualityList?.data;
  const combinedQuality = pixel?.concat(print);

  const itemsPerColumn = 20;
  const columns = [];
  for (let i = 0; i < genreList?.data?.length; i += itemsPerColumn) {
    columns.push(genreList?.data?.slice(i, i + itemsPerColumn));
  }

  const menus = useMemo(
    () => [
      { title: "Home", path: "/", isDrapdown: false, icon: home },
      {
        title: "Movie",
        path: "/movies",
        isDrapdown: false,
        icon: movie,
      },
      {
        title: "Genre",
        path: "#",
        isDrapdown: true,
        subMenu: genreList?.data,
        icon: link,
      },
      {
        title: "Year",
        path: "#",
        isDrapdown: true,
        subMenu: yearList?.data,
        icon: calender,
      },
      {
        title: "Quality",
        path: "#",
        isDrapdown: true,
        subMenu: combinedQuality,
        icon: quality,
      },
      {
        title: "Web Series",
        path: "/tv-show",
        isDrapdown: false,
        icon: webSer,
      },
      { title: "Bangla", path: "/bangla", isDrapdown: false, icon: bangla },
      {
        title: "Join Telegram",
        path: telegramLink,
        isDrapdown: false,
        icon: telegram,
        newTab: true,
      },
    ],
    [genreList, yearList, combinedQuality, telegramLink]
  );

  return (
    <nav className="menu bg-[#494949] w-full h-[54px]">
      <ul>
        {menus.map((item, i) => (
          <li key={i} className="main-menu">
            {item?.isDrapdown ? (
              <Link to={item?.path} className="flex items-center gap-2">
                <img src={item?.icon} alt="" className="w-[23px] h-[23px]" />
                {item?.title}
              </Link>
            ) : item.newTab ? (
              <Link
                to={item?.path}
                target="_blank"
                rel="noreferrer"
                className=" flex items-center gap-2"
              >
                <img src={item?.icon} alt="" className="w-[23px] h-[23px]" />
                {item?.title}
              </Link>
            ) : (
              <Link to={item?.path} className=" flex items-center gap-2">
                <img src={item?.icon} alt="" className="w-[23px] h-[23px]" />
                {item?.title}
              </Link>
            )}

            <ul>
              {item?.subMenu?.map((item, i) => (
                <Link key={i} to={`/terms/${item?.slug}`} className="subM">
                  {item?.name}
                </Link>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
