/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Hls from "hls.js";
import Plyr from "plyr";
import "./M3U8Player.css";

const M3U8Player = ({ source, details }) => {

  useEffect(() => {
    //  const source = details?.download_links?.find(link=> link?.type === "stream")?.download_url ?? "";
     console.log(source)


    const videoElement = document.querySelector("video");

    if (!videoElement) {
      console.error("No video element found!");
      return;
    }

    // Initialize Plyr player
    const player = new Plyr(videoElement, {
      captions: { active: true, update: true, language: "en" },
      quality: {
        default: 576,
        options: [2160, 1440, 1080, 720, 576, 480, 360, 240],
        forced: true,
        onChange: (e) => updateQuality(e),
      },
    });

    // Check if HLS.js is supported
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(source);
      hls.attachMedia(videoElement);
      window.hls = hls;

      // Handle changing captions
      player.on("languagechange", () => {
        setTimeout(() => (hls.subtitleTrack = player.currentTrack), 50);
      });
    } else if (videoElement.canPlayType("application/vnd.apple.mpegurl")) {
      // For Safari, directly set the video source
      videoElement.src = source;
    } else {
      console.error("HLS.js is not supported, and video tag can't play HLS.");
    }

    // Clean up Plyr instance on unmount
    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);


    // Define the updateQuality function
    const updateQuality = (quality) => {
      if (window.hls) {
        window.hls.currentLevel = window.hls.levels.findIndex(
          (level) => level.height === quality
        );
      }
    };

  return (
    <div className=" w-full h-[450px] ">
      <video
        width="100%"
        height="100%"
        controls
        crossOrigin="anonymous"
        playsInline
        poster={details?.backdrop_image}
      ></video>
    </div>
  );
};

export default M3U8Player;
