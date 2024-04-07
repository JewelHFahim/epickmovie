import "./NavbarTv.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { GrChannel } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { RiHome4Line } from "react-icons/ri";
import { FaRegNewspaper } from "react-icons/fa";
import { PiMonitorPlayLight } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineSportsCricket } from "react-icons/md";
import { useSiteConfig } from "../../../utils/configHooks/ConfigHooks";
import { useGenreListQuery } from "../../../redux/features/movies/movieApi";
import { collectSearchItem } from "../../../redux/features/search/searchSlice";

const NavbarTv = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { siteLogo } = useSiteConfig();
  const { data: genreList } = useGenreListQuery();
  const [searchTermState, setSearchTerm] = useState("");
  const [lastSearchTime, setLastSearchTime] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupNumbers, setPopupNumbers] = useState([]);
  const [userAnswer, setUserAnswer] = useState("");

  const menus = [
    { title: "Home", url: "/tv", icon: <RiHome4Line />, isDrapdown: false },
    {
      title: "Sports",
      url: "/tv/sports",
      icon: <MdOutlineSportsCricket />,
      isDrapdown: false,
    },
    { title: "News", url: "/tv", icon: <FaRegNewspaper />, isDrapdown: false },
    {
      title: "Entertainment",
      url: "/tv",
      icon: <PiMonitorPlayLight />,
      isDrapdown: false,
    },
    {
      title: "All Tv",
      url: "/tv",
      icon: <GrChannel />,
      isDrapdown: false,
      subMenu: genreList?.data,
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
    <div className="w-full h-[70px] bg-[#282727] flex items-center">
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
                <Link
                  to={item.url}
                  target={`${item.newTab ? "_blank" : ""}`}
                  className="flex items-center gap-1"
                >
                  {item.icon}
                  {item.title}
                </Link>

                {/* {item?.isDrapdown && (
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
                )} */}
              </li>
            ))}
          </ul>
        </div>

        {/* Serach Field */}
        <form
          // onSubmit={handleSubmit}
          className="w-[332px] py-2 rounded-md flex items-center bg-[#444444]"
        >
          <input
            type="text"
            // value={searchTermState}
            // onChange={handleInputChange}
            placeholder="Search Tv Channel"
            className="w-[90%] focus:outline-none bg-transparent px-4 text-slate-200 text-sm font-semibold"
          />
          <IoSearch className="10% text-[#d73ee3]" />
        </form>

        {/* 
        {showPopup && (
          <div className="absolute z-[9999] top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-300 p-8 rounded-lg flex flex-col items-center">
              <p className="font-medium">Verify that you are not robot...</p>
              <p className="font-medium">
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
        )} */}


      </div>
    </div>
  );
};

export default NavbarTv;
