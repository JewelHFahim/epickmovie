import HighLightCard from "../../components/tv-channels/HighLightCard";
import bannerImg from "../../assets/tv-channel-ads.jpg";
import SectionTitleBtn from "../../utils/tv-channels/SectionTitleBtn";
import { useEffect } from "react";
import ChannelCard from "../../components/tv-channels/channel-card/ChannelCard";
import {
  useLiveTvCategoryQuery,
  useLiveTvChannelQuery,
} from "../../redux/features/live-tv/liveTvApi";

const AllChannels = () => {
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
      <div className="mt-5 w-full h-[157px]">
        <img src={bannerImg} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default AllChannels;
