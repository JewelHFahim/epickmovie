import { useLocation } from "react-router-dom";
import SectionTitleTheme2 from "../../../../components/theme2-contents/SectionTitleTheme2";
import {
  usePerPageMovieListTheme2Query,
  usePerPgaeMovieQuery,
} from "../../../../redux/features/movies/movieApi";
import PaginationTheme1 from "../../../../utils/common-pagination/pagination-theme1/PaginationTheme1";
import SeoContentTheme2 from "../../../../components/theme2-contents/SeoContentTheme2";
import Theme2Card from "../../../../components/movie-card/move-card-theme2/Theme2Card";
import { useEffect } from "react";

const MoviesTheme2 = () => {
  const location = useLocation();
  const currentRoute = location?.pathname;
  const currentP =
    Number(currentRoute?.slice(13)) === 0 ? 1 : Number(currentRoute?.slice(13));
  const { data: perPgaeMovie, isLoading: movieLoading } =
    usePerPgaeMovieQuery(currentP);

  const { data: largeMovieList, isLoading: largeMovieLoading } =
    usePerPageMovieListTheme2Query(currentP);

  // page scroll effect
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-[#A8A8A812] px-8 py-4 lg:px-3 lg:py-3 mt-8 lg:mt-14">
      {/* ==================== MOVIES ======================== */}
      <div className="">
        <SectionTitleTheme2
          url=""
          className="bg-[#009987]"
          textColor="text-[#009987]"
        >
          Latest Movies
        </SectionTitleTheme2>

        <div className="hidden lg:block">
          <Theme2Card
            isLoading={largeMovieLoading}
            dataList={largeMovieList}
            className="text-[#009987]"
          />
        </div>

        <div className="block lg:hidden">
          <Theme2Card
            isLoading={movieLoading}
            dataList={perPgaeMovie}
            className="text-[#009987]"
          />
        </div>
      </div>

      {/* =================== PAGINATIONS ===================== */}
      <div className="hidden lg:block">
        <PaginationTheme1
          currentPage={currentP}
          perPgaeMovie={largeMovieList}
          type="movies"
          btnColor="bg-[#009987]"
        />
      </div>

      <div className="lg:hidden">
        <PaginationTheme1
          currentPage={currentP}
          perPgaeMovie={perPgaeMovie}
          type="movies"
          btnColor="bg-[#009987]"
        />
      </div>

      <hr className="mt-7 mb-2" />

      {/* ==================== SEO-CONTENT ===================== */}
      <SeoContentTheme2 />
    </div>
  );
};

export default MoviesTheme2;
