import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import homeIcon from "../../assets/homeIcon.svg";
import { FaMinus, FaPlus } from "react-icons/fa6";
import {
  useGenreListQuery,
  useGetAudioListQuery,
  usePixelQualityClientQuery,
  usePrintQualityClientQuery,
  useYearListQuery,
} from "../../redux/features/movies/movieApi";
import { collectFilteredItem } from "../../redux/features/search/searchSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MdOutlineMovieFilter } from "react-icons/md";
import { RiListIndefinite } from "react-icons/ri";
import { MdOutlineHighQuality } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiHome2Line } from "react-icons/ri";
import { CiCalendarDate } from "react-icons/ci";
import { GoGlobe } from "react-icons/go";
import { RiMovie2Line } from "react-icons/ri";
import { LiaTelegramPlane } from "react-icons/lia";
import { useJoinTelegramUserQuery } from "../../redux/features/settings/settingApi";






const MobileMenu = () => {
  const dispatch = useDispatch();
  const { data: pixelQualityList } = usePixelQualityClientQuery();
  const { data: printQualityList } = usePrintQualityClientQuery();
  const { data: genreList } = useGenreListQuery();
  const { data: yearList } = useYearListQuery();
  const { data: audiList } = useGetAudioListQuery();
  const { data: joinTelegram } = useJoinTelegramUserQuery();


  const pixel = pixelQualityList?.data;
  const print = printQualityList?.data;
  const combinedQuality = pixel?.concat(print);

  const [state, setState] = useState(false);
  const [drapdownState, setDrapdownState] = useState({
    isActive: false,
    idx: null,
  });

  const navigation = [
    { title: "Home", path: "/", isDrapdown: false, icon: <RiHome2Line /> },
    {
      title: "Movies",
      path: "",
      isDrapdown: true,
      navs: audiList?.data,
      icon: <MdOutlineMovieFilter />,
    },
    {
      title: "GENRE",
      path: "",
      isDrapdown: true,
      navs: genreList?.data,
      icon: <RiListIndefinite />,
    },
    {
      title: "YEAR",
      path: "",
      isDrapdown: true,
      navs: yearList?.data,
      icon: <CiCalendarDate />,
    },
    {
      title: "QUALITY",
      path: "",
      isDrapdown: true,
      navs: combinedQuality,
      icon: <MdOutlineHighQuality />,
    },
    { title: "Web Series", path: "/tv-show", isDrapdown: false, icon: <GoGlobe /> },
    { title: "Bangla", path: "/bangla", isDrapdown: false, icon: <RiMovie2Line /> },
    { title: "Join Telegram", path: `${joinTelegram?.data}`, isDrapdown: false, icon: <LiaTelegramPlane /> },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".nav-menu"))
        setDrapdownState({ isActive: false, idx: null });
    };
  }, []);

  const handleTerms = (data) => {
    dispatch(collectFilteredItem(data));
    setState(false);
  };

  return (
    <>
      <nav
        className={`w-full mt-[15px] py-2 relative z-20 bg-[#464646]  md:static md:text-sm md:border-none 
            ${state ? "shadow-lg rounded-b-xl md:shadow-none" : ""}`}>
        <div className="w-full flex flex-col gap-y-3 items-center gap-x-14  mx-auto md:flex md:px-8 bg-[#464646]">

          <div className={`w-full flex justify-between items-center p-2  border-[#2D2C2C] borde`}>
            <div onClick={() => setState(!state)} className="w-full py-2">
              <button className="w-full flex justify-between items-center text-white">
               <GiHamburgerMenu className="text-[40px]" />
                {state && <IoClose className="text-[45px]" />}
              </button>
            </div>
          </div>

          <div className={`w-full nav-menu flex-1 pb-3 ${state ? "block" : "hidden"}`}>
            <ul className="flex flex-col gap-y-">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx}>
                    {item.isDrapdown ? (
// ======================>> WITH SUB MENUS <=========================
                      <button className="w-full flex items-center justify-between text-white font-inter font-[600] border-b-[.5px] border-[#2D2C2C]"
                       onClick={() => setDrapdownState({ idx, isActive: !drapdownState.isActive})}>

                        <div className="ml-2 flex items-center gap-3 border-r border-[#2D2C2C] w-[93%] py-8 text-[30px] font-[600]">
                          <p className="text-[40px]">{item?.icon}</p>
                          <p>{item.title}</p>
                        </div>

                        {(drapdownState.idx == idx && drapdownState.isActive) ? (
                          <FaMinus className="text-[45px] mx-2 w-[10%]" />
                        ) : (
                          <FaPlus className="text-[45px] mx-2  w-[10%]" />
                        )}
                      </button>
                    ) : (
// ======================>> WITHOUT SUB MENUS <========================= 
                      <a href={item.path} className="pl-2 flex items-center gap-3 py-8 text-[30px] font-inter font-[600] text-white border-b-[.5px border-[#2D2C2C]">
                        <p className="text-[40px]">{item?.icon}</p>
                        {item.title}
                      </a>
                    )}
{/* ==========================>> SUB MENUS <============================ */}
  {item.isDrapdown && drapdownState.idx == idx && drapdownState.isActive ? (
                      <div className="">
                        <ul className="flex flex-col gap-y-4 mx-10">
                          {item?.navs?.map((item, i) => (
                            <li onClick={() => handleTerms(item?.slug)}
                              key={i} className="flex items-center gap-2 text-white px-2 py-4 border-b-[.5px] border-[#2D2C2C] my-2">
                              <img src={homeIcon} alt="" className="w-[40px] h-[40px]"/>
                              <Link to="/filter-list" className="text-[30px] font-inter font-[600]">
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

        </div>
      </nav>

      {state ? (
        <div
          className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setState(false)}
        ></div>
      ) : (
        ""
      )}
    </>
  );
};

export default MobileMenu;
