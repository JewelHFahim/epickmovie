import { useSelector } from "react-redux";
import { useFilteredResultsByPaginationQuery } from "../../../redux/features/search/searchApi";
import MovieCard from "../../../components/movie-card/MovieCard";
import { useEffect, useState } from "react";
import LazyLoading from "../../../components/lazy-loading/LazyLoading";
import FilterPagination from "./FilterPagination";

const FilterList = () => {
  
  const { filteredTerm } = useSelector((state) => state.search);
  const storedPage = JSON.parse(localStorage.getItem("filterPagination")) || 1;
  const [currentPage, setCurrentPage] = useState(storedPage || 1);

  const { data: filteredResults, isLoading } =
    useFilteredResultsByPaginationQuery({ filteredTerm, currentPage });

  useEffect(() => {

    localStorage.setItem("filterPagination", JSON.stringify(currentPage));
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      localStorage.removeItem("filterPagination");
    };
  }, [currentPage]);


  return (
    <section className="min-h-screen">
      <div className=" ml-10 lg:ml-0 my-5">
        <h1 className="text-[28px] lg:text-[32px] font-[700] font-roboto text-white">
          Filter By: {filteredTerm}
        </h1>
      </div>

      {/* ===========>> Filter Results <<===========*/}
      <div className="flex justify-center items-center">
        {isLoading ? (
          <LazyLoading />
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-[30px] my-[18px]">
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
        setCurrentPage={setCurrentPage}
        perPgaeMovie={filteredResults}
      />

    </section>
  );
};

export default FilterList;
