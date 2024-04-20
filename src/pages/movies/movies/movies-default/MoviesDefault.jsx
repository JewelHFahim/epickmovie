import MovieCard from "../../../../components/movie-card/MovieCard";
import Title from "../../../../utils/Title";
import LazyLoading from "../../../../components/lazy-loading/LazyLoading";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import SiteNews from "../../../../components/SiteNews/SiteNews";
import { useSiteConfig } from "../../../../utils/configHooks/ConfigHooks";
import { usePerPgaeMovieQuery } from "../../../../redux/features/movies/movieApi";
import PaginationDefault from "../../../../utils/common-pagination/pagination-default/PaginationDefault";

const MoviesDefault = () => {
  const location = useLocation();
  const { siteName } = useSiteConfig();
  const currentRoute = location.pathname;
  const currentP = Number(currentRoute?.slice(13)) === 0 ? 1 : Number(currentRoute?.slice(13));

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
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-[22px] mt-10 animate-pulse w-full lg:px-5">
              {Array.from({ length: 24 }).map((item, i) => (
                <LazyLoading key={i} />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-[25px] md:gap-auto my-[18px]">
            {perPgaeMovie?.data?.data?.map((item) => (
              <MovieCard
                key={item?.id}
                item={item}
                redirect={`/movie/${item?.id}`}
              />
            ))}
          </div>
        )}
      </div>

      <PaginationDefault
        currentPage={currentP}
        perPgaeMovie={perPgaeMovie}
        type="movies"
      />
    </div>
  );
};

export default MoviesDefault;
