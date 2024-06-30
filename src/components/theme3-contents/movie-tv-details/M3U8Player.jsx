/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import Hls from "hls.js";
import "./M3U8Player.css";

const M3U8Player = ({ details }) => {

  // const src = details?.download_links?.find(link=> link?.type === "stream")?.download_url ?? "";
  // console.log("url",src)


  // const src = "http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8";
  const src = "https://live-cdn.tsports.com/live-02/index.m3u8";

  const videoRef = useRef(null);
  const hlsRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (Hls.isSupported()) {
      hlsRef.current = new Hls();
      hlsRef.current.loadSource(src);
      hlsRef.current.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, [src]);

  const handlePlayButtonClick = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="video-container w-full h-[450px] overflow-hidden flex justify-center items-center relative">
      <video
        ref={videoRef}
        controls
        width="100%"
        height="100%"
        poster={details?.backdrop_image}
        className="video-player"
      />
      {!isPlaying && (
        <button
          className="play-button absolute inset-0 flex items-center justify-center bg-black bg-opacity-[60%] text-blue-500 text-5xl "
          onClick={handlePlayButtonClick}
        >
          <BsPlayCircle className="hover:text-6xl transition-all ease-in-out" />
        </button>
      )}

   
    </div>
  );
};

export default M3U8Player;
