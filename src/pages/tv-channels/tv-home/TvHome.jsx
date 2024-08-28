import ChannelCard from "../../../components/tv-channels/channel-card/ChannelCard";
import SectionTitleBtn from "../../../utils/tv-channels/SectionTitleBtn";
import HighLightCard from "../../../components/tv-channels/HighLightCard";
import {
  useLiveTvCategoryQuery,
  useLiveTvChannelQuery,
} from "../../../redux/features/live-tv/liveTvApi";
import TvNews from "../../../components/tv-channels/TvNews";
import ChannelLoadingPage from "../../../components/tv-channels/ChannelLoadingPage";

const TvHome = () => {
  const { data: liveTvList } = useLiveTvChannelQuery();
  const { data: tvCategory } = useLiveTvCategoryQuery();

  if (!liveTvList || !tvCategory) {
    return <ChannelLoadingPage />;
  }

  // grouped categories
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

  // category names
  const categoryNames = Object?.keys(groupedTvLinks);

  // categories array
  const mappedCategories = categoryNames?.map((category) => ({
    name: category,
    items: groupedTvLinks[category],
  }));

  return (
    <div className="mt-3 h-full min-h-screen">
      {/* TvNews Section */}
      <TvNews />

      {/* ============== HIGHLIGHTS CARD PC ================== */}
      <div className="mt-5 lg:flex items-center justify-between hidden">
        <HighLightCard className="w-[640px] h-[350px]" />
        <HighLightCard className="w-[640px] h-[350px]" />
      </div>

      {/* ============== HIGHLIGHTS CARD MB ================== */}
      <div className="mt-5 flex items-center justify-center lg:hidden">
        <HighLightCard className="w-[80%] mx-auto h-[400px] " />
      </div>

      {/* ============= Categorywise Channels ================ */}
      {mappedCategories?.map((category, i) => (
        <div key={i} className="w-[80%] mx-auto lg:w-full">
          <SectionTitleBtn url={`/tv/${category.name.toLowerCase()}`}>
            {category.name}
          </SectionTitleBtn>

          <div className="mt-5 hidden lg:flex flex-wrap gap-5">
            {category?.items.map((item, i) => (
              <ChannelCard key={i} item={item} />
            ))}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-8 mx-auto lg:hidden">
            {category?.items.map((item, i) => (
              <ChannelCard key={i} item={item} />
            ))}
          </div>
        </div>
      ))}

      {/* ================== ALL CHANNEL ===================== */}
      <div className="w-[80%] mx-auto lg:w-full">
        <SectionTitleBtn url="/tv/all-tvs"> All Channel </SectionTitleBtn>
        <div className="mt-5 hidden lg:flex flex-wrap gap-5">
          {liveTvList?.data?.data?.map((item, i) => (
            <ChannelCard key={i} item={item} />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-8 mx-auto lg:hidden">
          {liveTvList?.data?.data?.map((item, i) => (
            <ChannelCard key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TvHome;
