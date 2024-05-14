import { theme } from "../../../config/config";
import MovieDetailsDefault from "./movie-details-default/MovieDetailsDefault";
import MovieDetailsTheme1 from "./movie-details-theme1/MovieDetailsTheme1";
import MovieDetailsTheme2 from "./movie-details-theme2/MovieDetailsTheme2";

const MovieDetails = () => {
  return (
    <div>
      {theme === "theme1" ? (
        <MovieDetailsTheme1 />
      ) : theme === "theme2" ? (
        <MovieDetailsTheme2 />
      ) : (
        <MovieDetailsDefault />
      )}
    </div>
  );
};

export default MovieDetails;
