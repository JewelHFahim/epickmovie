import { useSerachResultsQuery } from "../../../redux/features/search/searchApi";
import MovieCard from "../../../components/movie-card/MovieCard";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSiteConfig } from "../../../utils/configHooks/ConfigHooks";
import LazyLoading from "../../../components/lazy-loading/LazyLoading";
import FilterPagination from "../filter-list/FilterPagination";

const SearchListDefault = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const { siteName } = useSiteConfig();

  //

  // Function to extract genres from route
  const getGenresFromRoute = (route) => {
    const parts = route.split("/");
    const startIndex = parts.indexOf("search-list");

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
  const searchTerm = getGenresFromRoute(currentRoute);
  console.log(searchTerm);

  // Function to extract page number as a number from route
  const getPageNumberFromRoute = (route) => {
    const parts = route.split("/");
    console.log(parts);
    const pageIndex = parts.indexOf("page");
    const pageNumber = parseInt(parts[pageIndex + 1], 10);
    return pageNumber;
  };

  // Usage example
  const currentPage = isNaN(getPageNumberFromRoute(currentRoute))
    ? 1
    : getPageNumberFromRoute(currentRoute);
  const { data: searchResults, isLoading } = useSerachResultsQuery({
    searchTerm,
    currentPage,
  });

  return (
    <section className="min-h-screen px-[50px] py-[20px] lg:px-0 lg:py-5">
      <Helmet>
        <title>
          {siteName} || {searchTerm}
        </title>
        <meta
          name="description"
          content="Unlimited Bangla Movies and Latest Collections"
        />
      </Helmet>

      <div className="mt-2 mb-[32px]">
        <h1 className="text-[28px] lg:text-[32px] font-[700] font-roboto text-white capitalize">
          Search Results for: {searchTerm}
        </h1>
      </div>

      {/* ===========>> Searched Results <<===========*/}
      <>
        {(searchResults?.data?.data?.length <= 0 ||
          searchResults === undefined) && (
          <h1 className="text-[28px] font-medium text-slate-600 text-center">
            Requested Data Not Found !!
          </h1>
        )}

        <div className="px-5 lg:px-0 w-full">
          {isLoading ? (
            <div className="w-full">
              <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-[22px] lg:gap-[10px] mt-10 animate-pulse w-full lg:px-5">
                {Array.from({ length: 18 }).map((item, i) => (
                  <LazyLoading key={i} />
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-[25px] lg:gap-[10px] my-[18px]">
              {searchResults?.data?.data?.map((item) => (
                <MovieCard
                  key={item?.id}
                  item={item}
                  redirect={
                    item?.post_type === "tvshows"
                      ? `/series/${item?.id}`
                      : `/movie/${item?.id}`
                  }
                ></MovieCard>
              ))}
            </div>
          )}
        </div>
      </>


      <FilterPagination
        currentPage={currentPage}
        perPgaeMovie={searchResults}
        type="search-list"
        filteredTerm={searchTerm}
      />
    </section>
  );
};

export default SearchListDefault;
