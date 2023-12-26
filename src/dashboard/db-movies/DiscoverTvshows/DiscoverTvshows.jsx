import { useEffect, useState } from "react";
import { base_url, key } from "../../../utils/Importants";
import TvShowGallery from "./TvShowGallery";
import { useSelector } from "react-redux";

const DiscoverTvshows = ({filteredData}) => {
  const [tvShows, settvShows] = useState([]);
  const {searchMovieSeries} = useSelector(state => state.search);
  console.log(tvShows);

  
  const selectedGenreId = filteredData?.genreId;
  const selectedSort = filteredData?.sort;
  const selectedYear = filteredData?.year;
  const selectedPage = filteredData?.page;

  const genreLink = `${key}&with_genres=${selectedGenreId}`;

  const sortAscDesc = `${key}&sort_by=${selectedSort}`;

  const yearFilt = `${key}&primary_release_year=${selectedYear}`;

  const sortByPage = `${key}&page=${selectedPage}`;

  const searchSeries = `https://api.themoviedb.org/3/search/tv?include_adult=true&${key}&query=${searchMovieSeries}`;

  const URL = `https://api.themoviedb.org/3/discover/tv?${key}`;

  const currentURL = (searchMovieSeries === null || searchMovieSeries === "") ? URL : searchSeries;


  useEffect(() => {
    fetch(currentURL)
      .then((res) => res.json())
      .then((data) => settvShows(data?.results));
  }, [currentURL]);

  return (
    <div>
     
      <TvShowGallery tvShows={tvShows} />

    </div>
  );
};

export default DiscoverTvshows;
