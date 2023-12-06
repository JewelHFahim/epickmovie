import Title from "./Title";

const HomePageSeeAllBtn = ({children, total}) => {
    return (
        <div className="w-full h-[35px] lg:h-[60px] bg-[#37373a] lg:bg-[#27272A] flex justify-between items-center mt-[22px] px-6">
        <Title>{children}</Title>
        <div className="flex items-center gap-2 lg:gap-4">
          <p className=" text-[15px] lg:text-[24px] font-[700] text-white"> {total} </p>
          <button className=" px-4 lg:px-10 py-[4px] lg:py-2 rounded-[6px] bg-[#FF2345] text-[11px] lg:text-[16px] font-[700] text-white uppercase font-roboto">
            See All
          </button>
        </div>
      </div>
    );
};

export default HomePageSeeAllBtn;