/* eslint-disable react/prop-types */
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const SectionTitleTheme3 = ({ children, sideBtn }) => {
  return (
    <div className="px-4 h-[70px] lg:h-[53px] flex items-center justify-between bg-[#D9D9D914]">
      
      <p className="text-white text-[30px] lg:text-xl border-l-4 border-red-600 pl-1">
        {children}
      </p>

      {sideBtn === true ? (
        <button className="bg-red-600 text-white lg:text-[10px] font-bold w-[100px] h-[40px] lg:w-[50px] rounded-sm lg:h-[20px] hover:bg-red-500 transition-all ease-in-out">
          See All
        </button>
      ) : (
        <div className="flex gap-5 items-center text-[#A4A4A4]">
          <BiSolidLeftArrow />
          <BiSolidRightArrow />
        </div>
      )}
    </div>
  );
};

export default SectionTitleTheme3;
