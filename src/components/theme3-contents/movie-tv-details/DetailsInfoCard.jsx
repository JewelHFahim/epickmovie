/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { formatDate } from "../FormateDateTheme3";
import { FaStar, FaUserCircle } from "react-icons/fa";

const DetailsInfoCard = ({ details, detaislLoading }) => {
  const customizedDate = details?.release_date
    ? formatDate(details.release_date)
    : "No date available";

  return (
    <div className="mt-5 flex flex-col lg:flex-row gap-4 shadow-sm border-b border-gray-200 pb-5 border-opacity-[20%]">
      {detaislLoading ? (
        <div className="mx-auto w-[550px] h-[800px] lg:w-[270px] lg:h-[300px] bg-slate-700 animate-pulse"></div>
      ) : (
        <img
          src={details?.poster_image_url}
          alt=""
          className="mx-auto w-[550px] h-[800px] lg:w-[200px] lg:h-[300px] object-cover"
        />
      )}

      <div className="w-full">
        {detaislLoading ? (
          <div className="w-full h-[70px] bg-slate-700 animate-pulse"></div>
        ) : (
          <h1 className=" text-[40px] lg:text-[30px] lg:leading-[38px] text-gray-200 font-medium">
            {details?.post_title}
          </h1>
        )}

        {detaislLoading ? (
          <div className="mt-2 h-[30px]  bg-slate-700 animate-pulse"></div>
        ) : (
          <div className="text-gray-400 flex items-center gap-x-4 border-b pb-4 border-gray-700 text-xl lg:text-base">
            <p>{customizedDate}</p>
            <p>{details?.country ? details?.country : "N/A"}</p>
            <p>{details?.runtime} Min</p>
          </div>
        )}

        {detaislLoading ? (
          <div className="mt-4 h-[60px] bg-slate-700 animate-pulse"></div>
        ) : (
          <div className="py-4 flex items-center gap-x-3 border-b border-gray-700">
            <p className=" text-[40px] lg:text-[30px] font-medium text-gray-200 max-w-fit px-4 text-center bg-gray-500 bg-opacity-[20%] rounded-md">
              {details?.imdb_rating}
            </p>
            <div className="flex gap-x-4">
              <div>
                <p className="flex items-center gap-x-1 text-2xl lg:text-lg text-blue-600">
                  {Array.from({ length: 10 }).map((item, i) => (
                    <FaStar key={i} />
                  ))}
                </p>
                <p className="flex items-center gap-x-1 text-lg lg:text-sm mt-[2px] text-gray-400">
                  <FaUserCircle />
                  579 votes
                </p>
              </div>

              <p className="text-gray-200 h-[40px] lg:h-[25px] flex justify-center items-center bg-gray-500 bg-opacity-[20%] px-4 border text-xl lg:text-sm rounded-md">
                Your rating: 10
              </p>
            </div>
          </div>
        )}
        {detaislLoading ? (
          <div className="mt-4">
            {Array.from({ length: 2 }).map((item, i) => (
              <div
                key={i}
                className="mt-2 h-[30px]  bg-slate-700 animate-pulse"
              ></div>
            ))}
          </div>
        ) : (
          <div className="mt-2">
            {/* Directors */}
            <p className="flex items-start gap-x-1 text-gray-400 text-sm">
              <span className="text-gray-200 text-2xl lg:text-base"> Directors: </span>
              <span>
                {details?.additional_data?.dtdirector?.map((item, i) => (
                  <Link to="" key={i} className="underline mx-1 text-xl lg:text-base">
                    {item?.term?.name}
                  </Link>
                ))}
              </span>
            </p>

            {/* Actors */}
            <p className="mt-2 flex items-start gap-x-1 text-gray-400 text-sm">
              <span className="text-gray-200 text-2xl lg:text-base">Actors:</span>
              <span>
                {details?.additional_data?.dtcast?.map((item, i) => (
                  <Link to="" key={i} className="underline mx-1 text-xl lg:text-base">
                    {item?.term?.name}
                  </Link>
                ))}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsInfoCard;
