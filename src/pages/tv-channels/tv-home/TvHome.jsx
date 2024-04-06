import ChannelCard from "../../../components/tv-channels/channel-card/ChannelCard";
import SectionTitleBtn from "../../../utils/tv-channels/SectionTitleBtn";
import bannerImg from "../../../assets/tv-channel-ads.jpg";
import HighLightCard from "../../../components/tv-channels/HighLightCard";

const TvHome = () => {
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
        <div className="mt-5 flex justify-between items-center">
          {Array.from({ length: 6 }).map((item, i) => (
            <ChannelCard key={i} />
          ))}
        </div>
      </>

      {/* Banner Ads */}
      <div className="mt-5 w-full h-[157px]">
        <img src={bannerImg} alt="" className="w-full h-full" />
      </div>

      {/* Entertainment Section */}
      <>
        <SectionTitleBtn>Entertainment</SectionTitleBtn>
        <div className="mt-5 flex justify-between items-center">
          {Array.from({ length: 6 }).map((item, i) => (
            <ChannelCard key={i} />
          ))}
        </div>
      </>

      {/* Banner Ads */}
      <div className="mt-5 w-full h-[157px]">
        <img src={bannerImg} alt="" className="w-full h-full" />
      </div>

      {/* Entertainment Section */}
      <>
        <SectionTitleBtn>Movies</SectionTitleBtn>
        <div className="mt-5 flex justify-between items-center">
          {Array.from({ length: 6 }).map((item, i) => (
            <ChannelCard key={i} />
          ))}
        </div>
      </>

      {/* Banner Ads */}
      <div className="mt-5 w-full h-[157px]">
        <img src={bannerImg} alt="" className="w-full h-full" />
      </div>

      {/* Entertainment Section */}
      <>
        <SectionTitleBtn>News</SectionTitleBtn>
        <div className="mt-5 flex justify-between items-center">
          {Array.from({ length: 6 }).map((item, i) => (
            <ChannelCard key={i} />
          ))}
        </div>
      </>

      {/* Banner Ads */}
      <div className="mt-5 w-full h-[157px]">
        <img src={bannerImg} alt="" className="w-full h-full" />
      </div>

      {/* Entertainment Section */}
      <>
        <SectionTitleBtn>All Channel</SectionTitleBtn>
        <div className="mt-5 flex justify-between items-center">
          {Array.from({ length: 6 }).map((item, i) => (
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

export default TvHome;
