import { useState } from "react";
import DomainList from "../../../components/domain-list/DomainList";
import MovieCard from "../../../components/movie-card/MovieCard";
import Pagination from "../../../components/pagination/Pagination";
import { usePerPgaeMovieQuery } from "../../../redux/features/movies/movieApi";
import Title from "../../../utils/Title";
import LazyLoading from "../../../components/lazy-loading/LazyLoading";
import { Helmet } from "react-helmet";
import { useSiteNameUSerQuery } from "../../../redux/features/settings/settingApi";


const Movies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: perPgaeMovie, isLoading } = usePerPgaeMovieQuery(currentPage);
  const { data: siteName } = useSiteNameUSerQuery();

  return (
    <div className="flex flex-col justify-center items-center">

        <Helmet>
          <title>{siteName?.data}</title>
          <meta name="description" content="Unlimited Movies and Latest Collections" />
        </Helmet>
      
      {/* ==================>> Domains <<=================*/}
      <DomainList />

      <div className="w-full flex justify-start mt-[22px] ml-12"> <Title>Movies</Title> </div>

      {/* ==================>> Movies <<==================*/}
      {isLoading ? (
        <LazyLoading />
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-[25px] md:gap-auto my-[18px]">
          {perPgaeMovie?.data?.data?.map((item) => (
            <MovieCard key={item?.id} item={item} redirect={`/movie/${item?.id}`} ></MovieCard>
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

export default Movies;
