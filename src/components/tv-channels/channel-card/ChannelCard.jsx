/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./ChannelCard.css";
import { useLiveTvCategoryQuery } from "../../../redux/features/live-tv/liveTvApi";

const ChannelCard = ({ item }) => {
  const { data: tvCategory } = useLiveTvCategoryQuery();
  
  if (!item || !item.category_id) {
    console.log("Item or category ID is undefined");
    return ('Loading...');
  }

  const category = tvCategory?.data?.find((cat) => cat.id === item.category_id);

  if (category) {
    console.log(category?.name);
  } else {
    console.log("Category not found");
  }

  return (
    <Link
      to={`/tv/streaming/${category?.name}/${item?.id}`}
      className="w-full h-[580px] lg:w-[200px] lg:h-[320px] rounded-[10px] border-2 overflow-hidden relative cardContainer border-red-600"
    >
      <img
        src={item?.thumb_name}
        alt=""
        className="w-full h-full rounded-[10px]"
      />

      <div className="absolute z-20 bottom-3 px-3 w-full">
        <p className="text-center text-white font-bold text-[24px] leading-[30px] lg:leading-normal lg:text-[13px]">
          {item?.channel_name}
        </p>
      </div>

      <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-t from-black from-5%  to-transparent to-60% "></div>

      <div className="bg-[#FF0000] absolute top-3 right-3 px-7 py-2 lg:px-4 lg:py-[2px] rounded-md">
        <p className="font-bold text-xl lg:text-base">Live</p>
      </div>
    </Link>
  );
};

export default ChannelCard;
