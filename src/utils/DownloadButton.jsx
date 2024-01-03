import { Link } from "react-router-dom";

const DownloadButton = ({children, url}) => {

  return (
    <Link to={url}>
      <button className="w-full mx-auto py-[4px] lg:py-[4px] text-[12px] lg:text-[20px] font-[700] text-white flex justify-center items-center hover:bg-gradient-to-t from-[#ff1818] to-[#fdd506] transition-all duration-200 bg-[#FF2345] rounded-[6px] font-roboto shadow-md shadow-slate-900">
      {children}
    </button>
    </Link>

  );
};

export default DownloadButton;
