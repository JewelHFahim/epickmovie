import { useEffect, useState } from "react";
import { base_url, key } from "../../../utils/Importants";
import TvShowGallery from "./TvShowGallery";
import { useSelector } from "react-redux";
import { tmdb_baseurl } from "../../../config/config";

const DiscoverTvshows = ({filteredData}) => {
  const date = new Date();
  const year = date.getFullYear();

  const [tvShows, settvShows] = useState([]);
  const {searchMovieSeries} = useSelector(state => state.search);

  const selectedGenreId = filteredData?.genreId;
  const selectedSort = filteredData?.sort;
  const selectedYear = filteredData?.year;
  const selectedPage = filteredData?.page;

  const genreLink = selectedGenreId?.length > 0 ? `with_genres=${selectedGenreId}` : `with_genres=`;
  const sortAscDesc = selectedSort?.length > 0 ? `sort_by=${selectedSort}` : `sort_by=popularity.desc` ;
  const yearFilt = selectedYear?.length > 0 ? `first_air_date_year=${selectedYear}` : `first_air_date_year=${year}`;
  const sortByPage = selectedPage?.length > 0 ? `page=${selectedPage}` : `page=1`;
  const searchSeries = `${tmdb_baseurl}/search/tv?include_adult=true&${key}&query=${searchMovieSeries}`;
  const URL = `${base_url}/tv?${key}&include_adult=true&${sortByPage}&${sortAscDesc}&${yearFilt}&${genreLink}`;

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
