import { FaPlay } from "react-icons/fa";
import "./Theme1Card.css";
import { useCleanedTitle, useRedirect, useSiteConfig } from "../../../utils/configHooks/ConfigHooks";

const Theme1Card = ({ item }) => {

  const { maskLink } = useSiteConfig();
  const { url } = useCleanedTitle(item);
  const handleRedirect = useRedirect(url, maskLink);

  return (
    <div onClick={() => handleRedirect()}>

      <div className="relative w-[165px] h-[260px] rounded-[10px] bg-slate-400 overflow-hidden flex flex-col justify-center items-center posterImg playBtnCont cursor-pointer">
        <img
          src={item?.poster_image_url}
          alt=""
          className="object-cover w-full h-full posterImg"
        />

        {/* Pixel/Print Quality  */}
        <div className="z-50 absolute top-2 right-2 w-[48px] h-[20px] rounded-[3px] bg-[#FFB800] uppercase text-[10px] text-black flex justify-center items-center">
          web-dl
        </div>

        {/* Title */}
        <div className="z-50 absolute bottom-2 text-white">
          <p className="text-[13px] font-bold text-center">
            {item?.post_title}
          </p>
        </div>

        <div className="z-10 w-full h-full absolute bg-gradient-to-t from-black posterImg"></div>

        <div className="playBtn">
          <FaPlay className="text-[30px] text-white" />
        </div>
      </div>

    </div>
  );
};

export default Theme1Card;
