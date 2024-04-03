import { IoIosArrowForward } from "react-icons/io";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SectionTitle = ({ children }) => {
  return (
    <div className="mt-5 w-full flex justify-between items-center">
      <button className="px-6 h-[40px] bg-[#FFB800] text-black text-[18px] font-bold flex justify-center items-center gap-x-4">
        <span>{children}</span>
        <IoIosArrowForward />
      </button>

      <Link
        to=""
        className="flex items-center gap-x-4 text-[#FFB800] text-[20px] font-bold"
      >
        <span>View more</span>
        <RiArrowRightDoubleLine />
      </Link>
    </div>
  );
};

export default SectionTitle;
