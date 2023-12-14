import { useEffect, useState } from "react";
import { base_url, key } from "../../../utils/Importants";

const DiscoverTvshows = ({filteredData}) => {
  const [tvShows, settvShows] = useState([]);
  
  const selectedGenreId = filteredData?.genreId;
  const selectedSort = filteredData?.sort;
  const selectedYear = filteredData?.year;
  const selectedPage = filteredData?.page;

  const genreLink = `${key}&with_genres=${selectedGenreId}`;

  const sortAscDesc = `${key}&sort_by=${selectedSort}`;

  const yearFilt = `${key}&primary_release_year=${selectedYear}`;

  const sortByPage = `${key}&page=${selectedPage}`;

  const URL = `${base_url}/tv?${key}`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => settvShows(data?.results));
  }, [URL]);

  return (
    <div>
      <button className="text-[16px] lg:text-[32px] font-[700] text-slate-700 border-b-[1.4px] border-[#FF2345] my-2 p-0">
        Tv Shows
      </button>
      
      <div className="grid grid-cols-3 lg:grid-cols-10 gap-y-4">
        {tvShows?.map((item, i) => (
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

export default DiscoverTvshows;
