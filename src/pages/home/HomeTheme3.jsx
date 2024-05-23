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
    <div className=" border-red-500 flex items-center">
      <div className=" py-5 w-[840px]">
        <SliderTheme3 />

        {/* ==================>> FEATURED <<==================== */}
        <>
          <SectionTitleTheme3 sideBtn={false}>Featured</SectionTitleTheme3>
          <FeaturedSliderTheme3 />
        </>

        <hr className="border-1 border-[#676666] mt-5" />

        {/* ================>> LATEST MOVIES <<================= */}
        <div className="mt-10">
          <SectionTitleTheme3 sideBtn={true}>Latest Movies</SectionTitleTheme3>
          <CardTheme3 datas={movieList} isLoading={movieLoading} />
        </div>

        {/* ================>> LATEST TV SHOWS <<================= */}
        <div className="mt-10">
          <SectionTitleTheme3 sideBtn={true}>
            Latest Web-Series
          </SectionTitleTheme3>
          <CardTheme3 datas={tvShowsList} isLoading={tvLoading} />
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
                    className="w-[67px] h-[80px] object-cover"
                  />
                </div>
                <div className="text-white w-[90%]">
                  <h2 className="text-[18px] font-bold">
                    How to Create Detailed Buyer Personas for Your Business
                    [+Free Persona Template]
                  </h2>
                  <p className="mt-1">
                    As marketers, we know that marketing according to data
                    points alone isn’t enough to get meaningful engagement for
                    your business—that’s the job of a buyer persona
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border border-blue-500 bg-green-900 w-[360px] h-full">
        Side Content
      </div>
    </div>
  );
};

export default HomeTheme3;
