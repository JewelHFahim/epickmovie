/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Breadcum = ({children1, children2, redirect}) => {

    return (
        <div className="hidden text-[12px] pl-2 bg-[#18181a] text-[#727171] lg:flex items-center font-inter py-[18px] gap-[8px] font-[500] uppercase">
        <Link to={`/`} className="text-blue-700 underline">Home</Link> / <Link to={redirect} className="text-blue-700 underline" >{children1}</Link> / {children2}
      </div>
    );
};

export default Breadcum;