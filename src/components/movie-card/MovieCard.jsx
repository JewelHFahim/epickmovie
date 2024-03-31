/* eslint-disable react/prop-types */
import FeatureSticker from "../../utils/feature-sticker/FeatureSticker";
import "./MovieCard.css";
import { FaPlay } from "react-icons/fa";
import CachedImage from "../../utils/cache-img/CachedImage";
import {
  useCleanedTitle,
  useRedirect,
  useSiteConfig,
} from "../../utils/configHooks/ConfigHooks";

const MovieCard = ({ item }) => {
  const { maskLink } = useSiteConfig();
  const { url } = useCleanedTitle(item);
  const handleRedirect = useRedirect(url, maskLink);

  return (
    <div className="bg-gradient-to-t from-[#ff1818] to-[#fdd506] w-full h-full lg:h-[338px] lg:max-h-[338px] p-[4px] lg:p-[2px] rounded-[10px] relative playBtnCont">
      <button onClick={() => handleRedirect()}
        className={`w-full h-full rounded-[10px] flex flex-col items-center bg-[#27272A] overflow-hidden relative cursor-pointer`}>
        {/* <CachedImage src={item?.poster_image_url}
          imgStyle="w-full rounded-tr-[10px] rounded-tl-[10px] posterImg"
        /> */}
        <img src={item?.poster_image_url} alt="poster" className="w-full rounded-tr-[10px] rounded-tl-[10px] posterImg h-[70%]"/>

        <p className="h-[30%] text-center text-white font-[700] text-[25px] lg:text-[14px] p-4 lg:p-2 font-alef ">
          {item?.post_title?.length <= 40 ? item?.post_title : `${item?.post_title?.slice(0, 40)} ...` }
        </p>

        <div className="playBtn">
          <FaPlay className="text-[50px] text-white" />
        </div>
      </button>

      {item?.stickerLabel?.length > 0 && (
        <div className="absolute left-2 top-4">
          <FeatureSticker item={item} />
        </div>
      )}
    </div>
  );
};

export default MovieCard;
