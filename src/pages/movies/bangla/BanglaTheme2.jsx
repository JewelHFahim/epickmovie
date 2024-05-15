import { useLocation } from "react-router-dom";
import PaginationTheme1 from "../../../utils/common-pagination/pagination-theme1/PaginationTheme1";
import SeoContentTheme2 from "../../../components/theme2-contents/SeoContentTheme2";
import { usePerPageBanglaMovieListTheme1Query } from "../../../redux/features/movies/movieApi";
import SectionTitleTheme2 from "../../../components/theme2-contents/SectionTitleTheme2";
import Theme2Card from "../../../components/movie-card/move-card-theme2/Theme2Card";

const BanglaTheme2 = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const currentP =
    Number(currentRoute?.slice(13)) === 0 ? 1 : Number(currentRoute?.slice(13));
  const { data: perPageBanglaMovies, isLoading } =
    usePerPageBanglaMovieListTheme1Query(currentP);

  return (
    <div className="bg-[#A8A8A812] px-8 py-4 lg:px-3 lg:py-3 mt-8 lg:mt-14">
      {/* ==================== MOVIES ======================== */}
      <div className="">
        <SectionTitleTheme2
          url=""
          className="bg-[#009987]"
          textColor="text-[#009987]"
        >
          Bangla Movies
        </SectionTitleTheme2>

        <Theme2Card
          isLoading={isLoading}
          dataList={perPageBanglaMovies}
          className="text-[#009987]"
        />
      </div>

      {/* =================== PAGINATIONS ===================== */}
      <PaginationTheme1
        currentPage={currentP}
        perPgaeMovie={perPageBanglaMovies}
        type="movies"
        btnColor="bg-[#009987]"
      />

      <hr className="mt-7 mb-2" />

      {/* ==================== SEO-CONTENT ===================== */}
      <SeoContentTheme2 />
    </div>
  );
};

export default BanglaTheme2;
