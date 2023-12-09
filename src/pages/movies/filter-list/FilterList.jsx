import { useSelector } from "react-redux";
import {
  useFilterResultsQuery,
} from "../../../redux/features/search/searchApi";
import MovieCard from "../../../components/movie-card/MovieCard";

const FilterList = () => {

  const { filteredTerm } = useSelector((state) => state.search);
  const { data: filteredResults } = useFilterResultsQuery(filteredTerm);

  return (
    <section className="min-h-screen">

      <div className="mt-2 mb-[32px]">
        <h1 className="text-[12px] lg:text-[32px] font-[700] font-roboto text-white">
          Search Results for: {filteredTerm}
        </h1>
      </div>

      {/* ===========>> Filter Results <<===========*/}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-[17px] lg:gap-[25px] my-[18px]">
        {filteredResults?.data?.map((item) => (
          <MovieCard
            key={item?.ID}
            item={item}
            redirect={`/movie/${item?.ID}`}
          ></MovieCard>
        ))}
      </div>

    </section>
  );
};

export default FilterList;
