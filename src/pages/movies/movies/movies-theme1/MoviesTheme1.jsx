import SiteNews from "../../../../components/SiteNews/SiteNews";
import LazyLoadingTheme1 from "../../../../components/lazy-loading/LazyLoadingTheme1";
import Theme1Card from "../../../../components/movie-card/theme1-card/Theme1Card";
import { usePerPgaeMovieQuery } from "../../../../redux/features/movies/movieApi";
import { useLocation } from "react-router-dom";
import PaginationTheme1 from "../../../../utils/common-pagination/pagination-theme1/PaginationTheme1";
import UpCommingTheme1 from "../../../../components/theme1-contents/UpCommingTheme1";

const MoviesTheme1 = () => {

  const location = useLocation();
  const currentRoute = location.pathname;

  const currentP = Number(currentRoute?.slice(13));
  const { data: perPgaeMovie, isLoading: movieLoading } = usePerPgaeMovieQuery(currentP);

  return (
    <div>
      <SiteNews />

      <div className="mt-5">
        <button className="px-6 h-[40px] bg-[#FFB800] text-black text-[18px] font-bold flex justify-center items-center gap-x-4">
          <span>All Movies</span>
        </button>

        {movieLoading ? (
          <div className="w-full">
            <LazyLoadingTheme1 lazyLength={24} />
          </div>
        ) : (
          <div className=" mt-5 grid grid-cols-8 gap-5">
            {perPgaeMovie?.data?.data?.map((item, i) => (
              <Theme1Card key={i} item={item} />
            ))}
          </div>
        )}
      </div>

      <PaginationTheme1
        currentPage={currentP}
        perPgaeMovie={perPgaeMovie}
        type="movies"
      />

      {/* ========> Up Comming Movies/Tv Shows <========*/}
      <UpCommingTheme1 />
    </div>
  );
};

export default MoviesTheme1;
