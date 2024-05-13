import { Link, useNavigate } from "react-router-dom";
import { useSiteConfig } from "../../../utils/configHooks/ConfigHooks";
import { IoSearch } from "react-icons/io5";
import { useGenreListQuery } from "../../../redux/features/movies/movieApi";
import "./NavbarTheme1.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { collectSearchItem } from "../../../redux/features/search/searchSlice";

const NavbarTheme1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { siteLogo, telegramLink } = useSiteConfig();
  const { data: genreList } = useGenreListQuery();
  const [searchTermState, setSearchTerm] = useState("");
  const [lastSearchTime, setLastSearchTime] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupNumbers, setPopupNumbers] = useState([]);
  const [userAnswer, setUserAnswer] = useState("");

  const menus = [
    { title: "Home", url: "/", isDrapdown: false, newTab: false },
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
    { title: "Hollywood", url: "/english", isDrapdown: false },
    { title: "Bollywood", url: "/hindi", isDrapdown: false },
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
    <div className="hidden w-full h-[70px] bg-[#262626] lg:flex items-center">
      <div className="lg:w-[78vw] lg:min-w-[1500px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-x-5 ">
          <Link to="/">
            <img
              src={siteLogo}
              alt="site-logo"
              className="w-[190px] h-[31px]"
            />
          </Link>

          <ul className="font-roboto text-[20px] font-medium text-white flex items-center gap-x-4 menus ">
            {menus.map((item, i) => (
              <li key={i} className="relative">
                <Link to={item.url} target={`${item.newTab ? "_blank" : ""}`}>
                  {item.title}
                </Link>

                {item?.isDrapdown && (
                  <ul className="z-[999] absolute top-[35px] left-0 bg-[#323131] flex flex-wrap flex-col gap-1 h-[450px] p-2 shadow-md text-[16px] font-[500] w-[500px] submenu">
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

          <Link to="/tv">
            <button className="border text-[20px] px-4 text-yellow-500 border-yellow-500  hover:bg-yellow-500 hover:text-black transition-all ease-in-out">
             <span className="animate-pulse"> Live Tv</span>
            </button>
          </Link>
        </div>

        {/* Serach Field */}
        <form
          onSubmit={handleSubmit}
          className="w-[332px] py-2 rounded-md flex items-center bg-[#444444]"
        >
          <input
            type="text"
            value={searchTermState}
            onChange={handleInputChange}
            placeholder="Search Movie/TV Shows"
            className="w-[90%] focus:outline-none bg-transparent px-4 text-slate-200 text-sm font-semibold"
          />
          <IoSearch className="10% text-[#d73ee3]" />
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

export default NavbarTheme1;
