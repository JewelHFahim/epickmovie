import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieGallery from "./MovieGallery";
import { key } from "../../../utils/Importants";
import { tmdb_baseurl } from "../../../config/config";

const SearchResults = () => {
  const [movies, setMovies] = useState([]);
  const { searchMovieSeries } = useSelector((state) => state.search);
  const searchMovie = `${tmdb_baseurl}/search/movie?include_adult=true&${key}&query=${searchMovieSeries}`;

  useEffect(() => {
    fetch(searchMovie)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, [searchMovie, searchMovieSeries]);
  return (
    <div>
      <MovieGallery movies={movies} />
    </div>
  );
};

export default SearchResults;
