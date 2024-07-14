import ChannelCard from "../../components/tv-channels/channel-card/ChannelCard";
import {
  useLiveTvCategoryQuery,
  useLiveTvChannelQuery,
  useSingleTvChannelQuery,
} from "../../redux/features/live-tv/liveTvApi";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
// import HLSPlayer from "../../components/tv-channels/HLSPlayer";
import TvNews from "../../components/tv-channels/TvNews";
import SingleCatTitle from "../../utils/tv-channels/SingleCatTitle";
import StreamPageLoading from "../../components/tv-channels/StreamPageLoading";
import QualityIncludedTvPlayer from "../../components/tv-channels/QualityIncludedTvPlayer";

const TvStreaming = () => {
  const { id } = useParams();
  const location = useLocation();
  const currentRoute = location.pathname;
  const { data: singleCategory } = useSingleTvChannelQuery(id);
  const { data: liveTvList } = useLiveTvChannelQuery();
  const { data: tvCategory } = useLiveTvCategoryQuery();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!liveTvList || !tvCategory) {
    return <StreamPageLoading/>;
  }

  // Function to extract genres from route
  const getGenresFromRoute = (route) => {
    const parts = route.split("/");
    const startIndex = parts.indexOf("streaming");

    if (parts?.length === 5) {
      const genres = parts?.slice(startIndex + 1, -1);
      const genresString = genres.join("-");
      return genresString;
    } else {
      const genres = parts?.slice(startIndex + 1);
      const genresString = genres.join("-");
      return genresString;
    }
  };
  const category = getGenresFromRoute(currentRoute);

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
    (sigCat) => sigCat.name.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="mt-8">
      {/* TvNews Section */}
      <TvNews />

      {/* Streaming */}
      <div className="mt-5 flex flex-col justify-center items-center w-[80%] mx-auto lg:w-full">
        <div className="w-full flex flex-col justify-center items-center">
          {/* <HLSPlayer singleCategory={singleCategory} /> */}
          <QualityIncludedTvPlayer singleCategory={singleCategory}/>
        </div>

        <p className="hidden lg:block mt-5 text-[22px] text-white text-center px-10">
          {singleCategory?.data?.description}
        </p>
      </div>

      {/* ============= Single CategoryChannels ================ */}
      {singleCat?.map((category, i) => (
        <div key={i} className="w-[80%] mx-auto lg:w-full">
          <SingleCatTitle> {category.name} </SingleCatTitle>

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

export default TvStreaming;
