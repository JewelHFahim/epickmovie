import Marquee from "react-fast-marquee";

const SiteNews = ({allConfig}) => {

const getSiteNews = allConfig?.data?.find( (config) => config.name === "site_news");
const siteNews = getSiteNews ? getSiteNews.value : null;


  return (
    <div className="w-[90%] h-[28px] hidden lg:flex justify-center items-center bg-[#5C1EC2] mt-[8px]">
      <div className="text-[14px] font-[600] flex items-center gap-2 text-white">
        <Marquee>{siteNews}</Marquee>
      </div>
    </div>
  );
};

export default SiteNews;
