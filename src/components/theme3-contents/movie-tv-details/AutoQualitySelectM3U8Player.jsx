/* eslint-disable react/prop-types */

import { useEffect } from "react";
import Hls from "hls.js";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import "./M3U8Player.css";

const AutoQualitySelectM3U8Player = ({ source, details }) => {
  useEffect(() => {
    const videoElement = document.querySelector("video");

    if (!videoElement) {
      console.error("No video element found!");
      return;
    }

    let hls;

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
      hls = new Hls({
        autoStartLoad: true,
        startLevel: -1,
        capLevelToPlayerSize: true,
        maxLoadingDelay: 4,
        maxBufferLength: 30,
        maxMaxBufferLength: 60,
        highBufferWatchdogPeriod: 2,
        maxBufferSize: 60 * 1000 * 1000,
        maxBufferHole: 0.5,
      });

      hls.loadSource(source);
      hls.attachMedia(videoElement);
      window.hls = hls;

      // Handle changing captions
      player.on("languagechange", () => {
        setTimeout(() => {
          hls.subtitleTrack = player.currentTrack;
        }, 50);
      });

      // Listen to quality change event from HLS.js
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        const availableQualities = hls.levels.map((l) => l.height);
        player.quality.options = availableQualities;
        player.quality.default = Math.max(...availableQualities); // Set default to highest available quality
      });

      hls.on(Hls.Events.LEVEL_SWITCHED, function (event, data) {
        const level = hls.levels[data.level];
        if (level) {
          player.quality.current = level.height;
        }
      });

      // Enable ABR
      hls.on(Hls.Events.FRAG_LOADED, function (event, data) {
        const { loaded } = data.frag.stats;
        const loadTime = data.frag.stats.tload - data.frag.stats.trequest;
        const bandwidth = (loaded / loadTime) * 8; // bits per millisecond
        console.log(`Current bandwidth: ${bandwidth.toFixed(2)} bps`);
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
      if (hls) {
        hls.destroy();
      }
    };
  }, [source]);

  // Define the updateQuality function
  const updateQuality = (quality) => {
    if (window.hls) {
      const level = window.hls.levels.findIndex(
        (level) => level.height === quality
      );
      if (level !== -1) {
        window.hls.currentLevel = level;
      }
    }
  };

  return (
    <div className="w-full h-[450px]">
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

export default AutoQualitySelectM3U8Player;


