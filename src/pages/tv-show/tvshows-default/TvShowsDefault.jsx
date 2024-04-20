import Title from "../../../utils/Title";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import SiteNews from "../../../components/SiteNews/SiteNews";
import MovieCard from "../../../components/movie-card/MovieCard";
import LazyLoading from "../../../components/lazy-loading/LazyLoading";
import { useSiteConfig } from "../../../utils/configHooks/ConfigHooks";
import { usePerPgaeTvShowQuery } from "../../../redux/features/tv-show/tvShowApi";
import PaginationDefault from "../../../utils/common-pagination/pagination-default/PaginationDefault";

const TvShowsDefault = () => {
  const location = useLocation();
  const { siteName } = useSiteConfig();
  const currentRoute = location?.pathname;
  const currentP = Number(currentRoute?.slice(14)) === 0 ? 1 : Number(currentRoute?.slice(14));

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
                redirect={`/series/${item?.id}`}
              ></MovieCard>
            ))}
          </div>
        )}
      </div>

      <PaginationDefault currentPage={currentP} perPgaeMovie={perPgaeMovie} type="tv-show"/>
    </div>
  );
};

export default TvShowsDefault;
