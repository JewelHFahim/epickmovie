import { useEffect, useState } from "react";
import { base_url, key } from "../../../utils/Importants";
import MovieGallery from "./MovieGallery";

const DiscoverMovies = ({ filteredData }) => {

  const selectedGenreId = filteredData?.genreId;
  const selectedSort = filteredData?.sort;
  const selectedYear = filteredData?.year;
  const selectedPage = filteredData?.page;

  const [movies, setMovies] = useState([]);

  const genreLink = `${key}&with_genres=${selectedGenreId}`;

  const sortAscDesc = `${key}&sort_by=${selectedSort}`;

  const yearFilt = `${key}&primary_release_year=${selectedYear}`;

  const sortByPage = `${key}&page=${selectedPage}`;

  const URL = `${base_url}/movie?${sortAscDesc}&${yearFilt}&${genreLink}&${sortByPage}`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, [URL]);

  return (
    <div>
      <MovieGallery movies={movies} />
    </div>
  );
};

export default DiscoverMovies;
