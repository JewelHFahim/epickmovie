import { useLocation } from "react-router-dom";
import CardTheme3 from "../../../components/theme3-contents/card-theme3/CardTheme3";
import {
  usePerPgaeTvShowQuery,
  // usePerPgaeTvShowTheme2Query
} from "../../../redux/features/tv-show/tvShowApi";
import PaginationTheme1 from "../../../utils/common-pagination/pagination-theme1/PaginationTheme1";

const TvShowTheme3 = () => {
  const location = useLocation();
  const currentRoute = location?.pathname;
  const currentP =
    Number(currentRoute?.slice(14)) === 0 ? 1 : Number(currentRoute?.slice(14));
  const { data: perPageTvShows, isLoading } = usePerPgaeTvShowQuery(currentP);
  // const { data: largeDeviceTvShows, isLoading: largeDeviceTvShowsLoading } = usePerPgaeTvShowTheme2Query(currentP);

  return (
    <div className="mt-6">
      <div className="px-4 h-[53px] flex items-center justify-between bg-[#D9D9D914]">
        <p className="text-white text-xl border-l-4 border-red-600 pl-1">
          Latest TvShows
        </p>
      </div>

      <CardTheme3 datas={perPageTvShows} isLoading={isLoading} />

            {/* =================== PAGINATIONS ===================== */}
      <div className="hidden lg:block">
        <PaginationTheme1
          currentPage={currentP}
          perPgaeMovie={perPageTvShows}
          type="movies"
          btnColor="bg-[#009987]"
        />
        </div>
    </div>
  );
};

export default TvShowTheme3;
