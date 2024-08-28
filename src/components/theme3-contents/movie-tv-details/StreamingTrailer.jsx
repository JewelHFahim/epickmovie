/* eslint-disable react/prop-types */
import { useState } from "react";
import MovieTvYoutubeTrailer from "./MovieTvYoutubeTrailer";
import M3U8Player from "./M3U8Player";
import StreamTrailerButton from "../../../utils/theme3/StreamTrailerButton";
import StreamReport from "../../../utils/theme3/StreamReport";
import IframeMoviePlayer from "./IframeMoviePlayer";
// import AutoQualitySelectM3U8Player from "./AutoQualitySelectM3U8Player";

const StreamingTrailer = ({ details }) => {
  const [status, setStatus] = useState(null);

  // const source = details?.download_links?.find((link) => link?.type === "stream") ?.download_url ?? "";
  const source = "https://cloudyhost.online/proxy/live-cdn.tsports.com/live-02/master_1080.m3u8"

  return (
    <div className="border border-white border-opacity-[5%] bg-black bg-opacity-[10%]">
 
     {/* =================>> Players <<================== */}
      {status === "trailer" && (
        <MovieTvYoutubeTrailer url={details?.youtube_trailer} /> //Youtube Trailer
      )}

      {status === "stream" && ( //M3U8 PLayer
        <div>
          <M3U8Player source={source} details={details} />
          {/* <AutoQualitySelectM3U8Player source={source} details={details} /> */}

          <StreamReport />
        </div>
      )}

      {status === "iframe" && (
        <IframeMoviePlayer url={details?.youtube_trailer} />
      )}

      {/* =================>> Buttons <<================== */}
      {details?.youtube_trailer && (
        <StreamTrailerButton
          title="youtube.com"
          btn={true}
          context="trailer"
          setStatus={setStatus}
          active={status === "trailer"}
        >
          Watch Trailer
        </StreamTrailerButton>
      )}

      <hr className="w-[92.5%] mx-auto border border-white border-opacity-[10%] " />

      {source && (
        <>
          <StreamTrailerButton
            title="terabox.com"
            btn={false}
            context="stream"
            setStatus={setStatus}
            active={status === "stream"}
          >
            Watch Now
          </StreamTrailerButton>
          <hr className="w-[92.5%] mx-auto border border-white border-opacity-[10%] " />
        </>
      )}

      {status === "iframe" && (
        <StreamTrailerButton
          title="Fastest Player"
          btn={false}
          context="stream"
          setStatus={setStatus}
          active={status === "stream"}
        >
          Watch Now
        </StreamTrailerButton>
      )}
    </div>
  );
};

export default StreamingTrailer;
