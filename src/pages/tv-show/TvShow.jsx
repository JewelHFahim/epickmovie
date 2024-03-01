import { useEffect, useState } from "react";
import Title from "../../utils/Title";
import { Helmet } from "react-helmet";
import TvPagination from "./TvPagination";
import { useLocation } from "react-router-dom";
import SiteNews from "../../components/SiteNews/SiteNews";
import MovieCard from "../../components/movie-card/MovieCard";
import LazyLoading from "../../components/lazy-loading/LazyLoading";
import { useSiteConfig } from "../../utils/configHooks/ConfigHooks";
import { usePerPgaeTvShowQuery } from "../../redux/features/tv-show/tvShowApi";


const TvShow = () => {
  const storedPage = JSON.parse(localStorage.getItem("tvCurrentPage")) || 1;

  const [currentPage, setCurrentPage] = useState(storedPage);
  const { data: perPgaeMovie, isLoading} = usePerPgaeTvShowQuery(currentPage);
  const {siteName} = useSiteConfig();

  const location = useLocation();
  const currentRoute = location.pathname;

  useEffect(() => {
    localStorage.setItem("tvCurrentPage", JSON.stringify(currentPage));
    return () => {
      if (currentRoute === "/tv-show") {
        localStorage.removeItem("MovieCurrentPage");
        localStorage.removeItem("banglaPagination");
        localStorage.removeItem("filterPagination");
      }
    };
  }, [currentPage, currentRoute]);

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Helmet>
        <title>{siteName} || Tv Shows</title>
        <meta
          name="description"
          content="Unlimited Tv Shows and Latest Collections"
        />
      </Helmet>

      {/* ==================>> Domains <<=================*/}
      <SiteNews/>

      <div className="w-full flex justify-start mt-[22px] ml-20 lg:ml-0">
        <Title>TV Series</Title>
      </div>

      {/* ==================>> TV Shows <<==================*/}
      {isLoading ? (
        <LazyLoading />
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-[25px] md:gap-auto my-[18px]">
          {perPgaeMovie?.data?.data?.map((item) => (
            <MovieCard
              key={item?.id}
              item={item}
              redirect={`/series/${item?.id}`}
            ></MovieCard>
          ))}
        </div>
      )}

      <TvPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        perPgaeMovie={perPgaeMovie}
      />
    </div>
  );
};

export default TvShow;
