import HighLightCard from "../../../components/tv-channels/HighLightCard";
import { useEffect } from "react";
import ChannelCard from "../../../components/tv-channels/channel-card/ChannelCard";
import {
  useLiveTvCategoryQuery,
  useLiveTvChannelQuery,
} from "../../../redux/features/live-tv/liveTvApi";
import TvNews from "../../../components/tv-channels/TvNews";
import { useLocation } from "react-router-dom";
import SingleCatTitle from "../../../utils/tv-channels/SingleCatTitle";
import ChannelLoadingPage from "../../../components/tv-channels/ChannelLoadingPage";

const SingleCategory = () => {
  const location = useLocation();
  const catName = location?.pathname.slice(4);

  const { data: liveTvList } = useLiveTvChannelQuery();
  const { data: tvCategory } = useLiveTvCategoryQuery();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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

  const singleCat = mappedCategories?.filter(
    (sigCat) => sigCat.name.toLowerCase() === catName
  );

  return (
    <div className="mt-3">
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

      {/* ============= Single CategoryChannels ================ */}
      {singleCat?.map((category, i) => (
        <div key={i} className="w-[80%] mx-auto lg:w-full">
          <SingleCatTitle>{category.name}</SingleCatTitle>

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
    </div>
  );
};

export default SingleCategory;
