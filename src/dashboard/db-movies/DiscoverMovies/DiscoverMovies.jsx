import { useEffect, useState } from "react";

const DiscoverMovies = () => {
  const [movies, setMovies] = useState([]);

  console.log(movies)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=246b8014c5aa8430016780041a413012`)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <button className="text-[16px] lg:text-[32px] font-[700] text-slate-700 border-b-[1.4px] border-[#FF2345] p-0 mb-2">
        Movies
      </button>
      <div className="grid grid-cols-3 lg:grid-cols-10 gap-y-4">
        {movies?.results?.map((item, i) => (
          <div
            key={i}
            className="w-[100px] min-h-[100%] flex flex-col items-center"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
              alt=""
            />
            <p className="text-xs font-medium">{item?.title?.slice(0, 10)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverMovies;
