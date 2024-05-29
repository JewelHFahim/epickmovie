import CardTheme3 from "../../components/theme3-contents/card-theme3/CardTheme3";
import FeaturedSliderTheme3 from "../../components/theme3-contents/fetured-slider/FeturedSliderTheme3";
import SectionTitleTheme3 from "../../components/theme3-contents/SectionTitleTheme3";
import SliderTheme3 from "../../components/theme3-contents/slider/SliderTheme3";
import { useMovieListTheme3Query } from "../../redux/features/movies/movieApi";
import { useTvShowTheme3Query } from "../../redux/features/tv-show/tvShowApi";

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
    <div className="mt-4 lg:w-[850px] lg:mr-4 px-4 lg:px-0">
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
      <div className="mt-10">
        <SectionTitleTheme3 sideBtn={true}>Latest Blogs</SectionTitleTheme3>

        <div className="mt-10 grid grid-cols gap-y-5">
          {Array.from({ length: 5 }).map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-x-4 border-b p-2 pb-5"
            >
              <div className=" border">
                <img
                  src="https://cdn.paperpile.com/guides/img/credible-blog-illustr-1400x1400.png"
                  alt=""
                  className="w-[150px] h-[180px] lg:w-[67px] lg:h-[80px] object-cover"
                />
              </div>
              <div className="text-white w-[90%]">
                <h2 className="text-[30px] lg:text-[18px] font-bold">
                  How to Create Detailed Buyer Personas for Your Business [+Free
                  Persona Template]
                </h2>
                <p className="mt-1 text-xl lg:text-base">
                  As marketers, we know that marketing according to data points
                  alone isn’t enough to get meaningful engagement for your
                  business—that’s the job of a buyer persona
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeTheme3;
