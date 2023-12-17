import { useSelector } from "react-redux";
import { useFilteredResultsByPaginationQuery } from "../../../redux/features/search/searchApi";
import MovieCard from "../../../components/movie-card/MovieCard";
import Pagination from "../../../components/pagination/Pagination";

const FilterList = () => {
  const { filteredTerm, pageNo } = useSelector((state) => state.search);
  // const { data: filteredResults } = useFilterResultsQuery(filteredTerm);
  const { data: filteredResults } = useFilteredResultsByPaginationQuery({
    filteredTerm,
    pageNo,
  });
  console.log(filteredTerm);
  console.log(filteredResults);

  return (
    <section className="min-h-screen">
      <div className="mt-2 mb-[32px]">
        <h1 className="text-[12px] lg:text-[32px] font-[700] font-roboto text-white">
          Search Results for: {filteredTerm}
        </h1>
      </div>

      {/* ===========>> Filter Results <<===========*/}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-[17px] lg:gap-[25px] my-[18px]">
        {filteredResults?.data?.data?.map((item) => (
          <MovieCard
            key={item?.ID}
            item={item}
            redirect={`/movie/${item?.ID}`}
          ></MovieCard>
        ))}
      </div>

      <Pagination
        // currentPage={pageNo}
        // setCurrentPage={setCurrentPage}
        // perPgaeMovie={perPgaeMovie}
      />
    </section>
  );
};

export default FilterList;
