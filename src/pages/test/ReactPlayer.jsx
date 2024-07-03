/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import Hls from "hls.js";

const ReactPlayer = ({ channel }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (Hls.isSupported()) {
      const hls = new Hls({
        xhrSetup: (xhr, url) => {
          xhr.setRequestHeader("Cookie", channel?.cookie);
          xhr.setRequestHeader("Origin", channel?.origin);
          xhr.setRequestHeader("Referrer", channel.referrer);
        },
      });
      hls.loadSource("https://live-cdn.tsports.com/live-02/index.m3u8");
      hls.attachMedia(videoRef.current);
    }
  }, []);

  return (
    <div className="player-wrapper">
      <video ref={videoRef} controls width="100%" height="100%" />
    </div>
  );
};

export default ReactPlayer;
