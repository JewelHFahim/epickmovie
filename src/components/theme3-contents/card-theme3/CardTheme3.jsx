/* eslint-disable react/prop-types */
import { FaPlay, FaStar } from "react-icons/fa";
import "./CardTheme3.css";

import { formatDate } from "../FormateDateTheme3";

const CardTheme3 = ({ datas, isLoading }) => {
  console.log(datas);

  return (
    <div className="mt-5 flex flex-wrap justify-between gap-2">
      {isLoading ? (
        <>
          {Array.from({ length: 25 }).map((item, i) => (
            <div
              key={i}
              className="w-[160px] h-[280px] flex flex-col justify-between"
            >
              <div className="w-full h-[85%] bg-slate-700 animate-pulse"></div>

              <div className="w-full h-[12%] bg-slate-700 animate-pulse"></div>
            </div>
          ))}
        </>
      ) : (
        <>
          {datas?.data?.data?.map((item, i) => (
            <div key={i} className="w-[160px] h-[280px]  p-1.5 cardContainer cursor-pointer borde">

              <div className="w-full h-[200px] relative imgContainer overflow-hidden">
                <img
                  src={item?.poster_image_url}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute right-1 bottom-1 flex items-center text-sm gap-x-1 bg-black bg-opacity-[40%] px-1">
                  <FaStar className="text-yellow-500" />

                  <p className="text-white">5.7</p>
                </div>

                <div className="absolute text-white text-4xl top-0 w-full h-full playBtn">
                  <FaPlay />
                </div>
              </div>

              <div className="mt-1">
                <p className="text-[12px] text-[#D8D8D8] font-bold">
                  {item?.post_title?.length >= 50
                    ? `${item?.post_title.slice(0, 50)} ...`
                    : item?.post_title}
                </p>
                <p className="text-[#D8D8D8] text-[9px] mt-1">
                  {formatDate(item?.updated_at)}
                </p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default CardTheme3;