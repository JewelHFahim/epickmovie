import bannerImg from "../../assets/tv-channel-ads.jpg";
import streamming from "../../assets/stramming.png";
import SectionTitleBtn from "../../utils/tv-channels/SectionTitleBtn";
import ChannelCard from "../../components/tv-channels/channel-card/ChannelCard";

const TvStreaming = () => {
  return (
    <div className="mt-8">
      {/* Banner Ads */}
      <div className="mt-5 w-full h-[157px]">
        <img src={bannerImg} alt="" className="w-full h-full" />
      </div>

      {/* Streaming */}
      <div className="mt-5 flex flex-col justify-center items-center">
        <div className="w-[1037px]  h-[510px] rounded-[8px] mx-auto">
          <img src={streamming} alt="" className="w-full h-full object-cover" />
        </div>

        <p className="mt-5 text-[22px] text-white text-center px-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      {/* Banner Ads */}
      <div className="mt-5 w-full h-[157px]">
        <img src={bannerImg} alt="" className="w-full h-full" />
      </div>

      {/* Sport Section */}
      <>
        <SectionTitleBtn>Sport</SectionTitleBtn>
        <div className="mt-5 grid grid-cols-6 gap-5">
          {Array.from({ length: 12 }).map((item, i) => (
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

export default TvStreaming;
