/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import Hls from "hls.js";

const DownloadPlayer = () => {
  
//   const videoSrc = singleCategory?.data?.link?.map((link) => link.stream_url) || [];
  const src = "http://cdn-fms.rbs.com.br/vod/hls_sample1_manifest.m3u8";

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
    <div className="w-full lg:w-[500px] mt-5">
      <video ref={videoRef} controls autoPlay width="100%" height="100%" />
    </div>
  );
};

export default DownloadPlayer;
