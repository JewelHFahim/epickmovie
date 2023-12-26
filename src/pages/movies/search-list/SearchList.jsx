import { useSelector } from "react-redux";
import {
  useSerachResultsQuery,
} from "../../../redux/features/search/searchApi";
import MovieCard from "../../../components/movie-card/MovieCard";

const SearchList = () => {

  const { searchTerm } = useSelector((state) => state.search);
  console.log(searchTerm)
  const { data: searchResults } = useSerachResultsQuery(searchTerm);
  console.log(searchResults)

  return (
    <section className="min-h-screen">
      
      <div className="mt-2 mb-[32px]">
        <h1 className="text-[12px] lg:text-[32px] font-[700] font-roboto text-white">
          Search Results for: {searchTerm}
        </h1>
      </div>

      {/* ===========>> Searched Results <<===========*/}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-[17px] lg:gap-[25px] my-[18px]">
        {searchResults?.data?.map((item) => (
          <MovieCard
            key={item?.id}
            item={item} 
            redirect={ item?.post_type === "tvshows" ? `/series/${item?.id}` : `/movie/${item?.id}`}
          ></MovieCard>
        ))}
      </div>

    </section>
  );
};

export default SearchList;
