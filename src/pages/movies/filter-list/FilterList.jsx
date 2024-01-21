import { useSelector } from "react-redux";
import { useFilteredResultsByPaginationQuery } from "../../../redux/features/search/searchApi";
import MovieCard from "../../../components/movie-card/MovieCard";
import Pagination from "../../../components/pagination/Pagination";
import { useState } from "react";
import LazyLoading from "../../../components/lazy-loading/LazyLoading";

const FilterList = () => {
  const { filteredTerm } = useSelector((state) => state.search);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: filteredResults, isLoading } =
    useFilteredResultsByPaginationQuery({ filteredTerm, currentPage });

  return (
    <section className="min-h-screen ">
      <div className="mt-2 mb-[32px]">
        <h1 className="text-[12px] lg:text-[32px] font-[700] font-roboto text-white">
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
            <MovieCard key={item?.id} item={item} redirect={ item?.post_type === "movies" ? `/movie/${item?.id}` : `/series/${item?.id}` }></MovieCard>
          ))}
        </div>
      )}
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        perPgaeMovie={filteredResults}
      />
    </section>
  );
};

export default FilterList;
