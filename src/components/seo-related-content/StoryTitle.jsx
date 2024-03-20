import { FaCheckSquare } from "react-icons/fa";
import { useSiteConfig } from "../../utils/configHooks/ConfigHooks";
import { Link } from "react-router-dom";

const StoryTitle = ({ details, type }) => {
  const { siteName } = useSiteConfig();

  return (
    <div className="mt-[11px] lg:mt-[30px] lg:max-w-[745px] text-white font-roboto flex flex-wrap">
      <p className="text-[30px] lg:text-[15px]">
        <span className="font-bold items-center gap-x-1 inline-flex mx-1 leading-none">
          <FaCheckSquare className=" text-green-600 text-[13px]" />
          {details?.post_title}:
        </span>
        This is one of the best {type} based on
        {details?.additional_data?.genres &&
          details?.additional_data?.genres?.map((item, i) => (
            <span key={i}>
              <Link
                to={`/terms/${item?.term?.slug}`}
                className="text-red-600 font-semibold mx-1 underline"
              >
                {item.term.name}
              </Link>
              ,
            </span>
          ))}
        {details?.additional_data?.pxquality && (
          <>
            This {type} is available in
            {details?.additional_data?.pxquality?.map((item, i) => (
              <Link
                to={`/terms/${item?.term?.slug}`}
                key={i}
                className="text-yellow-500 font-semibold mx-1"
              >
                {item.term.name}
              </Link>
            ))}
          </>
        )}
        {details?.additional_data?.prquality && (
          <>
            qualities with
            {details?.additional_data?.prquality?.map((item, i) => (
              <Link
                to={`/terms/${item?.term?.slug}`}
                key={i}
                className="text-green-600 font-semibold ml-1"
              >
                {item.term.name}
              </Link>
            ))}
            .
          </>
        )}
        {details?.additional_data?.dtaudio && (
          <>
            This {type} is Available in
            {details?.additional_data?.dtaudio?.map((item, i) => (
              <span key={i} className="mx-1">
                {item.term.name}
              </span>
            ))}
            with English Subtitles.
          </>
        )}
         
      
        {details?.additional_data?.dtaudio &&
        <>
        This {type} Is Now Available In
        {details?.additional_data?.dtaudio?.map((item, i) => (
          <Link
            to={`/terms/${item?.term?.slug}`}
            key={i}
            className="text-[#ff007a] font-semibold ml-1"
          >
            {item.term.name}
          </Link>
        ))}
        .
        </>}
      </p>

      <p className="text-[30px] lg:text-[15px] mt-2">
        <Link to="/" className="text-[#ffba07] font-semibold underline mr-1">
          {siteName}
        </Link>
        is the bes online platform for downloading
        <span className="text-[#adff00]"> Hollywood, Bollywood, Bengali </span>
        Movies and{" "}
        <Link to="/tv-show" className="text-[#adff00]">
          {" "}
          WEB-Series{" "}
        </Link>
        . We provide direct G-Drive download links for fast and secure
        downloading. Click on the download button below and follow the steps to
        start downloading.
      </p>
    </div>
  );
};

export default StoryTitle;
