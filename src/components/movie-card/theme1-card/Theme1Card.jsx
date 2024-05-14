/* eslint-disable react/prop-types */
import { FaPlay } from "react-icons/fa";
import "./Theme1Card.css";
import {
  useCleanedTitle,
  useRedirect,
  useSiteConfig,
} from "../../../utils/configHooks/ConfigHooks";

const Theme1Card = ({ item, isLoading }) => {

  const { maskLink } = useSiteConfig();
  const { url } = useCleanedTitle(item);
  
  const handleRedirect = useRedirect(url, maskLink);

  return (
    <div onClick={() => handleRedirect()}>
      <div className="bg-gradient-to-t from-[#ff1818] to-[#fdd506] p-[3px] lg:p-[1.5px] overflow-hidden rounded-[10px] flex justify-center items-center">
        <div className="relative min-h-full w-full h-[415px] lg:w-[180px] lg:h-[280px] rounded-[10px] overflow-hidden flex flex-col justify-center items-center playBtnCont cursor-pointer bg-slate-600">
          {isLoading ? (
            <div className="min-w-[270px] h-[385px] bg-slate-600"></div>
          ) : (
            <img
              src={item?.poster_image_url}
              alt="Poster Img"
              className="object-cover w-full h-full rounded-[10px] posterImg"
            />
          )}

          {/* Pixel/Print Quality  */}
          {item?.stickerLabel && (
            <div className="z-50 absolute top-2 right-2 px-2 py-1 rounded-[3px] font-bold bg-[#FFB800] uppercase lg:text-[10px] text-black flex justify-center items-center">
              {item?.stickerLabel}
            </div>
          )}

          {/* Title */}
          <div className="z-50 absolute bottom-2 text-white px-1">
            <p className="text-[20px] lg:text-[13px] font-bold text-center title">
              {item?.post_title}
            </p>
          </div>

          <div className="z-10 w-full h-full absolute bg-gradient-to-t from-black"></div>

          <div className="playBtn">
            <FaPlay className="text-[30px] text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme1Card;
