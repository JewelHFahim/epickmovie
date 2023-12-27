import SubMenuButton from "../../utils/SubMenuButton";
import { useMovieListQuery } from "../../redux/features/movies/movieApi";
import DomainList from "../../components/domain-list/DomainList";
import MovieCard from "../../components/movie-card/MovieCard";
import HomePageSeeAllBtn from "../../utils/HomePageSeeAllBtn";
import { useTvShowListQuery } from "../../redux/features/tv-show/tvShowApi";
import { useQuickMenuQuery } from "../../redux/features/settings/settingApi";
import { collectFilteredItem } from "../../redux/features/search/searchSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { data: movieList } = useMovieListQuery();
  const totalMovies = movieList?.data?.total;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(movieList)

  const { data: tvShowList } = useTvShowListQuery();
  const totalTvShow = tvShowList?.data?.total;  

  const {data: quickMenu } = useQuickMenuQuery();

  // const handleGenre = (data) => {
  //  const res =  dispatch(collectFilteredItem(data));
  //  if(res.ok){
  //   navigate("/filter-list")
  //  }

  // };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      {/* ==================>> Submenus <<================*/}
      <div className="hidden lg:flex items-center gap-[25px] mt-[6px]">
        {quickMenu?.data?.map((menu, i) => (
          <button key={i}
          //  onClick={()=>handleGenre(menu?.slug)}
           ><SubMenuButton >{menu.name}</SubMenuButton></button>
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
            key={item?.ID}
            item={item}
            redirect={`/series/${item?.id}`}
          ></MovieCard>
        ))}
      </div>
    </section>
  );
};

export default Home;
