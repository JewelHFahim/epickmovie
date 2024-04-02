import Title from "../../utils/Title";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import SiteNews from "../../components/SiteNews/SiteNews";
import MovieCard from "../../components/movie-card/MovieCard";
import LazyLoading from "../../components/lazy-loading/LazyLoading";
import { useSiteConfig } from "../../utils/configHooks/ConfigHooks";
import { usePerPgaeTvShowQuery } from "../../redux/features/tv-show/tvShowApi";
import CommonPagination from "../../utils/common-pagination/CommonPagination";

const TvShow = () => {
  const location = useLocation();
  const { siteName } = useSiteConfig();
  const currentRoute = location?.pathname;
  const currentP = Number(currentRoute?.slice(14));
  const { data: perPgaeMovie, isLoading } = usePerPgaeTvShowQuery(currentP);

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Helmet>
        <title>{siteName} || Tv Shows</title>
        <meta
          name="description"
          content="Unlimited Tv Shows and Latest Collections"
        />
      </Helmet>

      {/* ==================>> Domains <<=================*/}
      <SiteNews />

      <div className="w-full flex justify-start mt-[22px] ml-20 lg:ml-0">
        <Title>TV Series</Title>
      </div>

      {/* ==================>> TV Shows <<==================*/}
      <div className="px-5 lg:px-0 w-full">
        {isLoading ? (
          <div className="w-full">
            <LazyLoading />
          </div>
        ) : (
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-[25px] md:gap-auto my-[18px]">
            {perPgaeMovie?.data?.data?.map((item) => (
              <MovieCard
                key={item?.id}
                item={item}
                redirect={`/series/${item?.id}`}
              ></MovieCard>
            ))}
          </div>
        )}
      </div>

      <CommonPagination currentPage={currentP} perPgaeMovie={perPgaeMovie} type="tv-show" />
    </div>
  );
};

export default TvShow;
