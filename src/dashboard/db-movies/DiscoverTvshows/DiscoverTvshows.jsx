import { useEffect, useState } from "react";
import { base_url, key } from "../../../utils/Importants";
import TvShowGallery from "./TvShowGallery";

const DiscoverTvshows = ({filteredData}) => {
  const [tvShows, settvShows] = useState([]);

  console.log(tvShows)
  
  const selectedGenreId = filteredData?.genreId;
  const selectedSort = filteredData?.sort;
  const selectedYear = filteredData?.year;
  const selectedPage = filteredData?.page;

  const genreLink = `${key}&with_genres=${selectedGenreId}`;

  const sortAscDesc = `${key}&sort_by=${selectedSort}`;

  const yearFilt = `${key}&primary_release_year=${selectedYear}`;

  const sortByPage = `${key}&page=${selectedPage}`;

  const URL = `${base_url}/tv?${key}`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => settvShows(data?.results));
  }, [URL]);

  return (
    <div>
       <div>
      <TvShowGallery tvShows={tvShows} />
    </div>
    </div>
  );
};

export default DiscoverTvshows;
