import ChannelCard from "../../../components/tv-channels/channel-card/ChannelCard";
import SectionTitleBtn from "../../../utils/tv-channels/SectionTitleBtn";
import bannerImg from "../../../assets/tv-channel-ads.jpg";
import HighLightCard from "../../../components/tv-channels/HighLightCard";
import {
  useLiveTvCategoryQuery,
  useLiveTvChannelQuery,
} from "../../../redux/features/live-tv/liveTvApi";

const TvHome = () => {
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

  return (
    <div className="mt-3 lg:mt-8 ">
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

      {/* ====================== Entertainment ======================= */}
      {/* Banner Ads */}
      <div className="mt-5 w-full h-[157px]">
        <img src={bannerImg} alt="" className="w-full h-full" />
      </div>

      {/* Entertainment Section */}
      <div className="w-[80%] mx-auto lg:w-full">
        <SectionTitleBtn> Entertainment </SectionTitleBtn>
        <div className="mt-5 hidden lg:flex flex-wrap gap-5">
          {groupedTvLinks?.Entertainment?.map((item, i) => (
            <ChannelCard key={i} item={item} />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-12 mx-auto lg:hidden">
          {groupedTvLinks?.Entertainment?.map((item, i) => (
            <ChannelCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* ====================== Movies ======================= */}
      {/* Banner Ads */}
      <div className="mt-5 w-full h-[157px]">
        <img src={bannerImg} alt="" className="w-full h-full" />
      </div>

      {/* Movies Section */}
      <div className="w-[80%] mx-auto lg:w-full">
        <SectionTitleBtn> Movies </SectionTitleBtn>
        <div className="mt-5 hidden lg:flex flex-wrap gap-5">
          {groupedTvLinks?.Movies?.map((item, i) => (
            <ChannelCard key={i} item={item} />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-12 mx-auto lg:hidden">
          {groupedTvLinks?.Movies?.map((item, i) => (
            <ChannelCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* ====================== News ======================= */}
      {/* Banner Ads */}
      <div className="mt-5 w-full h-[157px]">
        <img src={bannerImg} alt="" className="w-full h-full" />
      </div>

      {/* News Section */}
      <div className="w-[80%] mx-auto lg:w-full">
        <SectionTitleBtn> News </SectionTitleBtn>
        <div className="mt-5 hidden lg:flex flex-wrap gap-5">
          {groupedTvLinks?.News?.map((item, i) => (
            <ChannelCard key={i} item={item} />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-12 mx-auto lg:hidden">
          {groupedTvLinks?.News?.map((item, i) => (
            <ChannelCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* ====================== All Channel ======================= */}
      {/* Banner Ads */}
      <div className="mt-5 w-full h-[157px]">
        <img src={bannerImg} alt="" className="w-full h-full" />
      </div>

      {/* All Channel Section */}
      <div className="w-[80%] mx-auto lg:w-full">
        <SectionTitleBtn> All Channel </SectionTitleBtn>
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

export default TvHome;

// const tvLinks = [
//   {
//     id: 8,
//     category_id: 7,
//     channel_name: "A Tv",
//     description: "Description",
//     poster_name: "post one",
//   },
//   {
//     id: 9,
//     category_id: 8,
//     channel_name: "B Tv",
//     description: "Description Description",
//     poster_name: "post two",
//   },
//   {
//     id: 10,
//     category_id: 9,
//     channel_name: "C Tv",
//     description: "des",
//     poster_name: "post three",
//   },
//   {
//     id: 11,
//     category_id: 7,
//     channel_name: "A Tv",
//     description: "Description",
//     poster_name: "post one",
//   },
//   {
//     id: 12,
//     category_id: 8,
//     channel_name: "B Tv",
//     description: "Description Description",
//     poster_name: "post two",
//   },
//   {
//     id: 13,
//     category_id: 9,
//     channel_name: "C Tv",
//     description: "des",
//     poster_name: "post three",
//   },
// ];

// const categories = [
//   {
//     id: 7,
//     name: "Sports",
//     deleted_at: null,
//     created_at: "2024",
//     updated_at: "2024",
//   },

//   {
//     id: 8,
//     name: "Entertainment",
//     deleted_at: null,
//     created_at: "2024",
//     updated_at: "2024",
//   },

//   {
//     id: 9,
//     name: "Movies",
//     deleted_at: null,
//     created_at: "2024",
//     updated_at: "2024",
//   },
// ];
