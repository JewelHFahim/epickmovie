/* eslint-disable react/prop-types */
import { FaPlay, FaStar } from "react-icons/fa";
import "./CardTheme3.css";
import {
  useCleanedTitle,
  useRedirect,
  useSiteConfig,
} from "../../../utils/configHooks/ConfigHooks";

import { formatDate } from "../FormateDateTheme3";

const CardTheme3 = ({ item }) => {
  
  const { maskLink } = useSiteConfig();
  const { url } = useCleanedTitle(item);
  const handleRedirect = useRedirect(url, maskLink);

  const customizedDate = item?.updated_at
    ? formatDate(item.updated_at)
    : "No date available";

  return (
    <div className="w-full h-full lg:w-[160px] lg:h-[285px] bg-gradient-to-t from-[#ff1818] to-[#fdd506] p-[2px]">
      <button
        onClick={() => handleRedirect()}
        className="h-full w-full cardContainer cursor-pointer bg-[#27272A]"
      >
        <div className="w-full h-[70.5%] relative imgContainer overflow-hidden">
          <img
            src={item?.poster_image_url}
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute right-1 bottom-1 flex items-center text-sm gap-x-1 bg-black bg-opacity-[40%] px-1">
            <FaStar className="text-yellow-500" />

            <p className="text-white">5.7</p>
          </div>

          <div className="absolute text-white text-4xl top-0 w-full h-full playBtn">
            <FaPlay />
          </div>
        </div>

        <div className="mt-2 lg:mt-1 h-[28%] text-left px-1">
          <p className="text-[30px] leading-[38px] lg:leading-normal lg:text-[14px] text-[#D8D8D8] font-bold">
            {item?.post_title?.length >= 28
              ? `${item?.post_title.slice(0, 28)} ...`
              : item?.post_title}
          </p>
          <p className="text-[#D8D8D8] text-[20px] lg:text-[9px] mt-1">
            {customizedDate}
          </p>
        </div>

      </button>
    </div>
  );
};

export default CardTheme3;
