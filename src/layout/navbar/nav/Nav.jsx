import "./Nav.css";
import home from "../../../assets/homeIcon.svg";
import link from "../../../assets/link.svg";
import calender from "../../../assets/calender.svg";
import quality from "../../../assets/death.svg";
import webSer from "../../../assets/www.svg";
import bangla from "../../../assets/video.svg";
import telegram from "../../../assets/telegram.svg";
import {
  useGenreListQuery,
  usePixelQualityClientQuery,
  usePrintQualityClientQuery,
  useYearListQuery,
} from "../../../redux/features/movies/movieApi";
import { useDispatch } from "react-redux";
import {
  collectFilteredItem,
} from "../../../redux/features/search/searchSlice";
import { Link } from "react-router-dom";
import { BiMovie } from "react-icons/bi";
import { useJoinTelegramUserQuery } from "../../../redux/features/settings/settingApi";

const Nav = () => {
  const dispatch = useDispatch();
  const { data: genreList } = useGenreListQuery();
  const { data: yearList } = useYearListQuery();
  const { data: joinTelegram } = useJoinTelegramUserQuery();
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

  // const [page, setPage] = useState(1);
  const handleGenre = (data) => {
    console.log({ data });
    dispatch(collectFilteredItem(data));
    // dispatch(setPageNo(page));
  };

  const handleYear = (year) => {
    console.log(year);
    dispatch(collectFilteredItem(year));
  };

  const handleQuality = (quality) => {
    console.log(quality);
    dispatch(collectFilteredItem(quality));
  };

  return (
    <nav className="menu bg-[#494949] w-full h-[54px]">
      <ul>

        <li className="main-menu">
          <a href="/" className=" flex items-center gap-2">
            <img src={home} alt="" className="w-[25px] h-[25px]" /> Home
          </a>
        </li>

        {/* =========>> MOVIE <<========== */}
        <li className="main-menu">
          <a href="/movies" className=" flex items-center gap-2">
            <BiMovie className="w-[25px] h-[25px]" />
            Movie
          </a>
        </li>

        {/* =========>> GENRE <<========== */}
        <li className="main-menu">
          <a href="#" className=" flex items-center gap-2">
            <img src={link} alt="" className="w-[23px] h-[23px]" /> Genre
          </a>
          <ul>
            {genreList?.data?.map((item, i) => (
              <li key={i}>
                <Link  to="/filter-list" onClick={() => handleGenre(item?.slug)} >
                  {item?.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        {/* =========>> YEAR <<========== */}
        <li className="main-menu">
          <a href="#" className=" flex items-center gap-2">
            <img src={calender} alt="" className="w-[21px] h-[20px]" /> Year
          </a>

          <ul className="grid">
            {yearList?.data?.map((item, i) => (
              <li key={i}>
                <Link to="/filter-list" onClick={() => handleYear(item?.slug)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        {/* =========>> QUALITY <<========== */}
        <li className="main-menu">
          <a href="#" className=" flex items-center gap-2">
            <img src={quality} alt="" className="w-[21px] h-[21px]" /> Quality
          </a>
          <ul>
            {combinedQuality?.map((item, i) => (
              <li key={i}>
                <Link to="/filter-list" onClick={() => handleQuality(item?.slug)} >
                  {item?.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        <li className="main-menu">
          <a href="/tv-show" className=" flex items-center gap-2">
            <img src={webSer} alt="" className="w-[22px] h-[22px]" /> Web Series
          </a>
        </li>

        <li className="main-menu">
          <a href="/bangla" className=" flex items-center gap-2">
            <img src={bangla} alt="" className="w-[20px] h-[20px]" /> Bangla
          </a>
        </li>

        <li className="main-menu">
          <a
            href={joinTelegram?.data}
            className="flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={telegram} alt="" className="w-[20px] h-[20px]" />
            Join Telegram
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
