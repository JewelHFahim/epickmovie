import {
  useFilteredResultsByPaginationQuery,
  useFilteredResultsTheme2Query,
} from "../../../../redux/features/search/searchApi";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSiteConfig } from "../../../../utils/configHooks/ConfigHooks";
import PaginationTheme1 from "../../../../utils/common-pagination/pagination-theme1/PaginationTheme1";
import SectionTitleTheme2 from "../../../../components/theme2-contents/SectionTitleTheme2";
import Theme2Card from "../../../../components/movie-card/move-card-theme2/Theme2Card";

const FilterListTheme2 = () => {
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

  const { data: largeDevFilteredResults, largeDevLoading } =
    useFilteredResultsTheme2Query({ filteredTerm, currentPage });
  const { data: filteredResults, isLoading } =
    useFilteredResultsByPaginationQuery({ filteredTerm, currentPage });

  return (
    <section className="min-h-screen bg-[#A8A8A812] px-8 py-4 lg:px-3 lg:py-3 mt-8 lg:mt-14">
      <Helmet>
        <title>
          {siteName} || {filteredTerm}
        </title>
        <meta
          name="description"
          content="Unlimited Bangla Movies and Latest Collections"
        />
      </Helmet>

      <SectionTitleTheme2
        url=""
        className="bg-[#009987]"
        textColor="text-[#009987]"
      >
        Filtered By: <span className="capitalize">{filteredTerm}</span>
      </SectionTitleTheme2>

      {/* ===========>> Filter Results <<===========*/}
      {filteredResults?.status === false && (
        <h1 className="text-[28px] font-medium text-slate-600 text-center">
          Requested Data Not Found !!
        </h1>
      )}

      <div className="hidden lg:block">
        <Theme2Card
          isLoading={largeDevLoading}
          dataList={largeDevFilteredResults}
          className="text-[#009987]"
        />
      </div>

      <div className="lg:hidden">
        <Theme2Card
          isLoading={isLoading}
          dataList={filteredResults}
          className="text-[#009987]"
        />
      </div>

      <div className="hidden lg:block">
        <PaginationTheme1
          currentPage={currentPage}
          perPgaeMovie={largeDevFilteredResults}
          filteredTerm={filteredTerm}
          btnColor="bg-[#009987]"
        />
      </div>

      <div className="lg:hidden">
        <PaginationTheme1
          currentPage={currentPage}
          perPgaeMovie={filteredResults}
          filteredTerm={filteredTerm}
          btnColor="bg-[#009987]"
        />
      </div>
    </section>
  );
};

export default FilterListTheme2;
