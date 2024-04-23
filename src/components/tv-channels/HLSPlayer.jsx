/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import Hls from "hls.js";

const HLSPlayer = ({ singleCategory }) => {
  
  const videoSrc = singleCategory?.data?.link?.map((link) => link.stream_url) || [];
  const src = videoSrc?.length > 0 ? videoSrc[0] : "";

  const videoRef = useRef(null);
  const hlsRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (Hls.isSupported()) {
      hlsRef.current = new Hls();
      hlsRef.current.loadSource(src);
      hlsRef.current.attachMedia(video);
      hlsRef.current.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.addEventListener("loadedmetadata", () => {
        video.play();
      });
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, [src]);
  
  return (
    <div className="w-full h-full min-w-full lg:min-w-[1037px] lg:max-w-[1037px] rounded-[10px] overflow-hidden border-2 border-yellow-600 flex justify-center items-center">
      <video ref={videoRef} controls autoPlay width="100%" height="100%" />
    </div>
  );
};

export default HLSPlayer;





// import React, { useEffect, useRef, useState } from "react";
// import Hls from "hls.js";

// const HLSPlayer = ({ singleCategory }) => {
//   const videoSrc =
//     singleCategory?.data?.link?.map((link) => link.stream_url) || [];
//   const src = videoSrc?.length > 0 ? videoSrc[0] : "";

//   const videoRef = useRef(null);
//   const hlsRef = useRef(null);
//   const [qualities, setQualities] = useState([]);
//   const [selectedQuality, setSelectedQuality] = useState(null);

//   useEffect(() => {
//     const video = videoRef.current;

//     if (Hls.isSupported()) {
//       hlsRef.current = new Hls();
//       hlsRef.current.loadSource(src);
//       hlsRef.current.attachMedia(video);
//       hlsRef.current.on(Hls.Events.MANIFEST_PARSED, () => {
//         const availableQualities = hlsRef.current.levels.map(
//           (level, index) => ({
//             index,
//             height: level.height,
//             bitrate: level.bitrate,
//           })
//         );
//         setQualities(availableQualities);
//         setSelectedQuality(availableQualities[0]);
//         video.play();
//       });
//     } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
//       video.src = src;
//       video.addEventListener("loadedmetadata", () => {
//         video.play();
//       });
//     }

//     return () => {
//       if (hlsRef.current) {
//         hlsRef.current.destroy();
//       }
//     };
//   }, [src]);

//   const handleQualityChange = (index) => {
//     hlsRef.current.currentLevel = index;
//     setSelectedQuality(qualities[index]);
//   };

//   return (
//     <div className="container">
//       <video
//         ref={videoRef}
//         width="100%"
//         poster=""
//         preload="none"
//         controlsList="nodownload"
//         controls
//         playsInline
//       />
//       <div className="quality-dropdown">
//         <select
//           value={selectedQuality?.index}
//           onChange={(e) => handleQualityChange(parseInt(e.target.value))}
//         >
//           {qualities.map((quality) => (
//             <option key={quality.index} value={quality.index}>
//               {quality.height}p - {Math.round(quality.bitrate / 1000)} kbps
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default HLSPlayer;
