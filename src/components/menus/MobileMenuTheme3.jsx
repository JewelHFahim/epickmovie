import { GoGlobe } from "react-icons/go";
import { IoClose, IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import { RiHome2Line } from "react-icons/ri";
import { RiMovie2Line } from "react-icons/ri";
import { RiListIndefinite } from "react-icons/ri";
import { LiaTelegramPlane } from "react-icons/lia";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdMinimize, MdOutlineMovieFilter } from "react-icons/md";
import { useSiteConfig } from "../../utils/configHooks/ConfigHooks";
import { useGenreListQuery, usePixelQualityClientQuery, usePrintQualityClientQuery } from "../../redux/features/movies/movieApi";
import { useDispatch } from "react-redux";
import { collectSearchItem } from "../../redux/features/search/searchSlice";
import { AiOutlineClose } from "react-icons/ai";
import { CgMenuLeft } from "react-icons/cg";

const MobileMenuTheme3 = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: genreList } = useGenreListQuery();
  const { telegramLink, siteLogo } = useSiteConfig();
  const [searchTermState, setSearchTerm] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupNumbers, setPopupNumbers] = useState([]);
  const [userAnswer, setUserAnswer] = useState("");
  const [lastSearchTime, setLastSearchTime] = useState(null);
  const [openSearchFiled, setOpenSearchField] = useState(false);
  const [state, setState] = useState(true);

  const { data: pixelQualityList } = usePixelQualityClientQuery();
  const { data: printQualityList } = usePrintQualityClientQuery();

  const pixel = pixelQualityList?.data;
  const print = printQualityList?.data;
  const combinedQuality = pixel?.concat(print);

  const navigation = [
    { title: "Home", path: "/", isDrapdown: false, icon: <RiHome2Line /> },

    {
      title: "Movies",
      path: "/movies",
      isDrapdown: false,
      icon: <MdOutlineMovieFilter />,
    },

    {
      title: "Web Series",
      path: "/tv-show",
      isDrapdown: false,
      icon: <GoGlobe />,
    },

    {
      title: "Genre",
      path: "",
      isDrapdown: true,
      navs: genreList?.data,
      icon: <RiListIndefinite />,
    },

    {
      title: "Quality",
      path: "",
      isDrapdown: true,
      navs: combinedQuality,
      icon: <RiListIndefinite />,
    },

    {
      title: "Bangla",
      path: "/bangla",
      isDrapdown: false,
      icon: <RiMovie2Line />,
    },

    {
      title: "Join Telegram",
      path: telegramLink,
      isDrapdown: false,
      icon: <LiaTelegramPlane />,
    },
  ];

  useEffect(() => {
    setState(false);
  }, [location]);

  // Search Functions Start
  const handleOpenSearchFiled = () => {
    setOpenSearchField(!openSearchFiled);
  };

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
    <div className="lg:hidden">
        
      <nav
        className={`w-full relative z-20  
        ${state ? "shadow-lg rounded-b-xl md:shadow-none" : ""}`}
      >
        <div className="w-full relative flex flex-col gap-y-3 items-center gap-x-14  mx-auto md:flex  bg-[#464646]">
          {/*================>> NAVBAR <<=======================*/}
          <div className={`w-full flex justify-between items-center py-8 px-6`}>
            <div className="w-full py-2">
              <div className="w-full flex justify-between items-center text-white">
                <button onClick={() => setState(!state)}>
                  {state ? (
                    <IoClose className="text-[65px] text-blue-500" />
                  ) : (
                    <CgMenuLeft className="text-[68px]" />
                  )}
                </button>

                <Link to="/">
                  <img src={siteLogo} alt="" className="w-[350px] h-[65px]" />
                </Link>

                <button onClick={() => handleOpenSearchFiled()}>
                  {openSearchFiled ? (
                    <AiOutlineClose className="text-[60px] text-blue-500" />
                  ) : (
                    <IoSearch className="text-[60px] text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/*=====================>> MENUS <<================== */}
          <div className={`absolute top-[150px] bg-black bg-opacity-[95%] w-full nav-menu flex-1  ${state ? "block" : "hidden"}`}>

            <ul className="flex flex-col">
              {navigation.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className=" p-5 border-b border-white border-opacity-[20%]"
                  >
                    {/* ===========>> Primary Menus <<=========== */}
                    <div className="ml-2 flex items-center gap-3 w-full bg-green-0 py-8 text-[30px] font-[600] uppercase z-[9]">
                      <Link
                        to={item.path}
                        className="text-[40px] text-gray-200"
                      >
                        {item.title}
                      </Link>
                    </div>

                    {/* ============>> Sub Menus <<==============*/}
                    {item.isDrapdown && (
                      <div className="grid grid-cols-2 ml-8">
                        {item?.navs?.map((item, i) => (
                          <Link
                            to={`/terms/${item?.slug}`}
                            key={i}
                            className="flex items-center gap-2 text-gray-400 px- py-4 my-1"
                          >
                            <MdMinimize className="w-[30px] h-[30px]" />
                            <p className="text-[35px] font-inter font-[600]">
                              {item?.name}
                            </p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      {/* =================>> SEARCH BOX <<=====================*/}
      {openSearchFiled && (
        <div className="w-full mb-10 mt-">
          <form
            onSubmit={handleSubmit}
            className="flex items-center bg-black bg-opacity-[50%] border border-white border-opacity-[70%]"
          >
            <input
              type="text"
              value={searchTermState}
              onChange={handleInputChange}
              placeholder="Search Movie/TV Shows"
              className="w-[90%] focus:outline-none bg-transparent px-10 h-[140px] text-slate-200 text-[40px] font-semibold  shadow-md"
            />

            <IoSearch className="w-[10%] text-[60px] text-gray-200" />
          </form>

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
          )}
        </div>
      )}

      {state ? (
        <div
          className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setState(false)}
        ></div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MobileMenuTheme3;
