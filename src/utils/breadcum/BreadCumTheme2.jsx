/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BreadCumTheme2 = ({ children1, children2, redirect, textColor }) => {
  return (
    <div
      className={`hidden font-inter text-[12px] ${textColor} lg:flex items-center font-inter mb-1 gap-[4px]  uppercase`}
    >
      <Link to={`/`} className="underline">Home</Link>/<Link to={redirect} className="underline">{children1}</Link>/<span>{children2}</span>
    </div>
  );
};

export default BreadCumTheme2;
