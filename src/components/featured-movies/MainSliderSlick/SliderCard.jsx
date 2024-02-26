/* eslint-disable react/prop-types */
import { FaPlay } from "react-icons/fa";
import "./SliderCard.css";
import {
  useCleanedTitle,
  useMaskLink,
  useRedirect,
} from "../../../utils/configHooks/ConfigHooks";

const SliderCard = ({ item }) => {
  const { url } = useCleanedTitle(item);
  const maskLink = useMaskLink();
  const handleRedirect = useRedirect(url, maskLink);

  return (
    <div className="mainSlider bg-gradient-to-t from-[#ff1818] to-[#fdd506] p-[1.5px] h-[460px] rounded-[10px] relative playBtnCont">
      <button
        onClick={() => handleRedirect()}
        className={`w-full h-full rounded-[10px] flex flex-col items-center bg-[#27272A] overflow-hidden relative`}
      >
        <img
          src={item?.poster_image_url}
          className="w-full  rounded-tr-[10px] rounded-tl-[10px] posterImg"
        />

        <p className="hidden lg:block text-center  text-white font-[700] text-[33px] lg:text-[16px] p-4 lg:p-2 font-alef">
          {item?.post_title?.length <= 80
            ? item?.post_title
            : item?.post_title?.slice(0, 80)}
        </p>

        <p className="absolute lg:hidden text-center bg-black bg-opacity-[50%] mx-auto bottom-5 p-5 max-w-[80%]  text-white font-[700] text-[33px] lg:text-[16px] lg:p-2 font-alef">
          {item?.post_title?.length <= 80
            ? item?.post_title
            : item?.post_title?.slice(0, 80)}
        </p>

        <div className="playBtn">
          <FaPlay className="text-[50px] text-white" />
        </div>
      </button>
    </div>
  );
};

export default SliderCard;
