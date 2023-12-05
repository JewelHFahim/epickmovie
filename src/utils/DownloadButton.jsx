import { Link } from "react-router-dom";

const DownloadButton = ({children, url}) => {
  return (

    <Link to={url}>
      <button className="w-full py-[8px] lg:py-[12px] text-[12px] lg:text-[22px] font-[700] text-white flex justify-center items-center bg-[#FF2345] rounded-[6px] font-roboto">
      {children}
    </button>
    </Link>

  );
};

export default DownloadButton;
