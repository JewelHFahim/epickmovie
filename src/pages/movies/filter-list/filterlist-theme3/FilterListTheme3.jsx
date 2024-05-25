import { useLocation } from "react-router-dom";
import CardTheme3 from "../../../../components/theme3-contents/card-theme3/CardTheme3";
import { useSiteConfig } from "../../../../utils/configHooks/ConfigHooks";
import {
  useFilteredResultsByPaginationQuery,
  //   useFilteredResultsTheme2Query,
} from "../../../../redux/features/search/searchApi";
import { Helmet } from "react-helmet";

const FilterListTheme3 = () => {
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

  //   const { data: largeDevFilteredResults, largeDevLoading } =
  //     useFilteredResultsTheme2Query({ filteredTerm, currentPage });
  const { data: filteredResults, isLoading } =
    useFilteredResultsByPaginationQuery({ filteredTerm, currentPage });

  return (
    <div className="mt-6 min-h-screen">
      <Helmet>
        <title>
          {siteName} || {filteredTerm}
        </title>
        <meta
          name="description"
          content="Unlimited Bangla Movies and Latest Collections"
        />
      </Helmet>

      <div className="px-4 h-[53px] flex items-center justify-between bg-[#D9D9D914]">
        <p className="text-white text-xl border-l-4 border-red-600 pl-1">
          Filtered List: {filteredTerm}
        </p>
      </div>

      <CardTheme3 datas={filteredResults} isLoading={isLoading} />
    </div>
  );
};

export default FilterListTheme3;
