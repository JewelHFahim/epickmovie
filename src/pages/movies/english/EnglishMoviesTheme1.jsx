import { useLocation } from "react-router-dom";
import SiteNews from "../../../components/SiteNews/SiteNews";
import LazyLoadingTheme1 from "../../../components/lazy-loading/LazyLoadingTheme1";
import Theme1Card from "../../../components/movie-card/theme1-card/Theme1Card";
import UpCommingTheme1 from "../../../components/theme1-contents/UpCommingTheme1";
import { usePerPageEnglishMovieListQuery } from "../../../redux/features/movies/movieApi";
import PaginationTheme1 from "../../../utils/common-pagination/pagination-theme1/PaginationTheme1";

const EnglishMoviesTheme1 = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const currentP = Number(currentRoute?.slice(14)) === 0 ? 1 : Number(currentRoute?.slice(14));
  const { data: perPageEnglishMovies, isLoading } = usePerPageEnglishMovieListQuery(currentP);

  return (
    <div className="px-10 lg:px-0">
      <SiteNews />

      <div className="mt-5">
        
        <button className="px-6 h-[40px] bg-[#FFB800] text-black text-[18px] font-bold flex justify-center items-center gap-x-4">
          <span>English Movies</span>
        </button>

        {isLoading ? (
          <div className="w-full">
            <LazyLoadingTheme1 lazyLength={24} />
          </div>
        ) : (
          <>
            <div className=" mt-5 grid grid-cols-3 lg:grid-cols-8 gap-4">
              {perPageEnglishMovies?.data?.data?.map((item, i) => (
                <Theme1Card key={i} item={item} isLoading={isLoading}/>
              ))}
            </div>
          </>
        )}
      </div>

      <PaginationTheme1
        currentPage={currentP}
        perPgaeMovie={perPageEnglishMovies}
        type="english"
      />

      {/* ========> Up Comming Movies/Tv Shows <========*/}
      <UpCommingTheme1 />
    </div>
  );
};

export default EnglishMoviesTheme1;
