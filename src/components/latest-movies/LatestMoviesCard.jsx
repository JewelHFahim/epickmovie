import { Link } from "react-router-dom";
import { usePerPgaeMovieQuery } from "../../redux/features/movies/movieApi";

const LatestMoviesCard = () => {

  const { data: movieList, isLoading: movieLoading } = usePerPgaeMovieQuery(1);

  console.log(movieList)

  return (
    <div className="bg-[#27272A] p-2 flex flex-col gap-y-3">
      {(movieList?.data?.data)?.slice(0,5)?.map((item, i) => (
        <Link to={item?.post_type === "movies" ? `/movie/${item?.id}/${item?.post_title}` : `/series/${item?.id}/${item?.post_title}`} 
          key={i}
          className="flex items-center gap-x-3 bg-[#202020] p-1 shadow-md"
        >
          <div className="bg-gradient-to-t from-[#ff1818] to-[#fdd506] p-[2px] w-[55px] h-[70px]">
            <img
              src={item?.poster_image_url}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-[#D6D6D6D6] text-opacity-[60%] font-aclonica w-[80%] text-[11px]">
            {item?.post_title}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default LatestMoviesCard;
