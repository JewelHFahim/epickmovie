import { Helmet } from "react-helmet";
import { useSiteConfig } from "../../../utils/configHooks/ConfigHooks";
import CardTheme3 from "../../../components/theme3-contents/card-theme3/CardTheme3";
import { useLocation } from "react-router-dom";
import { useBanglaMovieListTheme3Query } from "../../../redux/features/movies/movieApi";
import PaginationTheme1 from "../../../utils/common-pagination/pagination-theme1/PaginationTheme1";

const BanglaTheme3 = () => {
  const { siteName } = useSiteConfig();
  const location = useLocation();
  const currentRoute = location.pathname;
  const currentP =
    Number(currentRoute?.slice(13)) === 0 ? 1 : Number(currentRoute?.slice(13));
  const { data: perPageBanglaMovies, isLoading } =
    useBanglaMovieListTheme3Query({ quantity: 42, currentP });

  return (
    <div className="mt-4 mr-4 min-h-screen lg:w-[850px]">
      <Helmet>
        <title>{siteName}</title>
        <meta
          name="description"
          content="Unlimited Bangla Movies and Latest Collections"
        />
      </Helmet>

      <div className="px-4 h-[70px] lg:h-[53px] flex items-center justify-between bg-[#D9D9D914]">
        <p className="text-white text-[35px] lg:text-xl border-l-4 border-red-600 pl-1">
          Latest Bangla Movies
        </p>
      </div>

      <div className="mt-4 grid grid-cols-3 lg:grid-cols-5 gap-2">
        {isLoading
          ? Array.from({ length: 42 }).map((item, i) => (
              <div
                key={i}
                className="lg:w-[160px] h-[550px] lg:h-[280px] flex flex-col justify-between"
              >
                <div className="w-full h-[85%] bg-slate-700 animate-pulse"></div>

                <div className="w-full h-[12%] bg-slate-700 animate-pulse"></div>
              </div>
            ))
          : perPageBanglaMovies?.data?.data?.map((item, i) => (
              <CardTheme3 key={i} item={item} />
            ))}
      </div>

      {/* =================== PAGINATIONS ===================== */}
      <div className="">
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
