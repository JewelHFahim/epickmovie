import { AiOutlineDoubleRight } from "react-icons/ai";

const Breadcum = ({children1, children2}) => {

    return (
        <div className="hidden  bg-[#18181a] text-[#727171] lg:flex items-center font-inter pt-[15px] pb-[20px] gap-[8px] font-[500] uppercase">
        Home <AiOutlineDoubleRight /> {children1} <AiOutlineDoubleRight /> {children2}
      </div>
    );
};

export default Breadcum;