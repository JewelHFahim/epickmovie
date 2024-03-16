import { Link } from "react-router-dom";

const DownloadInfos = ({ details }) => {
  return (
    <div className="mt-[13px] lg:mt-[30px] font-roboto text-white">
      <div>
        <h1 className="text-[28px] font-semibold">
          <span className="text-[#ff0000] mr-1">{details?.post_im_title}</span>
          Download Movie In
          {details?.additional_data?.dtaudio?.map((item, i) => (
            <span key={i}> {item.term.name} </span>
          ))}
          Telegram Link
        </h1>
        <span className="text-sm">
          If you search
          <span className="text-[#ff0000] ml-1">
            {details?.post_im_title}
          </span>{" "}
          full movie in Hindi then you have reached the right place. There are
          so many groups you see but they dont&apos;t provide any kinds of
          movies. But you can download
          <span className="text-[#ff0000] ml-1">
            {details?.post_im_title}
          </span>{" "}
          Movie from this Telegram Channel-
          <Link to="" className="text-[#ff007a]">
            Click Here
          </Link>
          .
        </span>
      </div>
      <br />

      <div>
        <h1 className="text-[28px] font-semibold">
          <span className="text-[#ff0000] mr-1">{details?.post_im_title}</span>
          full movie download in
          {details?.additional_data?.dtaudio?.map((item, i) => (
            <span key={i}> {item.term.name} </span>
          ))}
          1080p
        </h1>
        <span className="text-sm">
          <span className="text-[#ff0000] mr-1">{details?.post_im_title}</span>
          download full movie in Hindi 1080p- Download
          <span className="text-[#ff0000] mx-1">{details?.post_im_title}</span>
          (English-Hindi-Bengali) Hollywood/Bollywood blockbuster movie in
          {details?.additional_data?.dtaudio?.map((item, i) => (
            <span key={i}> {item.term.name} </span>
          ))}
          Full HD Download & watch online.
        </span>
      </div>
    </div>
  );
};

export default DownloadInfos;
