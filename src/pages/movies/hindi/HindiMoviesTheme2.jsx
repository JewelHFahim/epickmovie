import { useLocation } from "react-router-dom";
import {
  useHindiMovieListTHeme2Query,
  usePerPageHindiMovieListQuery,
} from "../../../redux/features/movies/movieApi";
import PaginationTheme1 from "../../../utils/common-pagination/pagination-theme1/PaginationTheme1";
import SectionTitleTheme2 from "../../../components/theme2-contents/SectionTitleTheme2";
import SeoContentTheme2 from "../../../components/theme2-contents/SeoContentTheme2";
import Theme2Card from "../../../components/movie-card/move-card-theme2/Theme2Card";

const HindiMoviesTheme2 = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const currentP =
    Number(currentRoute?.slice(12)) === 0 ? 1 : Number(currentRoute?.slice(12));
  const { data: largeDevHindiMovies, largeDevLoading } =
    useHindiMovieListTHeme2Query(currentP);
  const { data: perPageHindiMovies, isLoading } =
    usePerPageHindiMovieListQuery(currentP);

  return (
    <div className="bg-[#A8A8A812] px-8 py-4 lg:px-3 lg:py-3 mt-8 lg:mt-14">
      <SectionTitleTheme2
        url=""
        className="bg-[#009987]"
        textColor="text-[#009987]"
      >
        Bollywood Movies
      </SectionTitleTheme2>

      <div className="hidden lg:block">
        <Theme2Card
          isLoading={largeDevLoading}
          dataList={largeDevHindiMovies}
          className="text-[#009987]"
        />
      </div>

      <div className="lg:hidden">
        <Theme2Card
          isLoading={isLoading}
          dataList={perPageHindiMovies}
          className="text-[#009987]"
        />
      </div>

      <div className="hidden lg:block">
        <PaginationTheme1
          currentPage={currentP}
          perPgaeMovie={largeDevHindiMovies}
          type="english"
          btnColor="bg-[#009987]"
        />
      </div>

      <div className="lg:hidden">
        <PaginationTheme1
          currentPage={currentP}
          perPgaeMovie={perPageHindiMovies}
          type="english"
          btnColor="bg-[#009987]"
        />
      </div>

      <hr className="mt-7 mb-2" />

      {/* ==================== SEO-CONTENT ===================== */}
      <SeoContentTheme2 />
    </div>
  );
};

export default HindiMoviesTheme2;
