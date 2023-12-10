import { useMovieListQuery } from "../../redux/features/movies/movieApi";

const Discovery = () => {
  const { data: movieList } = useMovieListQuery();
  console.log(movieList?.data?.data);

  return (
    <div className="p-10">
      <div className="grid grid-cols-10 gap-y-4">
        {movieList?.data?.data?.map((item, i) => (
          <div key={i} className="w-[100px] min-h-[100%] flex flex-col items-center">
            <img src={item?.poster_image_url} alt="" />
            <p className="text-sm">{item?.post_name?.slice(0,10)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discovery;
