// import { useEffect, useRef } from "react";
// import Plyr from "plyr";
// import Hls from "hls.js";
// import "plyr/dist/plyr.css";

// const PlyrPlayer = ({ singleCategory }) => {
//   const videoSrc =
//     singleCategory?.data?.link?.map((link) => link.stream_url) || [];
//   const source = videoSrc?.length > 0 ? videoSrc[0] : "";

//   const videoRef = useRef(null);

//   useEffect(() => {
//     const videoElement = videoRef.current;

//     const customOptions = {
//       quality: {
//         default: 720,
//         options: [720, 480, 360],
//         forced: true,
//         onChange: updateQuality,
//       },
//       speed: {
//         selected: 1,
//         options: [0.5, 1, 1.5, 2],
//       },
//       controls: [
//         "play-large",
//         "restart",
//         "rewind",
//         "play",
//         "fast-forward",
//         "progress",
//         "current-time",
//         "duration",
//         "mute",
//         "volume",
//         "captions",
//         "settings",
//         "pip",
//         "airplay",
//         // "download",
//         "fullscreen",
//         "quality", // Add quality switch option
//       ],
//     };

//     const hls = new Hls();
//     hls.loadSource(source);
//     hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
//       const availableQualities = hls.levels.map((l) => l.height);
//       customOptions.quality.options = availableQualities;
//       const playerOptions = Object.assign({}, Plyr.defaults, customOptions); // Merge custom options with Plyr defaults
//       const player = new Plyr(videoElement, playerOptions);
//     });
//     hls.attachMedia(videoElement);

//     return () => {
//       hls.destroy();
//     };
//   }, [source]);

//   const updateQuality = (newQuality) => {
//     window.hls.levels.forEach((level, levelIndex) => {
//       if (level.height === newQuality) {
//         window.hls.currentLevel = levelIndex;
//       }
//     });
//   };

//   return (
//     <div className="min-w-[1065px] min-h-[510px]">
//       <video ref={videoRef} controls height="100%" width="100%"></video>
//     </div>
//   );
// };

// export default PlyrPlayer;

import React, { useEffect } from "react";

const PlyrPlayer = ({ singleCategory }) => {
  const videoSrc = singleCategory?.data?.link?.map((link) => link.stream_url) || [];
  const sources = videoSrc?.length > 0 ? videoSrc[0] : "";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/hls.js@latest";
    script.async = true;
    document.body.appendChild(script);

    const plyrScript = document.createElement("script");
    plyrScript.src = "https://cdn.plyr.io/3.7.8/plyr.js";
    plyrScript.async = true;
    document.body.appendChild(plyrScript);

    script.onload = plyrScript.onload = () => {
      const video = document.getElementById("player");
      const source = sources;
      const customOptions = {
        quality: {
          default: 720,
          options: [720, 480, 360],
          forced: true,
          onChange: (e) => updateQuality(e),
        },
        speed: {
          selected: 1,
          options: [0.5, 1, 1.5, 2],
        },
        controls: [
          "play-large",
          "restart",
          "rewind",
          "play",
          "fast-forward",
          "progress",
          "current-time",
          "duration",
          "mute",
          "volume",
          "captions",
          "settings",
          "pip",
          "airplay",
        //   "download",
          "fullscreen",
          "quality", // Add quality switch option
        ],
      };

      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(source);
        hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
          const availableQualities = hls.levels.map((l) => l.height);
          customOptions.quality.options = availableQualities;
          const playerOptions = Object.assign({}, Plyr.defaults, customOptions); // Merge custom options with Plyr defaults
          const player = new Plyr(video, playerOptions);
        });
        hls.attachMedia(video);
        window.hls = hls;
      }

      function updateQuality(newQuality) {
        window.hls.levels.forEach((level, levelIndex) => {
          if (level.height === newQuality) {
            window.hls.currentLevel = levelIndex;
          }
        });
      }
    };

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(plyrScript);
    };
  }, []);

  return (
    <div className="w-full h-full min-w-full lg:min-w-[1037px] lg:max-w-[1037px] rounded-[10px] overflow-hidden border-2 border-yellow-600 flex justify-center items-center">
      <video id="player" controls width="100%" height="100%"></video>
    </div>
  );
};

export default PlyrPlayer;
