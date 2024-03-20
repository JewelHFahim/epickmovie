import { FaCheckSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const MobileStoryTitle = ({ details, type }) => {
  return (
    <div className="mt-[11px] lg:mt-[30px] lg:max-w-[745px] text-white font-roboto flex flex-wrap">
      <p className="text-[25px]">
        <span className="font-semibold items-start gap-x-1 inline-flex mx-1 leading-none">
          <FaCheckSquare className=" text-green-600 text-[22px]" /> {details?.post_title} :
        </span>
        This is one of the best {type} based on
        {details?.additional_data?.genres?.map((item, i) => (
          <span key={i}> <span className="text-red-600 font-semibold mx-1"> {item.term.name} </span> , </span>
        ))}
        { (details?.additional_data?.pxquality || details?.additional_data?.prquality)&&
          <>
          This {type} is available in
          {details?.additional_data?.pxquality?.map((item, i) => (
            <span key={i} className="text-yellow-500 font-semibold mx-1"> {item.term.name} </span>
          ))}
          qualities with
          {details?.additional_data?.prquality?.map((item, i) => (
            <span key={i} className="text-green-600 font-semibold ml-1"> {item.term.name} </span>
          ))}
          .
          </>
        }
        
         This {type} is Available in
        {details?.additional_data?.dtaudio?.map((item, i) => (
          <span key={i} className="mx-1"> {item.term.name} </span>
        ))}
        with English Subtitles. Click on the Download links below to proceed.
      </p>

      <p className="text-[25px] mt-5">
        <Link to="/" className="font-semibold mr-1 uppercase text-yellow-500 underline"> EpicMovies.buzz </Link> Provide You With Super Quality Of <Link to="/movies" className="font-semibold"> Movies </Link> and  <Link to="/tv-show" className="font-semibold"> WEB-Series </Link>. We
        provide Google Drive Direct Download Links For Fast And Secure <span className="font-semibold"> Download </span>. You Can Join Uus on Telegram For the Latest Updates. 
      </p>
    </div>
  );
};

export default MobileStoryTitle;
