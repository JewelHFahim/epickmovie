import bannerImg from "../../assets/tv-channel-ads.jpg";
import streamming from "../../assets/stramming.png";
import SectionTitleBtn from "../../utils/tv-channels/SectionTitleBtn";
import ChannelCard from "../../components/tv-channels/channel-card/ChannelCard";
import { useSingleTvChannelQuery } from "../../redux/features/live-tv/liveTvApi";
import { useParams } from "react-router-dom";
import VideoPlayer from "../video-player/VideoPlayer";
import { useEffect } from "react";

const TvStreaming = () => {
  const { id } = useParams();
  const { data: singleCategory } = useSingleTvChannelQuery(id);
  console.log(singleCategory)

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

      {/* Banner Ads */}
      <div className="mt-5 w-full h-[157px]">
        <img src={bannerImg} alt="" className="w-full h-full" />
      </div>

      {/* Streaming */}
      <div className="mt-5 flex flex-col justify-center items-center w-[80%] mx-auto lg:w-full">
        <div className="">
          {/* <img src={streamming} alt="" className="w-full h-full object-cover rounded-[10px]"/> */}
          <VideoPlayer singleCategory={singleCategory}/>

        </div>

        <p className="hidden lg:block mt-5 text-[22px] text-white text-center px-10">
         {singleCategory?.data?.description}
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
