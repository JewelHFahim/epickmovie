import { usePerPgaeMovieQuery } from "../../redux/features/movies/movieApi";
import LatestMCard from "./LatestMCard";

const LatestMoviesCard = () => {

  const { data: movieList } = usePerPgaeMovieQuery(1);


  return (
    <div className="bg-[#27272A] p-2 flex flex-col gap-y-3">
      {(movieList?.data?.data)?.slice(0,5)?.map((item, i) => (
        <LatestMCard key={i} item={item}/>
      ))}
    </div>
  );
};

export default LatestMoviesCard;
