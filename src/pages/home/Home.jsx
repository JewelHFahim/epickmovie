import SubMenuButton from "../../utils/SubMenuButton";
import { useMovieListQuery } from "../../redux/features/movies/movieApi";
import { subMenus } from "../../utils/menu-list/menu-list";
import DomainList from "../../components/domain-list/DomainList";
import MovieCard from "../../components/movie-card/MovieCard";
import HomePageSeeAllBtn from "../../utils/HomePageSeeAllBtn";
import { useTvShowListQuery } from "../../redux/features/tv-show/tvShowApi";
import { useFilterResultsQuery, useSerachResultsQuery } from "../../redux/features/search/searchApi";
import { useSelector } from "react-redux";
import SearchList from "../movies/search-list/SearchList";

const Home = () => {
  const { data: movieList } = useMovieListQuery();
  const totalMovies = movieList?.data?.total;
  const { data: tvShowList } = useTvShowListQuery();
  const totalTvShow = tvShowList?.data?.total;

  const { filteredTerm, searchTerm } = useSelector((state) => state.search);
  const { data: filteredResults } = useFilterResultsQuery(filteredTerm);
  const { data: searchResults } = useSerachResultsQuery(searchTerm);
  console.log(filteredResults);


  return (
    <main>
      {(filteredResults || searchResults) ?.data?.length > 0 ? (
        <SearchList />
      ) : (
        <section className="flex flex-col justify-center items-center">
          {/* ==================>> Submenus <<================*/}
          <div className="hidden lg:flex items-center gap-[25px] mt-[6px]">
            {subMenus.map((menu, i) => (
              <SubMenuButton key={i}>{menu.title}</SubMenuButton>
            ))}
          </div>

          {/* ==================>> Domains <<=================*/}
          <DomainList />

          <HomePageSeeAllBtn total={totalMovies}>Movies</HomePageSeeAllBtn>

          {/* ==================>> Movies <<==================*/}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-[17px] lg:gap-[25px] my-[18px]">
            {movieList?.data?.data?.slice(0, 10)?.map((item) => (
              <MovieCard
                key={item?.ID}
                item={item}
                redirect={`/movie/${item?.ID}`}
              ></MovieCard>
            ))}
          </div>

          <HomePageSeeAllBtn total={totalTvShow}>TV Show</HomePageSeeAllBtn>

          {/* ==================>> Movies <<==================*/}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-[17px] lg:gap-[25px] my-[18px]">
            {tvShowList?.data?.data?.slice(0, 10)?.map((item) => (
              <MovieCard
                key={item?.ID}
                item={item}
                redirect={`/series/${item?.ID}`}
              ></MovieCard>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default Home;
