import HighLightCard from "../../../components/tv-channels/HighLightCard";
import SectionTitleBtn from "../../../utils/tv-channels/SectionTitleBtn";
import { useEffect } from "react";
import ChannelCard from "../../../components/tv-channels/channel-card/ChannelCard";
import {
  useLiveTvCategoryQuery,
  useLiveTvChannelQuery,
} from "../../../redux/features/live-tv/liveTvApi";
import TvNews from "../../../components/tv-channels/TvNews";
import TvAdSection from "../../../components/tv-channels/TvAdSection";

const TvSports = () => {
  const { data: liveTvList } = useLiveTvChannelQuery();
  const { data: tvCategory } = useLiveTvCategoryQuery();

  const groupedTvLinks = liveTvList?.data?.data?.reduce((acc, tvLink) => {
    const category = tvCategory?.data?.find(
      (cat) => cat.id === tvLink.category_id
    );
    const categoryName = category ? category.name : "Uncategorized";
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(tvLink);
    return acc;
  }, {});

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
        <SectionTitleBtn>Sports</SectionTitleBtn>
        <div className="mt-5 hidden lg:flex flex-wrap gap-5">
          {groupedTvLinks?.Sports?.map((item, i) => (
            <ChannelCard key={i} item={item} />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-12 mx-auto lg:hidden">
          {groupedTvLinks?.Sports?.map((item, i) => (
            <ChannelCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* Banner Ads */}
      <TvAdSection />
    </div>
  );
};

export default TvSports;
