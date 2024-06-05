import { themeValue } from "../../../config/config";
import MovieDetailsDefault from "./movie-details-default/MovieDetailsDefault";
import MovieDetailsTheme1 from "./movie-details-theme1/MovieDetailsTheme1";
import MovieDetailsTheme2 from "./movie-details-theme2/MovieDetailsTheme2";
import MovieDetailsTheme3 from "./movie-details-theme3/MovieDetailsTheme3";

const MovieDetails = () => {

  const movieDetails = {
    theme1: <MovieDetailsTheme1 />,
    theme2: <MovieDetailsTheme2 />,
    theme3: <MovieDetailsTheme3 />,
    default: <MovieDetailsDefault />,
  };

  return <>{movieDetails[themeValue] || movieDetails.default}</>;
};

export default MovieDetails;
