import { useState } from "react";
import DomainList from "../../components/domain-list/DomainList";
import MovieCard from "../../components/movie-card/MovieCard";
import Pagination from "../../components/pagination/Pagination";
import Title from "../../utils/Title";
import { usePerPgaeTvShowQuery } from "../../redux/features/tv-show/tvShowApi";

const TvShow = () => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const { data: perPgaeMovie } = usePerPgaeTvShowQuery(currentPage);
  console.log(perPgaeMovie);

  return (
    <div className="flex flex-col justify-center items-center">
      {/* ==================>> Domains <<=================*/}
      <DomainList />

      <div className="w-full flex justify-start mt-[22px] ml-12">
        <Title>TV Series</Title>
      </div>

      {/* ==================>> Movies <<==================*/}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-[17px] lg:gap-[25px] my-[18px]">
        {perPgaeMovie?.data?.data?.map((item) => (
          <MovieCard key={item?.id}  item={item}></MovieCard>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        perPgaeMovie={perPgaeMovie}
      />
    </div>
  );
};

export default TvShow;
