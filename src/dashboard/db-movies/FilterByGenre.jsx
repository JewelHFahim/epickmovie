import { useEffect, useState } from "react";

const FilterByGenre = () => {
  const [filterByGenre, setFilterByGenre] = useState();

  const genreId = 16;
  const key = "api_key=246b8014c5aa8430016780041a413012";
  const URL = `https://api.themoviedb.org/3/discover/movie?${key}&with_genres=${genreId}`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setFilterByGenre(data));
  }, []);

  console.log(filterByGenre?.results);

  return (
    <div className="grid grid-cols-10 gap-4">
      {filterByGenre?.results?.map((item, i) => (
        <div key={i}>
            <img  src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} alt="" className="w-[100px] h-[150px]"/>
          <p>{item?.original_title}</p>
        </div>
      ))}
    </div>
  );
};

export default FilterByGenre;
