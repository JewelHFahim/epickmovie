import { Link } from "react-router-dom";
import Title from "./Title";

const HomePageSeeAllBtn = ({children, total , redirect}) => {
    return (
        <div className="w-full h-[80px] lg:h-[70px] bg-[#37373a] lg:bg-[#27272A] flex justify-between items-center mt-[22px] px-10">
        <Title>{children}</Title>
        
        {
          redirect &&
          <div className="flex items-center gap-2 lg:gap-4">
          <p className="text-[32px] lg:text-[28px] font-[700] text-white"> {total} </p>
          <Link to={`${redirect}`} className="px-6 lg:px-10 py-[5px] lg:py-2 rounded-[6px] bg-[#FF2345] text-[24px] lg:text-[16px] font-[700] text-white uppercase font-roboto">
            See All
          </Link>
        </div>
        }
       
      </div>
    );
};

export default HomePageSeeAllBtn;