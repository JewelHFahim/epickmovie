import SectionTitleBtn from "../../utils/tv-channels/SectionTitleBtn";
import ChannelCard from "../../components/tv-channels/channel-card/ChannelCard";
import { useSingleTvChannelQuery } from "../../redux/features/live-tv/liveTvApi";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import HLSPlayer from "../../components/tv-channels/HLSPlayer";
import TvNews from "../../components/tv-channels/TvNews";

const TvStreaming = () => {
  const { id } = useParams();
  const { data: singleCategory } = useSingleTvChannelQuery(id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="mt-8">
      {/* TvNews Section */}
      <TvNews />

      {/* Streaming */}
      <div className="mt-5 flex flex-col justify-center items-center w-[80%] mx-auto lg:w-full">
        <div className="w-full flex flex-col justify-center items-center">
          <HLSPlayer singleCategory={singleCategory} />
          {/* <PlyrPlayer singleCategory={singleCategory} /> */}
          {/* <TestPlayer singleCategory={singleCategory}/> */}
          {/* <HTMLPlayer singleCategory={singleCategory}/> */}
        </div>

        <p className="hidden lg:block mt-5 text-[22px] text-white text-center px-10">
          {singleCategory?.data?.description}
        </p>
      </div>

      {/* Sport Section */}
      <div className="w-[80%] mx-auto lg:w-full">
        <SectionTitleBtn>Sports</SectionTitleBtn>
        <div className="mt-5 hidden lg:flex flex-wrap gap-5">
          {Array.from({ length: 12 }).map((item, i) => (
            <ChannelCard key={i} />
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-8 mx-auto lg:hidden">
          {Array.from({ length: 8 }).map((item, i) => (
            <ChannelCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TvStreaming;
