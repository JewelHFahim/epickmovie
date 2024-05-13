import { useLocation } from "react-router-dom";
import SiteNews from "../../../components/SiteNews/SiteNews";
import LazyLoadingTheme1 from "../../../components/lazy-loading/LazyLoadingTheme1";
import Theme1Card from "../../../components/movie-card/theme1-card/Theme1Card";
import SectionTitle from "../../../utils/theme1-contents/section-title/SectionTitle";
import { usePerPgaeTvShowQuery } from "../../../redux/features/tv-show/tvShowApi";
import PaginationTheme1 from "../../../utils/common-pagination/pagination-theme1/PaginationTheme1";
import UpCommingTheme1 from "../../../components/theme1-contents/UpCommingTheme1";

const TvShowsTheme1 = () => {
  const location = useLocation();
  const currentRoute = location?.pathname;
  const currentP = Number(currentRoute?.slice(14)) === 0 ? 1 : Number(currentRoute?.slice(14));
  const { data: perPageTvShows, isLoading } = usePerPgaeTvShowQuery(currentP);

  return (
    <div className="px-10 lg:px-0">
      <SiteNews />

      {/* All Web-Series */}
      <div className="mt-5">
        <SectionTitle> All Web-Series </SectionTitle>

        {isLoading ? (
          <div className="w-full">
            <LazyLoadingTheme1 lazyLength={24} />
          </div>
        ) : (
          <>
          <div className=" mt-5 grid grid-cols-3 lg:grid-cols-8 gap-4">
            {perPageTvShows?.data?.data?.map((item, i) => (
              <Theme1Card key={i} item={item} isLoading={isLoading}/>
            ))}
          </div>
          </>
        )}
      </div>

      {/* Pagination */}
      <PaginationTheme1
        currentPage={currentP}
        perPgaeMovie={perPageTvShows}
        type="tv-show"
      />

      {/* ========> Up Comming Movies/Tv Shows <========*/}
      <UpCommingTheme1 />
    </div>
  );
};

export default TvShowsTheme1;
