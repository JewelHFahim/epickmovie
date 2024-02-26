import { useMaskLink, useRedirect } from "./configHooks/ConfigHooks";

const DownloadButton = ({ children, url }) => {
  const maskLink = useMaskLink()
  const handleRedirect = useRedirect(url, maskLink);


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
