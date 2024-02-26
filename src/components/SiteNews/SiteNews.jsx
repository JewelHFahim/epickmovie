import Marquee from "react-fast-marquee";
import { useSiteNews } from "../../utils/configHooks/ConfigHooks";

const SiteNews = () => {
const siteNews = useSiteNews();

  return (
    <div className="w-[90%] h-[28px] hidden lg:flex justify-center items-center bg-[#5C1EC2] mt-[8px]">
      <div className="text-[14px] font-[600] flex items-center gap-2 text-white">
        <Marquee>{siteNews}</Marquee>
      </div>
    </div>
  );
};

export default SiteNews;
