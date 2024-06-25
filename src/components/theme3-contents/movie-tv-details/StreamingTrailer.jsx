/* eslint-disable react/prop-types */
import { useState } from "react";
import MovieTvYoutubeTrailer from "./MovieTvYoutubeTrailer";
import M3U8Player from "./M3U8Player";
import StreamTrailerButton from "../../../utils/theme3/StreamTrailerButton";

const StreamingTrailer = ({ details }) => {
  const [status, setStatus] = useState(null);
  console.log(status);

  return (
    <div>
      {status === null && (
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
      )}

      {status === "trailer" && <MovieTvYoutubeTrailer />}
      {status === "stream" && <M3U8Player details={details} />}

      <hr className="border border-white border-opacity-[20%] my-4" />

      <StreamTrailerButton
        title="youtube.com"
        btn={true}
        context="trailer"
        setStatus={setStatus}
        active="trailer"
      >
        Watch Trailer
      </StreamTrailerButton>

      <hr className="w-[90%] mx-auto border border-white border-opacity-[20%] " />

      <StreamTrailerButton
        title="terabox.com"
        btn={false}
        context="stream"
        setStatus={setStatus}
        active="stream"
      >
        Watch Now
      </StreamTrailerButton>
    </div>
  );
};

export default StreamingTrailer;
