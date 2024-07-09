import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import {
  useCleanedTitleForSearch,
  useSiteConfig,
} from "../../../utils/configHooks/ConfigHooks";
import { useSerachResultsQuery } from "../../../redux/features/search/searchApi";
import PaginationTheme1 from "../../../utils/common-pagination/pagination-theme1/PaginationTheme1";
import CardTheme3 from "../../../components/theme3-contents/card-theme3/CardTheme3";

const SearchListTheme3 = () => {
  const location = useLocation();
  const { siteName } = useSiteConfig();
  const currentRoute = location.pathname;

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
  const searchTermUncleaned = getGenresFromRoute(currentRoute);
  const { searchTerm } = useCleanedTitleForSearch(searchTermUncleaned);

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
  const { data: searchResults, isLoading } = useSerachResultsQuery({
    searchTerm,
    currentPage,
  });

  return (
    <section className="mt-4 lg:mr-4 px-4 lg:px-0 border-b lg:border-0 pb-10 lg:w-[850px]">
      <Helmet>
        {/* <title> {siteName} || {searchTerm} </title> */}
        <title>
          {siteName || "Fallback Site Name"} ||{" "}
          {searchTerm || "Fallback Search Term"}
        </title>
        <meta
          name="description"
          content="Unlimited Movies and Web-Series Latest Collections"
        />
      </Helmet>

      {/* ===========>> Searched Results <<===========*/}
      <div className="px-4 h-[70px] lg:h-[53px] flex items-center justify-between bg-[#D9D9D914]">
        <p className="text-white text-[35px] lg:text-xl border-l-4 border-red-600 pl-1">
          Filtered By: <span className="capitalize">{searchTerm}</span>
        </p>
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

        <div className="mt-4 grid grid-cols-3 lg:grid-cols-5 gap-2">
          {isLoading
            ? Array.from({ length: 25 }).map((item, i) => (
                <div
                  key={i}
                  className="lg:w-[160px] h-[550px] lg:h-[280px] flex flex-col justify-between"
                >
                  <div className="w-full h-[85%] bg-slate-700 animate-pulse"></div>

                  <div className="w-full h-[12%] bg-slate-700 animate-pulse"></div>
                </div>
              ))
            : searchResults?.data?.data?.map((item, i) => (
                <CardTheme3 key={i} item={item} />
              ))}
        </div>
      </>

      {searchResults?.status && (
        <PaginationTheme1
          currentPage={currentPage}
          perPgaeMovie={searchResults}
          type="search-list"
          filteredTerm={searchTerm}
          btnColor="bg-[#009987]"
        />
      )}
    </section>
  );
};

export default SearchListTheme3;
