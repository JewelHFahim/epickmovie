/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Plyr from "plyr";
import Hls from "hls.js";

const TestPlayer = ({ singleCategory }) => {


    console.log(singleCategory)

    
  useEffect(() => {
    const videoSrc =
      singleCategory?.data?.link?.map((link) => link.stream_url) || [];
    const source = videoSrc?.length > 0 ? videoSrc[0] : "";


    const video = document.querySelector("video");
    let hls = null; // Declare hls variable outside the conditional block

    const player = new Plyr(video, {
      captions: { active: true, update: true, language: "en" },
    });

    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(source);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        player.play(); // Start playing once the manifest is parsed
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = source;
      video.addEventListener("loadedmetadata", () => {
        player.play(); // Start playing once metadata is loaded
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
      player.destroy();
    };
  }, []);

  return (
    <div>
      <div className="w-full h-full min-w-full lg:min-w-[1037px] lg:max-w-[1037px] rounded-[10px] overflow-hidden border-2 border-yellow-600 flex justify-center items-center">
        <video
          controls
          crossOrigin="anonymous" 
        width="100%"
        ></video>
      </div>
    </div>
  );
};

export default TestPlayer;

