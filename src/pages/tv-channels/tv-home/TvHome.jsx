import ChannelCard from "../../../components/tv-channels/channel-card/ChannelCard";
import SectionTitleBtn from "../../../utils/tv-channels/SectionTitleBtn";
import bannerImg from "../../../assets/tv-channel-ads.jpg";
import HighLightCard from "../../../components/tv-channels/HighLightCard";

const TvHome = () => {
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
          {Array.from({ length: 6 }).map((item, i) => (
            <ChannelCard key={i} />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-12 mx-auto lg:hidden">
          {Array.from({ length: 4 }).map((item, i) => (
            <ChannelCard key={i} />
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
          {Array.from({ length: 6 }).map((item, i) => (
            <ChannelCard key={i} />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-12 mx-auto lg:hidden">
          {Array.from({ length: 4 }).map((item, i) => (
            <ChannelCard key={i} />
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
          {Array.from({ length: 6 }).map((item, i) => (
            <ChannelCard key={i} />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-12 mx-auto lg:hidden">
          {Array.from({ length: 4 }).map((item, i) => (
            <ChannelCard key={i} />
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
          {Array.from({ length: 6 }).map((item, i) => (
            <ChannelCard key={i} />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-12 mx-auto lg:hidden">
          {Array.from({ length: 4 }).map((item, i) => (
            <ChannelCard key={i} />
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
          {Array.from({ length: 6 }).map((item, i) => (
            <ChannelCard key={i} />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-12 mx-auto lg:hidden">
          {Array.from({ length: 8 }).map((item, i) => (
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

export default TvHome;
