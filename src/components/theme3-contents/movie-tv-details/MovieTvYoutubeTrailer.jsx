/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { IoPlayCircle } from "react-icons/io5";

const MovieTvYoutubeTrailer = ({url}) => {
  const [trailer, setTrailer] = useState(false);
  const handleTralerVideo = () => {
    setTrailer(!trailer);
  };
console.log(url)
  return (
    <div>
      {/* ==============>> TRAILER <<============== */}

      {!trailer && (
        <>
          <div className="bg-black bg-opacity-[40%] flex justify-between p-10 lg:p-5">
            <p className=" text-4xl lg:text-xl font-medium text-gray-200">
              Video Source
            </p>

            <p className="flex items-center gap-x-2">
              <span className="border border-white border-opacity-[20%] px-4 text-center py-2 lg:py-1 text-blue-600 bg-black rounded-md text-xl lg:text-sm">
                Report Error
              </span>
              <span className="text-gray-400 font-medium text-2xl lg:text-base">
                112 views
              </span>
            </p>
          </div>

          <button
            onClick={() => handleTralerVideo()}
            className="w-full  border border-white border-opacity-[20%] shadow-sm flex items-center justify-between h-[180px] lg:h-[100px] px-10 lg:px-[30px] cursor-pointer"
          >
            <p className="flex items-center gap-x-4">
              <IoPlayCircle className="text-gray-700 text-[60px] lg:text-[25px] " />
              <span className=" text-5xl lg:text-base font-medium text-gray-200 hover:text-blue-600 ">
                Watch Trailer
              </span>
              <span className="text-slate-600 text-2xl lg:text-base ">
                youtube.com
              </span>
            </p>

            <p className="text-[60px] lg:text-[30px] text-gray-500 hover:text-red-700 transition-all ease-in-out ">
              <FaYoutube />
            </p>
          </button>
        </>
      )}

      {/* ==========>> YOYTUBE PLAYER <<==========*/}
      {trailer && (
        <div className="p-1">
          <iframe
            width="100%"
            height="400"
            src={url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <div className="bg-black bg-opacity-[40%] flex justify-between p-10 lg:p-5">
            <p className=" text-4xl lg:text-xl font-medium text-gray-200">
              Video Source
            </p>

            <p className="flex items-center gap-x-2">
              <span className="border border-white border-opacity-[20%] px-4 text-center py-2 lg:py-1 text-blue-600 bg-black rounded-md text-xl lg:text-sm">
                Report Error
              </span>
              <span className="text-gray-400 font-medium text-2xl lg:text-base">
                112 views
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieTvYoutubeTrailer;
