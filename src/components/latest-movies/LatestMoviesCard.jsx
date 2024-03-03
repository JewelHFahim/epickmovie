import { usePerPgaeMovieQuery } from "../../redux/features/movies/movieApi";
import { usePerPgaeTvShowQuery } from "../../redux/features/tv-show/tvShowApi";
import LatestMCard from "./LatestMCard";

const LatestMoviesCard = ({ details }) => {

  const { data: movieList } = usePerPgaeMovieQuery(1);
  const { data: tvShowList } = usePerPgaeTvShowQuery(1);

  const latestDatas = details?.post_type === "movies" ? movieList : tvShowList;

  return (
    <div className="bg-[#27272A] p-2 flex flex-col gap-y-3">
      {latestDatas?.data?.data?.slice(0, 5)?.map((item, i) => (
        <LatestMCard key={i} item={item} />
      ))}
    </div>
  );
};

export default LatestMoviesCard;
