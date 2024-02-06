import { useEffect, useState } from "react";
import { base_url, key } from "../../../utils/Importants";
import MovieGallery from "./MovieGallery";
import { useSelector } from "react-redux";
import { tmdb_baseurl } from "../../../config/config";

const DiscoverMovies = ({ filteredData }) => {

  const date = new Date();
  const [movies, setMovies] = useState([]);
  const year = date.getFullYear();
  const { searchMovieSeries } = useSelector((state) => state.search);

  const selectedGenreId = filteredData?.genreId;
  const selectedSort = filteredData?.sort;
  const selectedYear = filteredData?.year;
  const selectedPage = filteredData?.page;

  const genreLink = selectedGenreId?.length > 0 ? `with_genres=${selectedGenreId}` : `with_genres=`;
  const sortAscDesc = selectedSort?.length > 0 ? `sort_by=${selectedSort}` : `sort_by=popularity.desc`;
  const yearFilt = selectedYear?.length > 0 ? `primary_release_year=${selectedYear}` : `primary_release_year=${year}`;
  const sortByPage = selectedPage?.length > 0 ? `page=${selectedPage}` : `page=1`;
  const URL = `${base_url}/movie?${key}&include_adult=true&${sortByPage}&${sortAscDesc}&${yearFilt}&${genreLink}`;
  const searchMovie = `${tmdb_baseurl}/search/movie?include_adult=true&${key}&query=${searchMovieSeries}`;
  const currentURL = searchMovieSeries === null || searchMovieSeries === "" ? URL : searchMovie;

  useEffect(() => {
    fetch(currentURL)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, [currentURL, searchMovieSeries]);

  return (
    <div>
      <MovieGallery movies={movies} />
    </div>
  );
};

export default DiscoverMovies;
