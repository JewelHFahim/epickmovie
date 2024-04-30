import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { useCleanedTitleForSearch, useSiteConfig } from "../../../utils/configHooks/ConfigHooks";
import Theme1Card from "../../../components/movie-card/theme1-card/Theme1Card";
import { useSerachResultsQuery } from "../../../redux/features/search/searchApi";
import PaginationTheme1 from "../../../utils/common-pagination/pagination-theme1/PaginationTheme1";
import LazyLoadingTheme1 from "../../../components/lazy-loading/LazyLoadingTheme1";

const SearchListTheme1 = () => {
  const location = useLocation();
  const { siteName } = useSiteConfig();
  const currentRoute = location.pathname;

  // Function to extract genres from route
  const getGenresFromRoute = (route ) => {
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
  const searchTermUncleaned = getGenresFromRoute(currentRoute);
  const {searchTerm} = useCleanedTitleForSearch(searchTermUncleaned);


  // Function to extract page number as a number from route
  const getPageNumberFromRoute = (route) => {
    const parts = route.split("/");
    const pageIndex = parts.indexOf("page");
    const pageNumber = parseInt(parts[pageIndex + 1], 10);
    return pageNumber;
  };

  // Usage example
  const currentPage = isNaN(getPageNumberFromRoute(currentRoute)) ? 1 : getPageNumberFromRoute(currentRoute);
  const { data: searchResults, isLoading } = useSerachResultsQuery({ searchTerm, currentPage });

  console.log(searchTerm)

  return (
    <section className="min-h-screen px-[50px] py-[20px] lg:px-0 lg:py-5">

      <Helmet>
        {/* <title> {siteName} || {searchTerm} </title> */}
        <title>{siteName || 'Fallback Site Name'} || {searchTerm || 'Fallback Search Term'}</title>
        <meta  name="description" content="Unlimited Movies and Web-Series Latest Collections"/>
      </Helmet>



    {/* ===========>> Searched Results <<===========*/}
      <div className=" ml-10 lg:ml-0 mb-4">
        <h1 className="text-[28px] font-[700] font-roboto text-white capitalize">
        Search Results for: {searchTerm}
        </h1>
      </div>

  
      {searchResults?.status === false && (
        <h1 className="text-[28px] font-medium text-slate-600 text-center">
          Requested Data Not Found !!
        </h1>
      )}

      {/* ===========>> Searched Results <<===========*/}
      <>
        {(searchResults?.data?.length <= 0 || searchResults === undefined) && (
          <h1 className="text-[28px] font-medium text-slate-600 text-center">
            Requested Data Not Found !!
          </h1>
        )}

        <div className="flex justify-center items-center w-full px-5 lg:px-0">
          {isLoading ? (
            <div className="w-full">
            <LazyLoadingTheme1 lazyLength={24} />
          </div>
          ) : (
            <div className="grid grid-cols-3 lg:grid-cols-8 gap-2 my-3">
              {searchResults?.data?.data?.map((item) => (
                <Theme1Card
                  key={item?.id}
                  item={item}
                  isLoading={isLoading}
                  redirect={
                    item?.post_type === "movies"
                      ? `/movie/${item?.id}`
                      : `/series/${item?.id}`
                  }
                />
              ))}
            </div>
          )}
        </div>
      </>

      <PaginationTheme1
        currentPage={currentPage}
        perPgaeMovie={searchResults}
        type="search-list"
        filteredTerm={searchTerm}
      />
    </section>
  );
};

export default SearchListTheme1;
