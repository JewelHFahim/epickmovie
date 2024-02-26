import { useEffect, useState } from "react";
import MovieCard from "../../../components/movie-card/MovieCard";
import { usePerPageBengaliMovieListQuery } from "../../../redux/features/movies/movieApi";
import Title from "../../../utils/Title";
import LazyLoading from "../../../components/lazy-loading/LazyLoading";
import { Helmet } from "react-helmet";
import BanglaMoviePagination from "./BanglaMoviePagination";
import { useLocation } from "react-router-dom";
import { useSiteName } from "../../../utils/configHooks/ConfigHooks";

const BanglaMovie = () => {
  const storedPage = JSON.parse(localStorage.getItem("banglaPagination")) || 1;
  const [currentPage, setCurrentPage] = useState(storedPage || 1);

  const { data: perPgaeMovie, isLoading } =
    usePerPageBengaliMovieListQuery(currentPage);

  const siteName = useSiteName();

  const location = useLocation();
  const currentRoute = location.pathname;

  useEffect(() => {
    localStorage.setItem("banglaPagination", JSON.stringify(currentPage));
    return () => {
      if (currentRoute === "/bangla") {
        localStorage.removeItem("tvCurrentPage");
        localStorage.removeItem("MovieCurrentPage");
        localStorage.removeItem("filterPagination");
      }
    };
  }, [currentPage, currentRoute]);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{siteName}</title>
        <meta
          name="description"
          content="Unlimited Bangla Movies and Latest Collections"
        />
      </Helmet>

      {/* ==================>> BENGALI MOVIES <<==================*/}
      <div className="px-10 lg:px-0 py-5">
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
              <MovieCard
                key={item?.id}
                item={item}
                redirect={
                  item?.post_type === "movies"
                    ? `/movie/${item?.id}`
                    : `/series/${item?.id}`
                }
              ></MovieCard>
            ))}
          </div>
        )}
      </div>

      <BanglaMoviePagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        perPgaeMovie={perPgaeMovie}
      />
    </div>
  );
};

export default BanglaMovie;
