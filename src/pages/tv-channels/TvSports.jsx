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
      <div className="w-full flex justify-center items-center py-2 lg:hidden">
        <p className="text-[18px] text-white">
          সকল খেলার আপডেট পেতে আমাদের চ্যানেলে জয়েন করুন এবং আমাদের সাইট ভিজিট
          করুন
        </p>
      </div>

      {/* Highlight Cards */}
      <div className="mt-5 lg:flex items-center justify-between hidden">
        <HighLightCard className="w-[640px] h-[350px]" />
        <HighLightCard className="w-[640px] h-[350px]" />
      </div>
      <div className="mt-5 flex items-center justify-center lg:hidden">
        <HighLightCard className="w-[80%] mx-auto h-[400px] " />
      </div>

      {/* ====================== SPORTS ======================= */}
      {/* Banner Ads */}
      <div className="mt-5 w-full h-[157px]">
        <img src={bannerImg} alt="" className="w-full h-full" />
      </div>

      {/* Sport Section */}
      <div className="w-[80%] mx-auto lg:w-full">
        <SectionTitleBtn>Sports</SectionTitleBtn>
        <div className="mt-5 hidden lg:flex flex-wrap gap-5">
          {Array.from({ length: 18 }).map((item, i) => (
            <ChannelCard key={i} />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-12 mx-auto lg:hidden">
          {Array.from({ length: 12 }).map((item, i) => (
            <ChannelCard key={i} />
          ))}
        </div>
      </div>

     
      {/* Banner Ads */}
      <div className="mt-5 w-full h-[157px]">
        <img src={bannerImg} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default TvSports;
