import { useState } from "react";
import MovieCard from "../../../components/movie-card/MovieCard";
import Pagination from "../../../components/pagination/Pagination";
import { usePerPageBengaliMovieListQuery } from "../../../redux/features/movies/movieApi";
import Title from "../../../utils/Title";
import LazyLoading from "../../../components/lazy-loading/LazyLoading";
import { Helmet } from "react-helmet";
import { useSiteNameUSerQuery } from "../../../redux/features/settings/settingApi";

const BanglaMovie = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: perPgaeMovie, isLoading } =
    usePerPageBengaliMovieListQuery(currentPage);
    const { data: siteName } = useSiteNameUSerQuery();


  return (
    <div className="min-h-screen">

        <Helmet>
          <title>{siteName?.data}</title>
          <meta name="description" content="Unlimited Bangla Movies and Latest Collections" />
        </Helmet>

      {/* ==================>> MOVIES <<==================*/}
      <div className="px-10 py-5">
        <Title>Bengali</Title>
      </div>

      <div className="flex justify-center items-center">
      {perPgaeMovie?.status === false ? (
        <div className="w-full flex justify-center my-5">
          <p className="text-[35px] text-white font-medium">No Data Found</p>
        </div>
      ) : isLoading ? (
        <LazyLoading />
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-[25px] md:gap-auto my-[18px]">
          {perPgaeMovie?.data?.data?.map((item) => (
            <MovieCard key={item?.id} item={item} redirect={ item?.post_type === "movies" ? `/movie/${item?.id}` : `/series/${item?.id}`}></MovieCard>
          ))}
        </div>
      )}
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        perPgaeMovie={perPgaeMovie}
      ></Pagination>
    </div>
  );
};

export default BanglaMovie;
