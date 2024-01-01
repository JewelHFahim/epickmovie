import { useEffect, useState } from "react";
import { tmdb_baseurl } from "../../config/config";

const FilterByGenre = ({ selectedGenreId, selectedSort }) => {
  const [filterByGenre, setFilterByGenre] = useState();

  const key = "api_key=246b8014c5aa8430016780041a413012";
  const genreLink = `${key}&with_genres=${selectedGenreId}`;
  const sorAscDesc = `${key}&sort_by=${selectedSort}`;
  const yearFilt = `${key}&primary_release_year=2023`;
  const base_url = `${tmdb_baseurl}/discover/movie`;
  const imgBase_url = "https://image.tmdb.org/t/p/w500";
  const URL = `${base_url}?${key}`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setFilterByGenre(data));
  }, [URL]);

  console.log(filterByGenre);

  return (
    <div className="p-10">

      <button className="text-[16px] lg:text-[32px] font-[700] text-slate-700 border-b-[1.4px] border-[#FF2345] p-0 mb-2">
        Movies
      </button>

      <div className="grid grid-cols-10 gap-4">
        {filterByGenre?.results?.map((item, i) => (
          <div key={i}>
            <img
              src={`${imgBase_url}${item?.poster_path}`}
              alt=""
              className="w-[100px] h-[150px]"
            />
            <p>{item?.original_title.slice(0, 10)}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default FilterByGenre;
