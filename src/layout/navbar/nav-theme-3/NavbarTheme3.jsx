import { collectSearchItem } from "../../../redux/features/search/searchSlice";
import {
  useGenreListQuery,
  usePixelQualityClientQuery,
  usePrintQualityClientQuery,
} from "../../../redux/features/movies/movieApi";
import { useSiteConfig } from "../../../utils/configHooks/ConfigHooks";
import { Link, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "./NavbarTheme3.css";

const NavbarTheme3 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { siteLogo, telegramLink } = useSiteConfig();
  const { data: genreList } = useGenreListQuery();

  const [searchTermState, setSearchTerm] = useState("");
  const [lastSearchTime, setLastSearchTime] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupNumbers, setPopupNumbers] = useState([]);
  const [userAnswer, setUserAnswer] = useState("");

  const { data: pixelQualityList } = usePixelQualityClientQuery();
  const { data: printQualityList } = usePrintQualityClientQuery();

  const pixel = pixelQualityList?.data;
  const print = printQualityList?.data;
  const combinedQuality = pixel?.concat(print);

  const menus = [
    {
      title: "Movies",
      url: "/movies",
      isDrapdown: false,
      newTab: false,
    },
    { title: "Web-Series", url: "/tv-show", newTab: false },

    {
      title: "Genres",
      url: "#",
      isDrapdown: true,
      subMenu: genreList?.data,
      newTab: false,
    },

    {
      title: "Quality",
      url: "#",
      isDrapdown: true,
      subMenu: combinedQuality,
      newTab: false,
    },

    { title: "Bangla", url: "/bangla", isDrapdown: false },
    {
      title: "Join Telegram",
      url: telegramLink,
      isDrapdown: false,
      newTab: true,
    },
  ];

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (lastSearchTime && Date.now() - lastSearchTime < 3000) {
      setShowPopup(true);
      const num1 = Math.floor(Math.random() * 9) + 1;
      const num2 = Math.floor(Math.random() * 9) + 1;
      setPopupNumbers([num1, num2]);
    } else {
      // Proceed with the search
      const res = dispatch(collectSearchItem(searchTermState));
      if (res !== null) {
        setLastSearchTime(Date.now());
        navigate(`/search-list/${searchTermState}`);
        setSearchTerm("");
      }
    }
  };

  const handleAuthenticate = () => {
    const sum = popupNumbers.reduce((acc, num) => acc + num, 0);
    const difference = popupNumbers.reduce((acc, num) => acc - num, 0);

    if (userAnswer === sum.toString() || userAnswer === difference.toString()) {
      setLastSearchTime(Date.now());
      setShowPopup(false);
      const res = dispatch(collectSearchItem(searchTermState));
      if (res !== null) {
        setLastSearchTime(Date.now());
        navigate(`/search-list/${searchTermState}`);
        setSearchTerm("");
        setUserAnswer("");
      }
    } else {
      alert("Incorrect answer. Please try again.");
    }
  };

  return (
    <div className="lg:w-[1200px] mx-auto hidden w-full h-[70px] bg-[#171717] lg:flex items-center shadow-md border-b border-gray-800">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-x-5">
          <Link to="/">
            <img
              src={siteLogo}
              alt="site-logo"
              className="w-[142px] h-[41px]"
            />
          </Link>

          <ul className="font-roboto text-[18px] text-white flex items-center gap-x-5 menus ">
            {menus.map((item, i) => (
              <li key={i} className="relative">
                <Link to={item.url} target={`${item.newTab ? "_blank" : ""}`}>
                  {item.title}
                </Link>

                {item?.isDrapdown && (
                  <ul className="z-[999] absolute top-[30px] left-0 bg-[#323131] flex flex-wrap flex-col gap-1 h-[450px] p-2 shadow-md text-[16px] font-[500] w-[500px] submenu">
                    {item?.subMenu?.map((sMenu, i) => (
                      <Link
                        to={`/terms/${sMenu?.slug}`}
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

          <Link to="/tv" className="border border-yellow-500 text-yellow-500 px-5 hover:border-yellow-300 hover:text-yellow-300 rounded-md font-medium">Live Tv</Link>
        </div>

        {/* Serach Field */}
        <form
          onSubmit={handleSubmit}
          className="w-[332px] py-2 rounded-md flex items-center bg-[#272727] border border-gray-700"
        >
          <input
            type="text"
            value={searchTermState}
            onChange={handleInputChange}
            placeholder="Search..."
            className="w-[90%] placeholder:text-gray-500 focus:outline-none bg-transparent px-4 text-slate-200 text-sm font-semibold"
          />
          <IoSearch className="10% text-slate-300" />
        </form>
        {showPopup && (
          <div className="absolute z-[9999] top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-300 p-8 rounded-lg flex flex-col items-center">
              <p className="font-medium">Verify that you are not robot...</p>
              <p className="font-medium">
                {" "}
                {popupNumbers[0]} + {popupNumbers[1]} = ?
              </p>
              <div className=" mt-2 rounded-md">
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  className=" border-black outline-none rounded-s-md px-2 h-[30px]"
                />
                <button
                  onClick={handleAuthenticate}
                  className=" px-5 bg-gray-600 text-white rounded-e-md text-sm h-[30px]"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarTheme3;
