import HighLightCard from "../../components/tv-channels/HighLightCard";
import bannerImg from "../../assets/tv-channel-ads.jpg";
import SectionTitleBtn from "../../utils/tv-channels/SectionTitleBtn";
import { useEffect } from "react";
import ChannelCard from "../../components/tv-channels/channel-card/ChannelCard";

const TvSports = () => {


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);


  return (
    <div className="mt-8">
      {/* Highlight Cards */}
      <div className="flex items-center justify-between">
        <HighLightCard />
        <HighLightCard />
      </div>

      {/* Banner Ads */}
      <div className="mt-5 w-full h-[157px]">
        <img src={bannerImg} alt="" className="w-full h-full" />
      </div>

      {/* Sport Section */}
      <>
        <SectionTitleBtn>Sport</SectionTitleBtn>
        <div className="mt-5 grid grid-cols-6 gap-5">
          {Array.from({ length: 18 }).map((item, i) => (
            <ChannelCard key={i} />
          ))}
        </div>
      </>

      {/* Banner Ads */}
      <div className="mt-5 w-full h-[157px]">
        <img src={bannerImg} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default TvSports;
