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
import { IoMdHome } from "react-icons/io";
import { MdOutlineMovieFilter } from "react-icons/md";
import { RiListIndefinite } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineHighQuality } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileMenu = () => {
  const dispatch = useDispatch();
  const { data: pixelQualityList } = usePixelQualityClientQuery();
  const { data: printQualityList } = usePrintQualityClientQuery();
  const { data: genreList } = useGenreListQuery();
  const { data: yearList } = useYearListQuery();
  const { data: audiList } = useGetAudioListQuery();

  const pixel = pixelQualityList?.data;
  const print = printQualityList?.data;
  const combinedQuality = pixel?.concat(print);

  const [state, setState] = useState(false);
  const [drapdownState, setDrapdownState] = useState({
    isActive: false,
    idx: null,
  });

  const navigation = [
    { title: "Home", path: "/", isDrapdown: false, icon: <IoMdHome /> },
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
      icon: <FaCalendarAlt />,
    },
    {
      title: "QUALITY",
      path: "",
      isDrapdown: true,
      navs: combinedQuality,
      icon: <MdOutlineHighQuality />,
    },
    // { title: "Home", path: "/", isDrapdown: false, icon: <FaGlobe /> },
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
            <ul className="items-center">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx}>
                    {item.isDrapdown ? (
                      <button className="w-full h-[55px] flex items-center justify-between text-white font-inter font-[600] border-b-[.5px] border-[#2D2C2C]" onClick={() => setDrapdownState({ idx, isActive: !drapdownState.isActive,})}>
                        <div className="ml-2 flex items-center gap-3 border-r border-[#2D2C2C] w-[93%] h-full text-[18px] font-[600]">
                          <p className="text-[28px]">{item?.icon}</p>
                          <p>{item.title}</p>
                        </div>

                        {drapdownState.idx == idx && drapdownState.isActive ? (
                          <FaMinus className="text-[26px] mx-2 w-[7%]" />
                        ) : (
                          <FaPlus className="text-[26px] mx-2  w-[7%]" />
                        )}
                      </button>
                    ) : (
                      <a href={item.path} className="flex items-center gap-3 p-2 text-[18px] font-inter font-[600] text-white border-b-[.5px] border-[#2D2C2C]">
                        <p className="text-[25px]">{item?.icon}</p>
                        {item.title}
                      </a>
                    )}

                    {item.isDrapdown &&
                    drapdownState.idx == idx &&
                    drapdownState.isActive ? (
                      <div className="">
                        <ul className="">
                          {item?.navs?.map((item, i) => (
                            <li onClick={() => handleTerms(item?.slug)}
                              key={i} className="flex  items-center gap-2 text-white px-2 py-1 border-b-[.5px] border-[#2D2C2C]">
                              <img src={homeIcon} alt="" className="w-[21px] h-[21px]"/>
                              <Link to="/filter-list" className="text-[18px] font-inter font-[500]">
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
