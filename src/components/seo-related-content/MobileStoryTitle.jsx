import { FaCheckSquare } from "react-icons/fa";

const MobileStoryTitle = ({ details }) => {
  return (
    <div className="mt-[11px] lg:mt-[30px] lg:max-w-[745px] text-white font-roboto flex flex-wrap">
      <p className="text-[25px]">
        <span className="font-semibold items-start gap-x-1 inline-flex mx-1 leading-none">
          <FaCheckSquare className=" text-green-600" /> {details?.post_title} :
        </span>
        This is one of the best movie based on
        {details?.additional_data?.genres?.map((item, i) => (
          <span key={i}>
            <span className="text-red-600 font-semibold mx-1">
              {item.term.name}
            </span>
            ,
          </span>
        ))}
        This Movie is available in
        {details?.additional_data?.pxquality?.map((item, i) => (
          <span key={i} className="text-yellow-500 font-semibold mx-1">
            {item.term.name}
          </span>
        ))}
        qualities with
        {details?.additional_data?.prquality?.map((item, i) => (
          <span key={i} className="text-green-600 font-semibold ml-1">
            {item.term.name}
          </span>
        ))}
        . This Movie is Available in{" "}
        {details?.additional_data?.dtaudio?.map((item, i) => (
          <span key={i} className="mx-1">
            {item.term.name}
          </span>
        ))}
        with English Subtitles. Click on the Download links below to proceed.
      </p>

      <p className="text-[25px] mt-5">
        <span className="font-semibold mr-1"> EpicMovies.buzz </span> Provide You With Super Quality Of <span className="font-semibold">Movies</span> and  <span className="font-semibold">WEB-Series</span>. We
        provide Google Drive Direct Download Links For Fast And Secure <span className="font-semibold">Download</span>. You Can Join Uus on Telegram For the Latest Updates. 
      </p>
    </div>
  );
};

export default MobileStoryTitle;
