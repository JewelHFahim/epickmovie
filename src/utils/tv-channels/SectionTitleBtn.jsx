/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdOutlineDoubleArrow } from "react-icons/md";

const SectionTitleBtn = ({ children, url }) => {
  return (
    <div className="mt-5 flex items-center justify-between font-jost text-[32px]">
      <div className="bg-[#FF0000] px-8 py-1">
        <p className="font-bold capitalize">{children}</p>
      </div>

      <Link
        to={url}
        className="flex items-center gap-1 font-semibold text-[#FF0000]"
      >
        See More <MdOutlineDoubleArrow />
      </Link>
    </div>
  );
};

export default SectionTitleBtn;
