import { Link } from "react-router-dom";

const DownloadButton = ({ children, url }) => {

  return (
    <Link to={url} target="_blank" rel="noopener noreferrer">
      <button className="w-full mx-auto py-[25px] lg:py-[8px] text-[35px] lg:text-[20px] font-[700] text-white flex justify-center items-center 
      hover:bg-[#FFA113] transition-all duration-200 bg-[#FF2345] rounded-[6px] font-roboto shadow-md shadow-slate-900">
        {children}
      </button>
    </Link>
  );
};

export default DownloadButton;
