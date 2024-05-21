/* eslint-disable react/prop-types */
import { formatDate } from "./FormateDateTheme3";

const CardTheme3 = ({ datas, isLoading }) => {
  return (
    <div className="grid grid-cols-5 ">
      {datas?.data?.data?.map((item, i) => (
        <div key={i} className="w-[160px] h-[290px] p-2">
          <img
            src={item?.poster_image_url}
            alt=""
            className="w-full h-[200px] object-cover"
          />

          <div className="mt-1">
            <p className="text-[12px] text-[#D8D8D8] font-bold">
              {item?.post_title?.length >= 60
                ? `${item?.post_title.slice(0, 60)} ...`
                : item?.post_title}
            </p>
            <p className="text-[#D8D8D8] text-[9px] mt-1">
              {formatDate(item?.updated_at)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardTheme3;
