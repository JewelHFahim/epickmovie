import { Link } from "react-router-dom";
import FeatureSticker from "../../utils/feature-sticker/FeatureSticker";
import "./MovieCard.css";
import { FaPlay } from "react-icons/fa";
import { useEffect, useState } from "react";

const MovieCard = ({ item, redirect }) => {
  const [url, setUrl] = useState();

  useEffect(() => {
    const encodedTitle = encodeURIComponent(item?.post_title).toLowerCase();
    setUrl(`${redirect}/${encodedTitle}`);
  }, [redirect, item?.post_title]);

  return (
    <div className="bg-gradient-to-t from-[#ff1818] to-[#fdd506] w-[180px] min-h-[100%] lg:w-[205px] lg:h-[460px] p-[1.5px] lg:p-[2px] rounded-[10px] relative playBtnCont">
      
      <Link to={url} className={`w-full h-full rounded-[10px] flex flex-col items-center bg-[#27272A] overflow-hidden relative`}>
        <img src={item?.poster_image_url} alt="" className="w-full rounded-tr-[10px] rounded-tl-[10px] posterImg"/>
        <p className="text-center text-[14px] text-white font-[700] p-2 font-alef"> {item?.post_title} </p>
        <div className="playBtn"> <FaPlay className="text-[50px] text-white" /> </div>
      </Link>

      {item?.stickerLabel?.length > 0 && (
        <div className="absolute left-2 top-2">
          <FeatureSticker item={item} />
        </div>
      )}
    </div>
  );
};

export default MovieCard;
