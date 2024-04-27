import { useSerachResultsQuery } from "../../../redux/features/search/searchApi";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  useCleanedTitleForSearch,
  useSiteConfig,
} from "../../../utils/configHooks/ConfigHooks";
import LazyLoading from "../../../components/lazy-loading/LazyLoading";
import Theme1Card from "../../../components/movie-card/theme1-card/Theme1Card";
import PaginationTheme1 from "../../../utils/common-pagination/pagination-theme1/PaginationTheme1";

const SearchListTheme1 = () => {
  const location = useLocation();
  const { siteName } = useSiteConfig();
  const currentRoute = location.pathname;
  const searchTerm = currentRoute?.slice(13);
  const { url } = useCleanedTitleForSearch(searchTerm);
  const { data: searchResults, isLoading } = useSerachResultsQuery(url);
  const currentP = Number(currentRoute?.slice(13)) === 0 ? 1 : Number(currentRoute?.slice(13));

  console.log(searchResults)



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

      <div className="mt-2 mb-[20px]">
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

      <div className="flex justify-center items-center w-full px-5 lg:px-0">
        {isLoading ? (
          <div className="w-full">
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-[22px] mt-10 animate-pulse w-full lg:px-5">
              {Array.from({ length: 24 }).map((item, i) => (
                <LazyLoading key={i} />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-3 lg:grid-cols-8 gap-[25px] my-3">
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

      {/* <PaginationTheme1
        currentPage={currentP}
        perPgaeMovie={searchResults}
        type="movies"
      /> */}

    </section>
  );
};

export default SearchListTheme1;
