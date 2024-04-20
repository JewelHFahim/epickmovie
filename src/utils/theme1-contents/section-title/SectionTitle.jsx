import { IoIosArrowForward } from "react-icons/io";

const SectionTitle = ({ children }) => {
  return (
    <div className="mt-5 w-full">
      <button className="px-6 h-[40px] bg-[#FFB800] text-black text-[20px] lg:text-[18px] font-bold flex justify-center items-center gap-x-4">
        <span>{children}</span>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default SectionTitle;
