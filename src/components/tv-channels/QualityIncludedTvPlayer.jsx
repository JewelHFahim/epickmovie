/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Hls from "hls.js";
import Plyr from "plyr";

const QualityIncludedTvPlayer = ({singleCategory}) => {
  console.log(singleCategory)

  useEffect(() => {
     const source = singleCategory?.data?.link?.map((link) => link.stream_url)[0] || "";

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
    <div className="w-full lg:w-[1050px] rounded-[15px] overflow-hidden">
      <video
        width="100%"
        height="100%"
        controls
        crossOrigin="anonymous"
        playsInline
        poster={singleCategory?.data?.thumb_name}
      ></video>
      <h2 className="text-white text-3xl lg:text-lg mt-1 font-semibold">{singleCategory?.data?.channel_name}</h2>
    </div>
  );
};

export default QualityIncludedTvPlayer;
