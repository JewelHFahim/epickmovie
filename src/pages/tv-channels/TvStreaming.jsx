import bannerImg from "../../assets/tv-channel-ads.jpg";
import streamming from "../../assets/stramming.png";
import SectionTitleBtn from "../../utils/tv-channels/SectionTitleBtn";
import ChannelCard from "../../components/tv-channels/channel-card/ChannelCard";

const TvStreaming = () => {
  return (
    <div className="mt-8">
      <div className="w-full flex justify-center items-center py-2 lg:hidden">
        <p className="text-[18px] text-white">
          সকল খেলার আপডেট পেতে আমাদের চ্যানেলে জয়েন করুন এবং আমাদের সাইট ভিজিট
          করুন
        </p>
      </div>

      {/* Banner Ads */}
      <div className="mt-5 w-full h-[157px]">
        <img src={bannerImg} alt="" className="w-full h-full" />
      </div>

      {/* Streaming */}
      <div className="mt-5 flex flex-col justify-center items-center w-[80%] mx-auto lg:w-full">
        <div className="w-full lg:w-[1037px] h-[450px] lg:h-[510px] rounded-[10px] mx-auto border-2 border-yellow-600">
          <img
            src={streamming}
            alt=""
            className="w-full h-full object-cover rounded-[10px] "
          />
        </div>

        <p className="hidden lg:block mt-5 text-[22px] text-white text-center px-10">
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
      <div className="w-[80%] mx-auto lg:w-full">
        <SectionTitleBtn>Sports</SectionTitleBtn>
        <div className="mt-5 hidden lg:flex flex-wrap gap-5">
          {Array.from({ length: 12 }).map((item, i) => (
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

export default TvStreaming;
