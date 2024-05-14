import { Link, useLocation } from "react-router-dom";
import { usePerPgaeTvShowQuery } from "../../../redux/features/tv-show/tvShowApi";
import LazyLoadingTheme2 from "../../../components/lazy-loading/LazyLoadingTheme2";
import SectionTitleTheme2 from "../../../components/theme2-contents/SectionTitleTheme2";
import PaginationTheme1 from "../../../utils/common-pagination/pagination-theme1/PaginationTheme1";
import SeoContentTheme2 from "../../../components/theme2-contents/SeoContentTheme2";

const TvShowTheme2 = () => {
  const location = useLocation();
  const currentRoute = location?.pathname;
  const currentP =
    Number(currentRoute?.slice(14)) === 0 ? 1 : Number(currentRoute?.slice(14));
  const { data: perPageTvShows, isLoading } = usePerPgaeTvShowQuery(currentP);

  return (
    <div className="bg-[#A8A8A812] p-3 mt-14">
      {/* ==================== MOVIES ======================== */}
      <div className="">
        <SectionTitleTheme2
          url=""
          className="bg-[#FF0AE6]"
          textColor="text-[#FF0AE6]"
        >
          Latest Web-Series
        </SectionTitleTheme2>

        <div className="mt-5">
          {isLoading ? (
            <LazyLoadingTheme2 length={perPageTvShows?.data?.data?.length} />
          ) : (
            <div className="flex flex-col gap-y-1 font-jost">
              {perPageTvShows?.data?.data?.map((item, i) => (
                <Link
                  key={i}
                  className="underline text-[#1FCD0F] font-medium text-[20px] hover:text-[#a1ea9a] transition-all ease-in-out"
                >
                  {item?.post_title}
                </Link>
              ))}
            </div>
          )}
        </div>
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
