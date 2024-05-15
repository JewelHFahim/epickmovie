import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import {
  useCleanedTitleForSearch,
  useSiteConfig,
} from "../../../utils/configHooks/ConfigHooks";
import { useSerachResultsQuery } from "../../../redux/features/search/searchApi";
import PaginationTheme1 from "../../../utils/common-pagination/pagination-theme1/PaginationTheme1";
import SectionTitleTheme2 from "../../../components/theme2-contents/SectionTitleTheme2";
import Theme2Card from "../../../components/movie-card/move-card-theme2/Theme2Card";

const SearchListTheme2 = () => {
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
    <section className="min-h-screen bg-[#A8A8A812]  px-8 py-4 lg:px-3 lg:py-3 mt-8 lg:mt-14">
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
      <SectionTitleTheme2
        url=""
        className="bg-[#009987]"
        textColor="text-[#009987]"
      >
        Filtered By: <span className="capitalize">{searchTerm}</span>
      </SectionTitleTheme2>

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

        <Theme2Card
          isLoading={isLoading}
          dataList={searchResults}
          className="text-[#009987]"
        />
      </>

      <PaginationTheme1
        currentPage={currentPage}
        perPgaeMovie={searchResults}
        type="search-list"
        filteredTerm={searchTerm}
        btnColor="bg-[#009987]"
      />
    </section>
  );
};

export default SearchListTheme2;
