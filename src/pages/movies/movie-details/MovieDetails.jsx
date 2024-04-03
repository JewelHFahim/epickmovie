

import { theme } from "../../../config/config";
import MovieDetailsDefault from "./movie-details-default/MovieDetailsDefault";
import MovieDetailsTheme1 from "./movie-details-theme1/MovieDetailsTheme1";

const MovieDetails = () => {
  return (
    <div>
      {theme === "theme1" ? <MovieDetailsTheme1 /> : <MovieDetailsDefault />}
    </div>
  );
};

export default MovieDetails;
