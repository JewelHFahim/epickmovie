/* eslint-disable react/prop-types */
import FeatureSticker from "../../utils/feature-sticker/FeatureSticker";
import "./MovieCard.css";
import { FaPlay } from "react-icons/fa";
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
    <div className="bg-gradient-to-t from-[#ff1818] to-[#fdd506] w-full h-full lg:h-[345px] lg:max-h-[345px] p-[4px] lg:p-[2px] rounded-[10px] relative playBtnCont">
      <button
        onClick={() => handleRedirect()}
        className={`w-full h-full rounded-[10px] flex flex-col items-center bg-[#27272A] overflow-hidden relative cursor-pointer`}
      >
        <img
          src={item?.poster_image_url}
          alt="poster"
          className="w-full rounded-tr-[10px] rounded-tl-[10px] object-cover posterImg h-[65%]"
        />

        <p className="hidden lg:block h-[35%] text-center text-white font-[700] text-[25px] lg:text-[14px] p-4 lg:p-2 font-alef lg:leading-[18px]">
          {item?.post_title?.length <= 150
            ? item?.post_title
            : `${item?.post_title?.slice(0, 150)} ...`}
        </p>

        <p className="block lg:hidden h-[35%] text-center text-white font-[700] text-[25px] lg:text-[14px] p-4 lg:p-2 font-alef lg:leading-[18px]">
          {item?.post_title?.length <= 80
            ? item?.post_title
            : `${item?.post_title?.slice(0, 80)} ...`}
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
