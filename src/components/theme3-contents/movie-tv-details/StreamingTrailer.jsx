/* eslint-disable react/prop-types */
import { useState } from "react";
import MovieTvYoutubeTrailer from "./MovieTvYoutubeTrailer";
import M3U8Player from "./M3U8Player";
import StreamTrailerButton from "../../../utils/theme3/StreamTrailerButton";
import StreamReport from "../../../utils/theme3/StreamReport";

const StreamingTrailer = ({ details }) => {
  const [status, setStatus] = useState(null);

  return (
    <div className="border border-white border-opacity-[5%] bg-black bg-opacity-[10%]">
      {/* ==============>> Stream Report <<============== */}
      {status === null && <StreamReport />}

      {/* =================>> Players <<================== */}

      {status === "trailer" && (
        <MovieTvYoutubeTrailer url={details?.youtube_trailer} />
      )}
      {status === "stream" && (
        <div>
          <M3U8Player details={details} />
          <StreamReport />
        </div>
      )}


      {/* =================>> Buttons <<================== */}
      <StreamTrailerButton
        title="youtube.com"
        btn={true}
        context="trailer"
        setStatus={setStatus}
        active={status === "trailer"}
      >
        Watch Trailer
      </StreamTrailerButton>

      <hr className="w-[92.5%] mx-auto border border-white border-opacity-[10%] " />

      <StreamTrailerButton
        title="terabox.com"
        btn={false}
        context="stream"
        setStatus={setStatus}
        active={status === "stream"}
      >
        Watch Now
      </StreamTrailerButton>
    </div>
  );
};

export default StreamingTrailer;
