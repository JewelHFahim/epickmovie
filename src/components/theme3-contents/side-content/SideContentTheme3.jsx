import telegram from "../../../assets/join telegram.png";
import facebook from "../../../assets/join fb.png";
import { Link } from "react-router-dom";
import { useSiteConfig } from "../../../utils/configHooks/ConfigHooks";
import {
  useGenreListQuery,
  useMovieListTheme3Query,
} from "../../../redux/features/movies/movieApi";
import { FaStar } from "react-icons/fa";
import ads from "../../../assets/ads.png";
import { FaCircleDot } from "react-icons/fa6";

const SideContentTheme3 = () => {
  const { telegramLink } = useSiteConfig();
  const { data: genreList } = useGenreListQuery();
  const { data: movieList, isLoading: movieLoading } = useMovieListTheme3Query({
    quantity: 25,
    page: 1,
  });

  return (
    <div className="px-2">
      {/* =============>> SEARCH <<============= */}
      <div className="h-[80px] lg:h-[35px] flex justify-between">
        <input type="text" className="h-full w-[70%] focus:outline-none px-2" />
        <button className="bg-white h-full text-[30px] lg:text-base w-[28%] hover:bg-gray-200 transition-all ease-in-out">
          Search
        </button>
      </div>

      {/* ============>> JOIN US <<============= */}
      <div className="border-2 border-red-700 mt-8 py-5 p-2">
        {/* Telegram */}

        <Link
          to={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col justify-center items-center gap-y-2"
        >
          <h2 className="text-[40px] lg:text-[25px] text-orange-600 font-medium">
            JOIN US ON TELEGRAM
          </h2>
          <img src={telegram} alt="" className="w-[80%]" />
        </Link>

        {/* Facebook */}
        <div className="flex flex-col justify-center items-center gap-y-2 mt-5">
          <h2 className="text-[40px] lg:text-[25px] text-orange-600 font-medium">
            JOIN US ON FACEBOOK
          </h2>
          <img src={facebook} alt="" className="w-[80%]" />
        </div>
      </div>

      {/* ========>> LATEST MOVIES/TV <<======== */}
      <div className="mt-7">
        <h3 className=" text-[40px] lg:text-lg font-medium text-gray-400">
          Latest Movies & Series
        </h3>

        <div className="mt-2 flex flex-col gap-y-3">
          {movieLoading
            ? Array.from({ length: 7 }).map((item, i) => (
                <div
                  key={i}
                  className="w-fll h-[100px] bg-slate-700 animate-pulse"
                ></div>
              ))
            : movieList?.data?.data?.slice(0, 7)?.map((item, i) => (
                <Link
                  key={i}
                  to=""
                  className="flex gap-x-2 bg-black bg-opacity-[20%]"
                >
                  <img
                    src={item?.poster_image_url}
                    alt=""
                    className=" w-[200px] h-[260px] lg:w-[70px] lg:h-[100px]"
                  />

                  <div className="py-1">
                    <p className="text-[30px] lg:text-base text-slate-300">
                      {item?.post_im_title?.length <= 25
                        ? item?.post_im_title
                        : `${item?.post_im_title?.slice(0, 25)} ...`}
                    </p>

                    <p className="mt-2 flex items-center gap-x-2">
                      <span className="flex items-center gap-x-1 px-1 text-[20px] lg:text-sm border text-gray-600 w-[80px] lg:w-[55px] rounded-sm border-slate-600">
                        <FaStar />
                        7.2
                      </span>
                      <span className="text-[20px] lg:text-sm text-gray-500">
                        {item?.release_date.slice(0, 4)}
                      </span>
                    </p>
                  </div>
                </Link>
              ))}
        </div>
      </div>

      {/* ========== ADVERTISEMENT ============= */}
      <div className="mt-10">
        <img src={ads} alt="" className="w-full lg:h-[260px] object-cover" />
      </div>

      {/* ============>> GENRES <<============== */}
      <div className="mt-8">
        <p className="text-[45px] lg:text-xl font-medium text-gray-500"> Genres </p>
        {
          <ul className="flex flex-col text-slate-300 mt-3 gap-y-2">
            {genreList?.data?.map((menu, i) => (
              <Link
                to={`/terms/${menu?.slug}`}
                key={i}
                className="flex items-center gap-x-1 hover:text-slate-200 transition-all ease-in-out text-slate-400 border-b border-gray-500 pb-1 text-[40px] lg:text-base"
              >
                <FaCircleDot className="text-xs  " />
                <span>{menu?.name}</span>
              </Link>
            ))}
          </ul>
        }
      </div>
    </div>
  );
};

export default SideContentTheme3;
