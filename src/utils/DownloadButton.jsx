import { useState } from "react";
import { ad_url } from "../config/config";

const DownloadButton = ({ children, url }) => {
  const [initialVisite, setInitialVisite] = useState(1);

  const handleRedirect = () => {

    if (initialVisite > 1) {
      window.open(url, "_blank");
    } else {
      window.open(ad_url, "_blank")
    }
    setTimeout(() => {
      setInitialVisite(1);
    }, 50000);
    
    setInitialVisite(initialVisite + 1);
  };


  return (
    <div>
      <button
        onClick={() => handleRedirect()}
        className="w-full mx-auto py-[25px] lg:py-[8px] text-[35px] lg:text-[20px] font-[700] text-white flex justify-center items-center 
      hover:bg-[#FFA113] transition-all duration-200 bg-[#FF2345] rounded-[6px] font-roboto shadow-md shadow-slate-900"
      >
        {children}
      </button>
    </div>
  );
};

export default DownloadButton;
