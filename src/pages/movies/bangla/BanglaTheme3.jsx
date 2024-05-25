import { Helmet } from "react-helmet";
import { useSiteConfig } from "../../../utils/configHooks/ConfigHooks";
import CardTheme3 from "../../../components/theme3-contents/card-theme3/CardTheme3";
import { useLocation } from "react-router-dom";
import { usePerPageBanglaMovieListTheme1Query } from "../../../redux/features/movies/movieApi";
import PaginationTheme1 from "../../../utils/common-pagination/pagination-theme1/PaginationTheme1";

const BanglaTheme3 = () => {
  const { siteName } = useSiteConfig();
  const location = useLocation();
  const currentRoute = location.pathname;
  const currentP =
    Number(currentRoute?.slice(13)) === 0 ? 1 : Number(currentRoute?.slice(13));
  //   const { data: largeDeviceBanglaMovies, isLoading: largeDeviceBanglaMovieLoading} = useBanglaMovieListTheme2Query(currentP);
  const { data: perPageBanglaMovies, isLoading } =
    usePerPageBanglaMovieListTheme1Query(currentP);

  return (
    <div className="mt-6 min-h-screen">
      <Helmet>
        <title>{siteName}</title>
        <meta
          name="description"
          content="Unlimited Bangla Movies and Latest Collections"
        />
      </Helmet>

      <div className="px-4 h-[53px] flex items-center justify-between bg-[#D9D9D914]">
        <p className="text-white text-xl border-l-4 border-red-600 pl-1">
          Latest Bangla Movies
        </p>
      </div>

      <CardTheme3 datas={perPageBanglaMovies} isLoading={isLoading} />

      {/* =================== PAGINATIONS ===================== */}
      <div className="hidden lg:block">
        <PaginationTheme1
          currentPage={currentP}
          perPgaeMovie={perPageBanglaMovies}
          type="movies"
          btnColor="bg-[#009987]"
        />
      </div>
    </div>
  );
};

export default BanglaTheme3;
