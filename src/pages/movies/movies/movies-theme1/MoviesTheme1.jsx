import SiteNews from "../../../../components/SiteNews/SiteNews";
import LazyLoadingTheme1 from "../../../../components/lazy-loading/LazyLoadingTheme1";
import Theme1Card from "../../../../components/movie-card/theme1-card/Theme1Card";
import { usePerPgaeMovieQuery } from "../../../../redux/features/movies/movieApi";
import { useLocation } from "react-router-dom";
import PaginationTheme1 from "../../../../utils/common-pagination/pagination-theme1/PaginationTheme1";
import UpCommingTheme1 from "../../../../components/theme1-contents/UpCommingTheme1";
import SectionTitle from "../../../../utils/theme1-contents/section-title/SectionTitle";
import { useEffect } from "react";

const MoviesTheme1 = () => {
  const location = useLocation();
  const currentRoute = location?.pathname;
  const currentP = Number(currentRoute?.slice(13)) === 0 ? 1 : Number(currentRoute?.slice(13));
  const { data: perPgaeMovie, isLoading: movieLoading } = usePerPgaeMovieQuery(currentP);

    // page scroll effect
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  
 
  return (
    <div className="px-5 lg:px-0">
      <SiteNews />

      <div className="mt-5">
        <SectionTitle> All Movies </SectionTitle>

        {movieLoading ? (
          <div className="w-full">
            <LazyLoadingTheme1 lazyLength={24} />
          </div>
        ) : (
          <div className="mt-5 grid grid-cols-3 lg:grid-cols-8 gap-4">
            {perPgaeMovie?.data?.data?.map((item, i) => (
              <Theme1Card key={i} item={item} isLoading={movieLoading}/>
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
