import { useEffect, useState } from "react";
import DomainList from "../../components/domain-list/DomainList";
import MovieCard from "../../components/movie-card/MovieCard";
import Title from "../../utils/Title";
import { usePerPgaeTvShowQuery } from "../../redux/features/tv-show/tvShowApi";
import LazyLoading from "../../components/lazy-loading/LazyLoading";
import { Helmet } from "react-helmet";
import { useSiteNameUSerQuery } from "../../redux/features/settings/settingApi";
import TvPagination from "./TvPagination";

const TvShow = () => {
  const storedPage = JSON.parse(localStorage.getItem("tvCurrentPage")) || 1;

  const [currentPage, setCurrentPage] = useState(storedPage);
  const { data: perPgaeMovie, isLoading } = usePerPgaeTvShowQuery(currentPage);
  const { data: siteName } = useSiteNameUSerQuery();

  useEffect(() => {
    localStorage.setItem("tvCurrentPage", JSON.stringify(currentPage));
    return () => {
      localStorage.removeItem("tvCurrentPage");
    };
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Helmet>
        <title>{siteName?.data}</title>
        <meta
          name="description"
          content="Unlimited Tv Shows and Latest Collections"
        />
      </Helmet>

      {/* ==================>> Domains <<=================*/}
      <DomainList />

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
