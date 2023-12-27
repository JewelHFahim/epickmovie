import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieGallery from "./MovieGallery";
import { key } from "../../../utils/Importants";

const SearchResults = () => {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  const { searchMovieSeries } = useSelector((state) => state.search);

  const searchMovie = `https://api.themoviedb.org/3/search/movie?include_adult=true&${key}&query=${searchMovieSeries}`;


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
