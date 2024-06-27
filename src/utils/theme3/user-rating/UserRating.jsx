/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaStar, FaUserCircle } from "react-icons/fa";
import "./UserRating.css";
import { useUserRatingQuery } from "../../../redux/features/settings/settingApi";
import toast from "react-hot-toast";

const UserRating = ({ detailsLoading, details }) => {
  const [selectedRate, setSelectedRate] = useState(null);
  const [hoverRate, setHoverRate] = useState(null);

  const { data } = useUserRatingQuery({
    postId: details?.id,
    ratingNo: selectedRate,
  });

  const handleStarClick = (rate) => {
    setSelectedRate(rate);
    if (data?.status) {
      toast.success(data?.message);
    }
    console.log(data);
  };

  const handleStarMouseOver = (rate) => {
    setHoverRate(rate);
  };

  const handleStarMouseOut = () => {
    setHoverRate(null);
  };

  const starStyle =
    "rating-star cursor-pointer text-[24px] flex justify-center items-center icon-star duration-450 text-[#008826]/20 [&.to-rate]:text-[#008826] [&.to-hover]:text-[#008826] [&.rated]:text-[#008826] [&.no-to-rated]:text-blue-600";

  return (
    <>
      {detailsLoading ? (
        <div className="mt-4 h-[60px] bg-slate-700 animate-pulse"></div>
      ) : (
        <div className="py-4 flex items-center gap-x-3 border-b border-gray-700">
          <p className="text-[40px] lg:text-[30px] font-medium text-gray-200 max-w-fit px-4 text-center bg-gray-500 bg-opacity-[20%] rounded-md">
            {details?.imdb_rating}
          </p>
          <div className="flex gap-x-4">
            <div>
              <div
                className="stars right flex gap-[5px]"
                data-selected-rate={selectedRate}
              >
                {[...Array(10)].map((_, index) => {
                  const rate = index + 1;
                  const starClass =
                    rate <= (hoverRate || selectedRate)
                      ? "rated"
                      : "no-to-rated";
                  return (
                    <a
                      key={rate}
                      className={`${starStyle} ${starClass}`}
                      data-id={rate}
                      onClick={() => handleStarClick(rate)}
                      onMouseOver={() => handleStarMouseOver(rate)}
                      onMouseOut={handleStarMouseOut}
                    >
                      <FaStar />
                    </a>
                  );
                })}
              </div>

              <p className="flex items-center gap-x-1 text-lg lg:text-sm mt-[2px] text-gray-400">
                <FaUserCircle />
                579 votes
              </p>
            </div>

            <p className="text-gray-200 h-[40px] lg:h-[25px] flex justify-center items-center bg-gray-500 bg-opacity-[20%] px-4 border text-xl lg:text-sm rounded-md">
              Your rating: {selectedRate || 10}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default UserRating;
