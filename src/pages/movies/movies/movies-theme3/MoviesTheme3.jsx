import { useLocation } from "react-router-dom";
import CardTheme3 from "../../../../components/theme3-contents/card-theme3/CardTheme3";
import {
  // usePerPageMovieListTheme2Query,
  usePerPgaeMovieQuery,
} from "../../../../redux/features/movies/movieApi";
import PaginationTheme1 from "../../../../utils/common-pagination/pagination-theme1/PaginationTheme1";

const MoviesTheme3 = () => {
  const location = useLocation();
  const currentRoute = location?.pathname;
  const currentP =
    Number(currentRoute?.slice(13)) === 0 ? 1 : Number(currentRoute?.slice(13));
  const { data: perPgaeMovie, isLoading: movieLoading } =
    usePerPgaeMovieQuery(currentP);

  // const { data: largeMovieList, isLoading: largeMovieLoading } = usePerPageMovieListTheme2Query(currentP);

  return (
    <div className="mt-6">
      <div className="px-4 h-[53px] flex items-center justify-between bg-[#D9D9D914]">
        <p className="text-white text-xl border-l-4 border-red-600 pl-1">
          Latest Movies
        </p>
      </div>

      <CardTheme3 datas={perPgaeMovie} isLoading={movieLoading} />

      {/* =================== PAGINATIONS ===================== */}
      <div className="hidden lg:block">
        <PaginationTheme1
          currentPage={currentP}
          perPgaeMovie={perPgaeMovie}
          type="movies"
          btnColor="bg-[#009987]"
        />
        
      </div>
    </div>
  );
};

export default MoviesTheme3;
