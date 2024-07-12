import CardTheme3 from "../../components/theme3-contents/card-theme3/CardTheme3";
import FeaturedSliderTheme3 from "../../components/theme3-contents/fetured-slider/FeturedSliderTheme3";
import SectionTitleTheme3 from "../../components/theme3-contents/SectionTitleTheme3";
import SliderTheme3 from "../../components/theme3-contents/slider/SliderTheme3";
import { useMovieListTheme3Query } from "../../redux/features/movies/movieApi";
import { useTvShowTheme3Query } from "../../redux/features/tv-show/tvShowApi";
import Blogs from "../blogs/Blogs";

const HomeTheme3 = () => {

  const { data: movieList, isLoading: movieLoading } = useMovieListTheme3Query({
    quantity: 25,
    page: 1,
  });
  
  const { data: tvShowsList, isLoading: tvLoading } = useTvShowTheme3Query({
    quantity: 25,
    page: 1,
  });

  return (
    <div className="mt-4 lg:mr-4 px-4 lg:px-0 border-b lg:border-0 pb-10 lg:w-[850px]">
      <SliderTheme3 />

      {/* ==================>> FEATURED <<==================== */}
      <>
        <SectionTitleTheme3 sideBtn={false}>Featured</SectionTitleTheme3>
        <FeaturedSliderTheme3 />
      </>

      <hr className="border-1 border-[#676666] mt-5" />

      {/* ================>> LATEST MOVIES <<================= */}
      <div className="mt-10">
        <SectionTitleTheme3 sideBtn={true}> Latest Movies </SectionTitleTheme3>

        <div className="mt-5 grid grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-y-3">
          {movieLoading
            ? Array.from({ length: 25 }).map((item, i) => (
                <div
                  key={i}
                  className="lg:w-[160px] h-[550px] lg:h-[280px] flex flex-col justify-between"
                >
                  <div className="w-full h-[85%] bg-slate-700 animate-pulse"></div>

                  <div className="w-full h-[12%] bg-slate-700 animate-pulse"></div>
                </div>
              ))
            : movieList?.data?.data?.map((item, i) => (
                <CardTheme3 key={i} item={item} />
              ))}
        </div>
      </div>

      {/* ================>> LATEST TV SHOWS <<================= */}
      <div className="mt-10">
        <SectionTitleTheme3 sideBtn={true}>
          Latest Web-Series
        </SectionTitleTheme3>

        <div className="mt-5 grid grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-y-3">
          {tvLoading
            ? Array.from({ length: 25 }).map((item, i) => (
                <div
                  key={i}
                  className="lg:w-[160px] h-[550px] lg:h-[280px] flex flex-col justify-between"
                >
                  <div className="w-full h-[85%] bg-slate-700 animate-pulse"></div>

                  <div className="w-full h-[12%] bg-slate-700 animate-pulse"></div>
                </div>
              ))
            : tvShowsList?.data?.data?.map((item, i) => (
                <CardTheme3 key={i} item={item} />
              ))}
        </div>
      </div>

      {/* ================>> LATEST BLOGS <<================= */}
      <Blogs />
    </div>
  );
};

export default HomeTheme3;
