import { useEffect } from "react";
import Hls from "hls.js";
import Plyr from "plyr";

const PlayerWithQuality = () => {
  useEffect(() => {
    // const source = "http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8";
    const source = "https://81produ-pepp.xyz/4073/tracks-v1a1/mono.m3u8?ip=&token=b1b9de9f7a82744555e34572e9c2be9039ed9081-c755b1b13a67988a9c6eed1eb6123bea-1720618107-1720607307&user=c6886283a4e3ff767e7916de3f95e5a45f77417d";
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
        options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
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

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        const availableQualities = hls.levels.map((level) => level.height);
        player.quality.options = availableQualities;
        player.quality.default = availableQualities[0];
      });

      // Automatically select quality based on bandwidth
      hls.on(Hls.Events.LEVEL_SWITCHED, (event, data) => {
        const quality = hls.levels[data.level].height;
        player.quality = quality;
      });

      // Handle changing quality manually
      player.on("qualitychange", (event) => {
        const quality = event.detail.plyr.quality;
        hls.currentLevel = hls.levels.findIndex(
          (level) => level.height === quality
        );
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
    <div className="w-full h-[450px]">
      <video
        width="100%"
        height="100%"
        controls
        crossOrigin="anonymous"
        playsInline
        poster=""
      ></video>
    </div>
  );
};

export default PlayerWithQuality;
