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
