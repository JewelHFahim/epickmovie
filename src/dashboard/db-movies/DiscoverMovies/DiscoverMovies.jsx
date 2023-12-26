import { useEffect, useState } from "react";
import { base_url, key } from "../../../utils/Importants";
import MovieGallery from "./MovieGallery";
import { useSelector } from "react-redux";

const DiscoverMovies = ({ filteredData }) => {

  const {searchMovieSeries} = useSelector(state => state.search);
  console.log(searchMovieSeries, "from redux");

  const selectedGenreId = filteredData?.genreId;
  const selectedSort = filteredData?.sort;
  const selectedYear = filteredData?.year;
  const selectedPage = filteredData?.page;

  const [movies, setMovies] = useState([]);
  console.log(movies)

  const genreLink = `${key}&with_genres=${selectedGenreId}`;

  const sortAscDesc = `${key}&sort_by=${selectedSort}`;

  const yearFilt = `${key}&primary_release_year=${selectedYear}`;

  const sortByPage = `${key}&page=${selectedPage}`;

  const URL = `${base_url}/movie?${sortAscDesc}&${yearFilt}&${genreLink}&${sortByPage}`;

  const searchMovie = `https://api.themoviedb.org/3/search/movie?include_adult=true&${key}&query=${searchMovieSeries}`;
  
  const currentURL =  ( searchMovieSeries  === null || searchMovieSeries === "") ? URL : searchMovie;


  useEffect(() => {
    fetch(currentURL)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, [currentURL]);

  return (
    <div>
      <MovieGallery movies={movies} />
    </div>
  );
};

export default DiscoverMovies;
