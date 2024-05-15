import { useLocation } from "react-router-dom";
import { usePerPgaeTvShowQuery } from "../../../redux/features/tv-show/tvShowApi";
import Theme2Card from "../../../components/movie-card/move-card-theme2/Theme2Card";
import SeoContentTheme2 from "../../../components/theme2-contents/SeoContentTheme2";
import SectionTitleTheme2 from "../../../components/theme2-contents/SectionTitleTheme2";
import PaginationTheme1 from "../../../utils/common-pagination/pagination-theme1/PaginationTheme1";

const TvShowTheme2 = () => {
  const location = useLocation();
  const currentRoute = location?.pathname;
  const currentP =
    Number(currentRoute?.slice(14)) === 0 ? 1 : Number(currentRoute?.slice(14));
  const { data: perPageTvShows, isLoading } = usePerPgaeTvShowQuery(currentP);

  return (
    <div className="bg-[#A8A8A812] px-8 py-4 lg:px-3 lg:py-3 mt-8 lg:mt-14">
      {/* ==================== MOVIES ======================== */}
      <div className="">
        <SectionTitleTheme2
          url=""
          className="bg-[#FF0AE6]"
          textColor="text-[#FF0AE6]"
        >
          Latest Web-Series
        </SectionTitleTheme2>

        <Theme2Card
          isLoading={isLoading}
          dataList={perPageTvShows}
          className="text-[#1FCD0F]"
        />
      </div>

      {/* =================== PAGINATIONS ===================== */}
      <PaginationTheme1
        currentPage={currentP}
        perPgaeMovie={perPageTvShows}
        type="tv-show"
        btnColor="bg-[#1FCD0F]"
      />

      <hr className="mt-7 mb-2" />

      {/* ==================== SEO-CONTENT ===================== */}
      <SeoContentTheme2 />
    </div>
  );
};

export default TvShowTheme2;
