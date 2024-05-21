import SectionTitleTheme2 from "../../components/theme2-contents/SectionTitleTheme2";
import { usePerPgaeMovieQuery } from "../../redux/features/movies/movieApi";
import SeoContentTheme2 from "../../components/theme2-contents/SeoContentTheme2";
import { usePerPgaeTvShowQuery } from "../../redux/features/tv-show/tvShowApi";
import Theme2Card from "../../components/movie-card/move-card-theme2/Theme2Card";

const HomeTheme2 = () => {

  const { data: movieList, isLoading: movieLoading } = usePerPgaeMovieQuery(1);
  const { data: perPageTvShows, isLoading: tvLoading } = usePerPgaeTvShowQuery(1);

  return (
    <div className="bg-[#A8A8A812] px-8 py-4 lg:px-3 lg:py-3 mt-8 lg:mt-14 pb-16">
      
      {/* ==================== MOVIES ======================== */}
      <div className="">
        <SectionTitleTheme2
          url="/movies"
          className="bg-[#009987]"
          textColor="text-[#009987]"
        >
          Latest Movies
        </SectionTitleTheme2>

        <Theme2Card
          isLoading={movieLoading}
          dataList={movieList}
          className="text-[#009987]"
        />
      </div>

      {/* ==================== WEB-SERIES ===================== */}
      <div className="mt-8">
        <SectionTitleTheme2
          url="/tv-show"
          className="bg-[#FF0AE6]"
          textColor="text-[#FF0AE6]"
        >
          Latest Web-Series
        </SectionTitleTheme2>

        <Theme2Card
          isLoading={tvLoading}
          dataList={perPageTvShows}
          className="text-[#1FCD0F]"
        />
      </div>

      <hr className="my-5" />

      {/* ==================== SEO-CONTENT ===================== */}
      <SeoContentTheme2 />
    </div>
  );
};

export default HomeTheme2;
