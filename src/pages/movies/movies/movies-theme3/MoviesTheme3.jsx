import { useLocation } from "react-router-dom";
import CardTheme3 from "../../../../components/theme3-contents/card-theme3/CardTheme3";
import { useMovieListTheme3Query } from "../../../../redux/features/movies/movieApi";
import PaginationTheme1 from "../../../../utils/common-pagination/pagination-theme1/PaginationTheme1";
import { useEffect } from "react";

const MoviesTheme3 = () => {
  const location = useLocation();
  const currentRoute = location?.pathname;
  const currentP = Number(currentRoute?.slice(13)) === 0 ? 1 : Number(currentRoute?.slice(13));
  const { data: movieList, isLoading: movieLoading } = useMovieListTheme3Query({ quantity: 42, page: currentP || 1});

  // page scroll effect
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="mt-4 lg:mr-4 px-4 lg:px-0 border-b lg:border-0 pb-10 lg:w-[850px]">

      <div className="px-4 h-[70px] lg:h-[53px] flex items-center justify-between bg-[#D9D9D914]">
        <p className="text-white text-[35px] lg:text-xl border-l-4 border-red-600 pl-1">
          Latest Movies
        </p>
      </div>

      <div className="mt-4 grid grid-cols-3 lg:grid-cols-5 gap-2">
        {movieLoading
          ? Array.from({ length: 42 }).map((item, i) => (
              <div
                key={i}
                className="lg:w-[160px] h-[550px] lg:h-[280px] flex flex-col justify-between"
              >
                <div className="w-full h-[85%] bg-slate-700 animate-pulse"></div>

                <div className="w-full h-[12%] bg-slate-700 animate-pulse"></div>
              </div>
            ))
          : movieList?.data?.data?.map((item, i) => (
              <CardTheme3 key={i} item={item} />
            ))}
      </div>

      {/* =================== PAGINATIONS ===================== */}
      <div className="">
        <PaginationTheme1
          currentPage={currentP}
          perPgaeMovie={movieList}
          type="movies"
          btnColor="bg-[#009987]"
        />
      </div>
      
    </div>
  );
};

export default MoviesTheme3;
