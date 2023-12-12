import { useEffect, useState } from "react";
import { base_url, imgBaseUrl, key } from "../../../utils/Importants";

const DiscoverMovies = ({ filteredData }) => {
  
  const selectedGenreId = filteredData?.genreId;
  const selectedSort = filteredData?.sort;
  const selectedYear = filteredData?.year;
  const selectedPage = filteredData?.page;

  const [movies, setMovies] = useState([]);

  console.log(selectedGenreId, selectedSort, selectedYear, selectedPage);

  const genreLink = `${key}&with_genres=${selectedGenreId}`;

  const sortAscDesc = `${key}&sort_by=${selectedSort}`;

  const yearFilt = `${key}&primary_release_year=${selectedYear}`;

  const sortByPage = `${key}&page=${selectedPage}`;

  const URL = `${base_url}/discover/movie?${sortAscDesc}&${yearFilt}&${genreLink}&${sortByPage}`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, [URL]);

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
            <img src={`${imgBaseUrl}${item?.poster_path}`} alt="" />
            <p className="text-xs font-medium">{item?.title?.slice(0, 10)}</p>
            <p className="text-xs font-medium">
              {item?.release_date?.slice(0, 10)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverMovies;
