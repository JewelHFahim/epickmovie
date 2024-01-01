import SubMenuButton from "../../utils/SubMenuButton";
import { useMovieListQuery } from "../../redux/features/movies/movieApi";
import DomainList from "../../components/domain-list/DomainList";
import MovieCard from "../../components/movie-card/MovieCard";
import HomePageSeeAllBtn from "../../utils/HomePageSeeAllBtn";
import { useTvShowListQuery } from "../../redux/features/tv-show/tvShowApi";
import { useQuickMenuUserQuery } from "../../redux/features/settings/settingApi";
import { collectFilteredItem } from "../../redux/features/search/searchSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const { data: movieList } = useMovieListQuery();
  const totalMovies = movieList?.data?.total;
  const {data: quickMenu } = useQuickMenuUserQuery();
  const dispatch = useDispatch();
  const { data: tvShowList } = useTvShowListQuery();
  const totalTvShow = tvShowList?.data?.total;  

  const handleQuickMenuNavigation = (data) => {
    dispatch(collectFilteredItem(data));
  };


  return (
    <section className="min-h-screen flex flex-col justify-center items-center">

      {/* ==================>> Quick Menus <<================*/}
      <div className="hidden lg:flex items-center gap-[25px] mt-[6px]">
        {quickMenu?.data?.map((menu, i) => (
          <Link key={i}
          to="/filter-list"
          onClick={() => handleQuickMenuNavigation(menu?.slug)}
           ><SubMenuButton >{menu.name}</SubMenuButton>
           </Link>
        ))}
      </div>

      {/* ==================>> Domains <<=================*/}
      <DomainList />

      <HomePageSeeAllBtn total={totalMovies} redirect={"/movies"}>Movies</HomePageSeeAllBtn>

      {/* ==================>> Movies <<==================*/}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-[17px] lg:gap-[25px] my-[18px]">
        {movieList?.data?.data?.slice(0, 10)?.map((item) => (
          <MovieCard
            key={item?.id}
            item={item}
            redirect={`/movie/${item?.id}`}
          ></MovieCard>
        ))}
      </div>

      <HomePageSeeAllBtn total={totalTvShow} redirect={"/tv-show"}>TV Show</HomePageSeeAllBtn>

      {/* ==================>> Movies <<==================*/}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-[17px] lg:gap-[25px] my-[18px]">
        {tvShowList?.data?.data?.slice(0, 10)?.map((item) => (
          <MovieCard
            key={item?.id}
            item={item}
            redirect={`/series/${item?.id}`}
          ></MovieCard>
        ))}
      </div>
    </section>
  );
};

export default Home;
