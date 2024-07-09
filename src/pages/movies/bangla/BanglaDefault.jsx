import MovieCard from "../../../components/movie-card/MovieCard";
import { usePerPageBengaliMovieListQuery } from "../../../redux/features/movies/movieApi";
import Title from "../../../utils/Title";
import LazyLoading from "../../../components/lazy-loading/LazyLoading";
import { Helmet } from "react-helmet";
import BanglaMoviePagination from "./BanglaMoviePagination";
import { useLocation } from "react-router-dom";
import { useSiteConfig } from "../../../utils/configHooks/ConfigHooks";

const BanglaDefault = () => {
  const { siteName } = useSiteConfig();
  const location = useLocation();
  const currentRoute = location.pathname;
  const currentP =
    Number(currentRoute?.slice(13)) === 0 ? 1 : Number(currentRoute?.slice(13));
  const { data: perPgaeMovie, isLoading } =
    usePerPageBengaliMovieListQuery(currentP);

  return (
    <div className="min-h-screen">
      {/* ==================>> SEO Content <<============ */}
      <Helmet>
        <title>
          {siteName} || Watch Bangla Movies, Tv Show Online Free on {siteName}
        </title>
        <meta
          name="description"
          content="The best place to watch Movies, Tv Shows and Latest Collections online for free with HD quality. No ADS! No registration is required!"
        />
        <meta
          name="keywords"
          content="free movies, online movie, movie online, free movies online, watch movies online free, free hd movies, watch movies online"
        />
      </Helmet>

      {/* ==================>> BENGALI MOVIES <<==================*/}
      <div className="w-full flex justify-start mt-[12px] mb-[20px] lg:mb-0 ml-7 lg:ml-0">
        <Title>Bengali</Title>
      </div>

      <div className="flex justify-center items-center px-5 lg:px-0 w-full">
        {perPgaeMovie?.status === false ? (
          <div className="w-full flex justify-center my-5">
            <p className="text-[35px] text-white font-medium">No Data Found</p>
          </div>
        ) : isLoading ? (
          <div className="w-full">
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-[25px] lg:gap-[10px] my-[18px] animate-pulse w-full">
              {Array.from({ length: 24 }).map((item, i) => (
                <LazyLoading key={i} />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-[25px] lg:gap-[10px] md:gap-auto my-[18px]">
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
        currentPage={currentP}
        perPgaeMovie={perPgaeMovie}
      />
    </div>
  );
};

export default BanglaDefault;
