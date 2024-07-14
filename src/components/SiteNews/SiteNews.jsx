import Marquee from "react-fast-marquee";
import { useSiteConfig } from "../../utils/configHooks/ConfigHooks";
import { themeValue } from "../../config/config";

const SiteNews = () => {
  const { siteNews } = useSiteConfig();


  return (
    <>
      {themeValue ? (
        <div className="mt-5 w-full h-[50px] bg-[#2a2a2a] flex justify-center items-center">
          <div className="w-full text-[30px] lg:text-[15px] font-[600] flex items-center text-white">
            <Marquee>{siteNews}</Marquee>
          </div>
        </div>
      ) : (
        <div className="w-[90%] h-[28px] hidden lg:flex justify-center items-center bg-[#5C1EC2] mt-[8px]">
          <div className="text-[14px] font-[600] flex items-center gap-2 text-white">
            <Marquee>{siteNews}</Marquee>
          </div>
        </div>
      )}
    </>
  );
};

export default SiteNews;
