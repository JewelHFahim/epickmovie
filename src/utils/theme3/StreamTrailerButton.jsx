/* eslint-disable react/prop-types */
import { FaYoutube } from "react-icons/fa";
import { IoPlayCircle } from "react-icons/io5";

const StreamTrailerButton = ({ setStatus, children, title, btn, context }) => {
  const handleTralerVideo = (value) => {
    setStatus(value);
  };

  return (
    <button
      onClick={() => handleTralerVideo(context)}
      className="w-full shadow-sm  h-[150px] lg:h-[70px] px-10 lg:px-[30px] cursor-pointer"
    >
      <div className={`flex items-center justify-between p-2`}>
        <p className="flex items-center gap-x-4">
          <IoPlayCircle className="text-gray-700 text-[60px] lg:text-[25px] " />
          <span className=" text-5xl lg:text-base font-medium text-gray-200 hover:text-blue-600 ">
            {children}
          </span>
          <span className="text-slate-600 text-2xl lg:text-base ">{title}</span>
        </p>

        {btn && (
          <p className="text-[60px] lg:text-[30px] text-gray-500 hover:text-red-700 transition-all ease-in-out ">
            <FaYoutube />
          </p>
        )}
      </div>
    </button>
  );
};

export default StreamTrailerButton;
