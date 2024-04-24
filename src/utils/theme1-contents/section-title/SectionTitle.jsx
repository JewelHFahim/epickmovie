import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdOutlineDoubleArrow } from "react-icons/md";

const SectionTitle = ({ children, url }) => {
  return (
    <div className="mt-5 w-full flex justify-between items-center">
      <button className="px-6 h-[40px] bg-[#FFB800] text-black text-[20px] lg:text-[18px] font-bold flex justify-center items-center gap-x-4">
        <span>{children}</span>
        <IoIosArrowForward />
      </button>
      {url && (
        <Link
          to={url}
          className="text-[#FFB800] text-[24px] font-semibold flex items-center gap-x-1"
        >
          View more <MdOutlineDoubleArrow />
        </Link>
      )}
    </div>
  );
};

export default SectionTitle;
