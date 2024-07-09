import { useFilteredResultsByPaginationQuery } from "../../../../redux/features/search/searchApi";
import MovieCard from "../../../../components/movie-card/MovieCard";
import LazyLoading from "../../../../components/lazy-loading/LazyLoading";
import FilterPagination from "../FilterPagination";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSiteConfig } from "../../../../utils/configHooks/ConfigHooks";

const FilterListDefault = () => {
  const location = useLocation();
  const { siteName } = useSiteConfig();
  const currentRoute = location.pathname;

  // Function to extract genres from route
  const getGenresFromRoute = (route) => {
    const parts = route.split("/");
    const startIndex = parts.indexOf("terms");

    if (parts?.length === 5) {
      const genres = parts?.slice(startIndex + 1, -2);
      const genresString = genres.join("-");
      return genresString;
    } else {
      const genres = parts?.slice(startIndex + 1);
      const genresString = genres.join("-");
      return genresString;
    }
  };

  // Usage example
  const filteredTerm = getGenresFromRoute(currentRoute);

  // Function to extract page number as a number from route
  const getPageNumberFromRoute = (route) => {
    const parts = route.split("/");
    const pageIndex = parts.indexOf("page");
    const pageNumber = parseInt(parts[pageIndex + 1], 10);
    return pageNumber;
  };

  // Usage example
  const currentPage = isNaN(getPageNumberFromRoute(currentRoute))
    ? 1
    : getPageNumberFromRoute(currentRoute);

  const { data: filteredResults, isLoading } =
    useFilteredResultsByPaginationQuery({ filteredTerm, currentPage });

  return (
    <section className="min-h-screen">
      {/* ==================>> SEO Content <<============ */}
      <Helmet>
        <title>
          {siteName} || Watch {filteredTerm} Movies, Tv Show Online Free on{" "}
          {siteName}
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

      <div className="ml-6 lg:ml-0 my-4">
        <h1 className="text-[28px] lg:text-[32px] font-[700] font-roboto text-white capitalize">
          Filter By: {filteredTerm}
        </h1>
      </div>

      {/* ===========>> Filter Results <<===========*/}
      {filteredResults?.status === false && (
        <h1 className="text-[28px] font-medium text-slate-600 text-center">
          Requested Data Not Found !!
        </h1>
      )}

      <div className="flex justify-center items-center w-full px-5 lg:px-0">
        {isLoading ? (
          <div className="w-full">
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-[25px] lg:gap-[10px]  animate-pulse w-full">
              {Array.from({ length: 24 }).map((item, i) => (
                <LazyLoading key={i} />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-[25px] lg:gap-[10px]">
            {filteredResults?.data?.data?.map((item) => (
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

      <FilterPagination
        currentPage={currentPage}
        perPgaeMovie={filteredResults}
        filteredTerm={filteredTerm}
      />
    </section>
  );
};

export default FilterListDefault;
