import HighLightCard from "../../components/tv-channels/HighLightCard";
import SectionTitleBtn from "../../utils/tv-channels/SectionTitleBtn";
import { useEffect } from "react";
import ChannelCard from "../../components/tv-channels/channel-card/ChannelCard";
import {
  useLiveTvChannelQuery,
} from "../../redux/features/live-tv/liveTvApi";
import TvNews from "../../components/tv-channels/TvNews";
import TvAdSection from "../../components/tv-channels/TvAdSection";

const AllChannels = () => {
  const { data: liveTvList } = useLiveTvChannelQuery();


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="mt-8">
      {/* TvNews Section */}
      <TvNews />

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
       <TvAdSection />

      {/* Sport Section */}
      <div className="w-[80%] mx-auto lg:w-full">
        <SectionTitleBtn>All Channels</SectionTitleBtn>
        <div className="mt-5 hidden lg:flex flex-wrap gap-5">
          {liveTvList?.data?.data?.map((item, i) => (
            <ChannelCard key={i} item={item} />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-12 mx-auto lg:hidden">
          {liveTvList?.data?.data?.map((item, i) => (
            <ChannelCard key={i} item={item} />
          ))}
        </div>
      </div>

       {/* Banner Ads */}
       <TvAdSection />
    </div>
  );
};

export default AllChannels;