/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdOutlineDoubleArrow } from "react-icons/md";

const SectionTitleTheme2 = ({ children, url, className, textColor }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <button
        className={`px-8 h-[45px] text-white text-[20px] lg:text-[18px] font-bold ${className}`}
      >
        {children}
      </button>

      {url && (
        <Link
          to={url}
          className={`text-[20px] font-semibold flex items-center gap-x-1 ${textColor}`}
        >
          View More <MdOutlineDoubleArrow />
        </Link>
      )}
    </div>
  );
};

export default SectionTitleTheme2;
