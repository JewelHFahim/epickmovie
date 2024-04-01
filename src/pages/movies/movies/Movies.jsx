import MovieCard from "../../../components/movie-card/MovieCard";
import Title from "../../../utils/Title";
import LazyLoading from "../../../components/lazy-loading/LazyLoading";
import { Helmet } from "react-helmet";
import MoviePagination from "./MoviePagination";
import { useLocation } from "react-router-dom";
import SiteNews from "../../../components/SiteNews/SiteNews";
import { useSiteConfig } from "../../../utils/configHooks/ConfigHooks";
import { usePerPgaeMovieQuery } from "../../../redux/features/movies/movieApi";

const Movies = () => {
  const location = useLocation();
  const { siteName } = useSiteConfig();
  const currentRoute = location.pathname;
  
  const currentP = Number(currentRoute?.slice(13));
  const { data: perPgaeMovie, isLoading } = usePerPgaeMovieQuery(currentP);

  // const adBlockDetected = useDetectAdBlock();
  // useEffect(() => {
  //   if (adBlockDetected) {
  //     window.alert("Ads Blocker Need to Deactivate");
  //   }
  // }, [adBlockDetected]);

  return (
    <div className="flex flex-col justify-center items-center">
      <Helmet>
        <title>{siteName} || Movies</title>
        <meta
          name="description"
          content="Unlimited Movies and Latest Collections"
        />
      </Helmet>

      {/* ==================>> Domains <<=================*/}
      <SiteNews />

      {/* ==================>> Movies <<==================*/}

      <div className="w-full flex justify-start mt-[22px] mb-[20px] lg:mb-0 ml-20 lg:ml-0">
        <Title>Movies</Title>
      </div>

      <div className="px-5 lg:px-0 w-full">
        {isLoading ? (
          <div className="w-full">
            <LazyLoading />
          </div>
        ) : (
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-[25px] md:gap-auto my-[18px]">
            {perPgaeMovie?.data?.data?.map((item) => (
              <MovieCard key={item?.id} item={item} redirect={`/movie/${item?.id}`}/>
            ))}
          </div>
        )}
      </div>
      <MoviePagination
        currentPage={currentP}
        perPgaeMovie={perPgaeMovie}
      />
    </div>
  );
};

export default Movies;
