/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const DetailsInfoCard = ({ details, detaislLoading }) => {
  return (
    <div className="flex flex-col lg:flex-row  gap-5 w-full p-5 lg:border-b">
      {detaislLoading ? (
        <div className="p-12 lg:p-0 object-cover w-[60%] mx-auto h-[650px] lg:w-[170px] lg:h-[230px] bg-slate-600 animate-pulse" />
      ) : (
        <img
          src={details?.poster_image_url}
          alt="Poster Image"
          className="p-12 lg:p-0 object-cover lg:w-[150px] lg:h-[230px]"
        />
      )}

      <div className="w-full">
        <h2 className="text-[35px] lg:text-[22px] font-bold text-[#CDCDCD]">
          {details?.post_title}
        </h2>

        <div className="mt-5 flex flex-col lg:flex-row gap-5">
          <div className="lg:w-[65%] flex flex-col gap-y-1 text-[28px] lg:text-base">
            {/* Genres */}
            <p className="flex items-center gap-x-1">
              <span className="text-white font-bold">Genre:</span>
              <span>
                {details?.additional_data?.genres?.map((item, i) => (
                  <Link to="" key={i} className="text-[#FFA113] underline mx-1">
                    {item?.term?.name},
                  </Link>
                ))}
              </span>
            </p>

            {/* Directors */}
            <p className="flex gap-x-1">
              <span className="text-white font-bold">Director:</span>
              <span>
                {details?.additional_data?.dtdirector?.map((item, i) => (
                  <Link to="" key={i} className="text-[#FFA113] underline mx-1">
                    {item?.term?.name}
                  </Link>
                ))}
              </span>
            </p>

            {/* Actors */}
            <p className="flex gap-x-1">
              <span className="text-white font-bold">Actors:</span>
              <span>
                {details?.additional_data?.dtcast?.map((item, i) => (
                  <Link to="" key={i} className="text-[#FFA113] underline mx-1">
                    {item?.term?.name}
                  </Link>
                ))}
              </span>
            </p>

            {/* Country */}
            <p className="flex items-center gap-x-1">
              <span className="text-white font-bold">Country:</span>
              {details?.country ? (
                <span className="text-[#FFA113] underline mx-1">
                  {details?.country}
                </span>
              ) : (
                <span className="text-slate-400">N/A</span>
              )}
            </p>
          </div>

          <div className="lg:w-[35%] flex flex-col gap-y-1 text-[28px] lg:text-base">
            {/* Release Year */}
            <p className="flex items-center gap-x-1">
              <span className="text-white font-bold">Release Year:</span>
              <span className="text-[#FFA113] underline mx-1">
                {details?.release_date?.slice(0, 4)}
              </span>
            </p>

            {/* Directors */}
            <p className="flex items-center gap-x-1">
              <span className="text-white font-bold">Runtime:</span>
              <span className="text-[#FFA113] underline mx-1">
                {details?.runtime} min
              </span>
            </p>

            {/* Actors */}
            <p className="flex gap-x-1">
              <span className="text-white font-bold">Quality:</span>
              <span>
                {details?.additional_data?.prquality?.map((item, i) => (
                  <Link to="" key={i} className="text-[#FFA113] underline mx-1">
                    {item?.term?.name}
                  </Link>
                ))}
              </span>
            </p>
          </div>
        </div>

        {/* Story Line */}
        <p className="mt-1 flex gap-x-1 text-[28px] lg:text-base">
          <span className="text-white font-bold">Storyline:</span>
          <span className="text-[#FFA113] mx-1">{details?.post_content}</span>
        </p>
      </div>
    </div>
  );
};

export default DetailsInfoCard;
