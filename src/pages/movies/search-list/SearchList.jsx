import { useSerachResultsQuery } from "../../../redux/features/search/searchApi";
import MovieCard from "../../../components/movie-card/MovieCard";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  useCleanedTitleForSearch,
  useSiteConfig,
} from "../../../utils/configHooks/ConfigHooks";
import LazyLoading from "../../../components/lazy-loading/LazyLoading";

const SearchList = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const searchTerm = currentRoute?.slice(13);
  const { url } = useCleanedTitleForSearch(searchTerm);

  const { data: searchResults, isLoading } = useSerachResultsQuery(url);
  const { siteName } = useSiteConfig();

  useEffect(() => {
    if (currentRoute === "/search-list") {
      localStorage.removeItem("tvCurrentPage");
      localStorage.removeItem("banglaPagination");
      localStorage.removeItem("filterPagination");
      localStorage.removeItem("MovieCurrentPage");
    }
  }, [currentRoute]);

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
          Search Results for: {url}
        </h1>
      </div>

      {/* ===========>> Searched Results <<===========*/}
      <>
        {(searchResults?.data?.length <= 0 || searchResults === undefined) && (
          <h1 className="text-[28px] font-medium text-slate-600 text-center">
            Requested Data Not Found !!
          </h1>
        )}

        <div className="px-5 lg:px-0 w-full">
          {isLoading ? (
            <div className="w-full">
              <LazyLoading />
            </div>
          ) : (
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-[25px] my-[18px]">
              {searchResults?.data?.map((item) => (
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

      {/* Note: Search Pagination "NOT AVAILABLE" from API*/}
    </section>
  );
};

export default SearchList;
