/* eslint-disable react/prop-types */
import StreamReport from "../../../utils/theme3/StreamReport";


const IframeMoviePlayer = ({ url }) => {
  return (
    <div className="p-1">
      
      <iframe
        width="100%"
        height="450"
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      {/* ==============>> Stream Report <<============== */}
      <StreamReport />
    </div>
  );
};

export default IframeMoviePlayer;
