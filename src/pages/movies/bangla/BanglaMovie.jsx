import MovieCard from "../../../components/movie-card/MovieCard";
import { useBanglaMovieListQuery } from "../../../redux/features/movies/movieApi";
import Title from "../../../utils/Title";

const BanglaMovie = () => {


    const {data: banglaMovies} = useBanglaMovieListQuery();

    console.log(banglaMovies?.status)


  return (
    <div className="min-h-screen">


      {/* ==================>> Movies <<==================*/}
      <div className="m-2"><Title>Bangla</Title></div>
      
      {
        banglaMovies?.status === false ? 

       <div className="w-full flex justify-center my-5">
         <p className="text-[35px] text-white font-medium">No Data Found</p>
       </div>
        
        : 

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-[17px] lg:gap-[25px] my-[18px]">
        {banglaMovies?.data?.data?.map((item) => (
          <MovieCard
            key={item?.ID}
            item={item}
            redirect={`/movie/${item?.ID}`}
          ></MovieCard>
        ))}
      </div>
}


    </div>
  );
};

export default BanglaMovie;
