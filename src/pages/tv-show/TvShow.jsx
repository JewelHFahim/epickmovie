import { useEffect, useState } from "react";
import MovieCard from "../../components/movie-card/MovieCard";
import Title from "../../utils/Title";
import LazyLoading from "../../components/lazy-loading/LazyLoading";
import { Helmet } from "react-helmet";
import TvPagination from "./TvPagination";
import { useLocation } from "react-router-dom";
import SiteNews from "../../components/SiteNews/SiteNews";
import { useSiteName } from "../../utils/configHooks/ConfigHooks";
import { useTvShowList } from "../../utils/hooks/api-hooks/ApiHooks";


const TvShow = () => {
  const storedPage = JSON.parse(localStorage.getItem("tvCurrentPage")) || 1;

  const [currentPage, setCurrentPage] = useState(storedPage);
  const { tvShowList:perPgaeMovie, isLoading } = useTvShowList(currentPage);

  const siteName = useSiteName();

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
