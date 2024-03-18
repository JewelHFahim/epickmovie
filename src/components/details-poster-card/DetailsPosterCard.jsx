import { Link } from "react-router-dom";
import DateFormate from "../../utils/DateFormate";
import CachedImage from "../../utils/cache-img/CachedImage";

const DetailsPosterCard = ({ details }) => {
  
  return (
    <div className=" lg:w-[715px] lg:min-h-[272px] lg:max-h-[100%] rounded-[20px] bg-[#1B1E21] p-10 px-16 lg:px-3 lg:p-[14px] flex flex-col lg:flex-row gap-[18px] lg:gap-[26px]">

      <div className="bg-gradient-to-t from-[#ff1818] to-[#fdd506] lg:min-w-[182px] lg:h-[250px] p-[4px] lg:p-[2px] rounded-[6px]">
        <CachedImage src={details?.poster_image_url} imgStyle="w-full h-full rounded-[3px]" />
      </div>

      <div className="font-roboto lg:w-[70%]">
        <h3 className="text-[50px] lg:text-[20px] leading-none text-[#FFA113]"> {details?.post_title} </h3>

        <DateFormate date={details?.release_date} />

        <p className="text-[30px] lg:text-[13px] text-[#AEABAB] mt-[10px] flex items-start gap-1 max-w-[100%]">
          Director:
          {details?.post_type === "movies" ? (
            <span>
              {details?.additional_data?.dtdirector?.map((item, i) => (
                <Link to="" key={i} className="text-[#FFA113] underline mx-1">
                  {item?.term?.name}
                </Link>
              ))}
            </span>
          ) : (
            <span>
              {details?.additional_data?.dtcreator?.map((item, i) => (
                <Link to="" key={i} className="text-[#FFA113] underline mx-1">
                  {item?.term?.name}
                </Link>
              ))}
            </span>
          )}
        </p>

        <p className="text-[30px] lg:text-[13px] text-[#AEABAB] mt-[10px] flex items-start gap-1 max-w-[100%]">
          Stars:
          <span>
            {details?.additional_data?.dtcast?.map((item, i) => (
              <Link to="" key={i} className="text-[#FFA113] underline mx-1">
                {item?.term?.name}
              </Link>
            ))}
          </span>
        </p>

        {/* Need Summery*/}
        <p className="text-[30px] lg:text-[13px] text-[#AEABAB] font-[700] mt-2 lg:max-w-[455px]">
          Summary:
          <Link to="" className="text-white font-[400]">
            {details?.post_content}
          </Link>
        </p>

        {/* IMDB Section */}
        <>
          <p className="text-[30px] lg:text-[11px] text-[#AEABAB] mt-[22px]">
            Countries:
            <span className="text-white ">
              {details?.country !== null ? details?.country : "N/A"}
            </span>
          </p>

          <p className="text-[30px] lg:text-[11px] text-[#AEABAB]">
            Source:
            <Link to="" className="text-[#FFA113] font-[700]">
              imdb.com
            </Link>
          </p>

          <p className="text-[30px] lg:text-[11px] text-[#AEABAB]">
            IMBDb RATING:
            <Link to="" className="text-[#FFA113] font-[700]">
              {details?.imdb_rating}
            </Link>
          </p>
        </>
      </div>

    </div>
  );
};

export default DetailsPosterCard;
