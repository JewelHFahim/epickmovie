import { useState } from "react";
import DomainList from "../../../components/domain-list/DomainList";
import MovieCard from "../../../components/movie-card/MovieCard";
import Pagination from "../../../components/pagination/Pagination";
import { useMovieListQuery, usePerPgaeMovieQuery } from "../../../redux/features/movies/movieApi";
import Title from "../../../utils/Title";

const Movies = () => {

  const {data: movies} = useMovieListQuery();
  console.log(movies);

  const [currentPage, setCurrentPage] = useState(1);
  const { data: perPgaeMovie } = usePerPgaeMovieQuery(currentPage);
  console.log(perPgaeMovie);
  

  const abc = movies?.data?.data?.map((item) => console.log(item?.id))

  return (
    <div className="flex flex-col justify-center items-center">
      {/* ==================>> Domains <<=================*/}
      <DomainList />

      <div className="w-full flex justify-start mt-[22px] ml-12">
        <Title>Movies</Title>
      </div>

      {/* ==================>> Movies <<==================*/}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-[17px] lg:gap-[25px] my-[18px]">
        {movies?.data?.data?.map((item) => (
          <MovieCard key={item?.id} item={item} redirect={`/movie/${item?.id}`}></MovieCard>
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

export default Movies;
