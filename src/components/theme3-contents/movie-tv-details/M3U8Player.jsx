/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import "./M3U8Player.css";

const M3U8Player = ({ details }) => {
  const src = "http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8";

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
    <div className="video-container mt-4 w-full h-full rounded-[10px] overflow-hidden border-2 border-yellow-600 flex justify-center items-center relative">
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
          className="play-button absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl"
          onClick={handlePlayButtonClick}
        >
          &#9654; {/* Play icon (triangle) */}
        </button>
      )}
    </div>
  );
};

export default M3U8Player;
