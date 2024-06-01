/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  useCleanedTitle,
  useRedirect,
  useSiteConfig,
} from "../../../utils/configHooks/ConfigHooks";

const SideLatestMovieCard = ({ item }) => {
  const { maskLink } = useSiteConfig();
  const { url } = useCleanedTitle(item);
  const handleRedirect = useRedirect(url, maskLink);

  return (
    <Link
      to=""
      onClick={() => handleRedirect()}
      className="flex gap-x-2 bg-black bg-opacity-[20%]"
    >
      <img
        src={item?.poster_image_url}
        alt=""
        className=" w-[200px] h-[260px] lg:w-[70px] lg:h-[100px]"
      />

      <div className="py-1">
        <p className="text-[40px] lg:text-base text-slate-300">
          {item?.post_im_title?.length <= 25
            ? item?.post_im_title
            : `${item?.post_im_title?.slice(0, 25)} ...`}
        </p>

        <p className="mt-2 flex items-center gap-x-2">
          <span className="flex items-center gap-x-1 px-1 text-[20px] lg:text-sm border text-gray-600 w-[80px] lg:w-[55px] rounded-sm border-slate-600">
            <FaStar />
            7.2
          </span>
          <span className="text-[25px] lg:text-sm text-gray-500">
            {item?.release_date.slice(0, 4)}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default SideLatestMovieCard;
