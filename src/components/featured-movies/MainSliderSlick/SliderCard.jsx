/* eslint-disable react/prop-types */
import { FaPlay } from "react-icons/fa";
import "./SliderCard.css";
import {
  useCleanedTitle,
  useRedirect,
  useSiteConfig,
} from "../../../utils/configHooks/ConfigHooks";

const SliderCard = ({ item }) => {
  const { url } = useCleanedTitle(item);
  const { maskLink } = useSiteConfig();
  const handleRedirect = useRedirect(url, maskLink);

  return (
    <div className="bg-gradient-to-t from-[#ff1818] to-[#fdd506] lg:w-[185px] h-[420px] lg:h-[345px] p-[4px] lg:p-[2px] rounded-[10px] relative playBtnCont overflow-hidden">
      <button
        onClick={() => handleRedirect()}
        className={`w-full h-full rounded-[10px] flex flex-col items-center bg-[#27272A] overflow-hidden relative cursor-pointer`}
      >
        <img
          src={item?.poster_image_url}
          alt="poster"
          className="w-full rounded-tr-[10px] rounded-tl-[10px] posterImg lg:h-[65%] object-cover lg:object-cover"
        />

        <p className="hidden lg:block lg:h-[35%] text-center text-white font-[700] text-[25px] lg:leading-[20px] lg:text-[12px] p-4 lg:p-2 font-alef ">
          {item?.post_title?.length <= 150
            ? item?.post_title
            : `${item?.post_title?.slice(0, 150)} ...`}
        </p>

        <p className="text-white bg-black bg-opacity-[40%] font-[700] text-[30px] absolute lg:hidden bottom-5 p-8">
          {item?.post_title?.length <= 150
            ? item?.post_title
            : `${item?.post_title?.slice(0, 150)} ...`}
        </p>

        <div className="playBtn">
          <FaPlay className="text-[50px] text-white" />
        </div>
      </button>

      {/* {item?.stickerLabel?.length > 0 && (
        <div className="absolute left-2 top-4">
          <FeatureSticker item={item} />
        </div>
      )} */}
    </div>
  );
};

export default SliderCard;
