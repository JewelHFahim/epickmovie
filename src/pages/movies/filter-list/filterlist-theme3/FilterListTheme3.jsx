import { useLocation } from "react-router-dom";
import CardTheme3 from "../../../../components/theme3-contents/card-theme3/CardTheme3";
import { useSiteConfig } from "../../../../utils/configHooks/ConfigHooks";
import { useFilteredResultsTheme3Query } from "../../../../redux/features/search/searchApi";
import { Helmet } from "react-helmet";
import PaginationTheme1 from "../../../../utils/common-pagination/pagination-theme1/PaginationTheme1";
import { useEffect } from "react";

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

  const { data: filteredResults, isLoading } = useFilteredResultsTheme3Query({
    filteredTerm,
    quantity: 42,
    currentPage,
  });

  // page scroll effect
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="mt-4 lg:mr-4 px-4 lg:px-0 border-b lg:border-0 pb-10 lg:w-[850px]">

      <Helmet>
        <title>
          {siteName} || {filteredTerm}
        </title>
        <meta
          name="description"
          content="Unlimited Bangla Movies and Latest Collections"
        />
      </Helmet>

      <div className="px-4 h-[70px] lg:h-[53px] flex items-center justify-between bg-[#D9D9D914]">
        <p className="text-white text-[35px] lg:text-xl border-l-4 border-red-600 pl-1">
          Filtered List: {filteredTerm}
        </p>
      </div>

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
          : filteredResults?.data?.data?.map((item, i) => (
              <CardTheme3 key={i} item={item} />
            ))}
      </div>

      <div className="">
        <PaginationTheme1
          currentPage={currentPage}
          perPgaeMovie={filteredResults}
          filteredTerm={filteredTerm}
          btnColor="bg-[#009987]"
        />
      </div>
    </div>
  );
};

export default FilterListTheme3;
