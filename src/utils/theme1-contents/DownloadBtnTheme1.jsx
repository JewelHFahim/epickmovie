/* eslint-disable react/prop-types */
import { useRedirect, useSiteConfig } from "../configHooks/ConfigHooks";

const DownloadBtnTheme1 = ({ children, url }) => {

  const { maskLink } = useSiteConfig();
  const handleRedirect = useRedirect(url, maskLink);
  

  return (
    <button
      onClick={() => handleRedirect()}
      className="bg-[#FF2345] w-full lg:w-[550px] hover:bg-[#FFA113] transition-all duration-200 mx-auto h-[80px] lg:h-[50px] rounded-[10px] text-[#D7D7D7] text-[28px] lg:text-[22px] font-bold flex justify-center items-center"
    >
      {children}
    </button>
  );
};

export default DownloadBtnTheme1;
