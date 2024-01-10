import { useState } from "react";
import DomainList from "../../components/domain-list/DomainList";
import MovieCard from "../../components/movie-card/MovieCard";
import Pagination from "../../components/pagination/Pagination";
import Title from "../../utils/Title";
import { usePerPgaeTvShowQuery } from "../../redux/features/tv-show/tvShowApi";
import LazyLoading from "../../components/lazy-loading/LazyLoading";

const TvShow = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: perPgaeMovie, isLoading } = usePerPgaeTvShowQuery(currentPage);
  console.log(perPgaeMovie);

  return (
    <div className="min-h-screen flex flex-col items-center">

      {/* ==================>> Domains <<=================*/}
      <DomainList />

      <div className="w-full flex justify-start mt-[22px] ml-12"> <Title>TV Series</Title> </div>

      {/* ==================>> TV Shows <<==================*/}
      {isLoading ? (
        <LazyLoading />
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-[17px] lg:gap-[25px] my-[18px]">
          {perPgaeMovie?.data?.data?.map((item) => (
            <MovieCard key={item?.id} item={item} redirect={`/series/${item?.id}`}></MovieCard>
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        perPgaeMovie={perPgaeMovie}
      />
    </div>
  );
};

export default TvShow;
