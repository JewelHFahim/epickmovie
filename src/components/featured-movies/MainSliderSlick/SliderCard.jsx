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
    <div className="bg-gradient-to-t from-[#ff1818] to-[#fdd506] h-[550px] lg:h-[345px] lg:w-[185px] p-[4px] lg:p-[2px] rounded-[10px] relative playBtnCont overflow-hidden">
      <button
        onClick={() => handleRedirect()}
        className={`w-full h-full rounded-[10px] flex flex-col items-center bg-[#27272A] overflow-hidden relative cursor-pointer`}
      >
        <img
          src={item?.poster_image_url}
          alt="poster"
          className="w-full rounded-tr-[10px] rounded-tl-[10px] posterImg h-full lg:h-[65%] object-cover lg:object-cover"
        />

        <p className="hidden lg:block lg:h-[35%] text-center text-white font-[700] leading-[20px] text-[13px] p-4 lg:p-2 font-alef ">
          {item?.post_title?.length <= 150
            ? item?.post_title
            : `${item?.post_title?.slice(0, 150)} ...`}
        </p>

        <p className="text-white bg-black bg-opacity-[70%] font-[700] text-[25px] absolute lg:hidden bottom-0 p-2 min-h-[45%] w-full">
          {item?.post_title?.length <= 100
            ? item?.post_title
            : `${item?.post_title?.slice(0, 100)} ...`}
        </p>

        <div className="playBtn">
          <FaPlay className="text-[50px] text-white" />
        </div>
      </button>
    </div>
  );
};

export default SliderCard;
