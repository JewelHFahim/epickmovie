import { useLocation } from "react-router-dom";
import { usePerPgaeMovieQuery } from "../../../redux/features/movies/movieApi";
import MoviesDefault from "./movies-default/MoviesDefault";
import MoviesTheme1 from "./movies-theme1/MoviesTheme1";
import MoviesTheme2 from "./movies-theme2/MoviesTheme2";
import MoviesTheme3 from "./movies-theme3/MoviesTheme3";
import { themeValue } from "../../../config/config";

const Movies = () => {
  const location = useLocation();
  const currentRoute = location.pathname;

  const currentP = Number(currentRoute?.slice(13));
  const { data: perPgaeMovie, isLoading } = usePerPgaeMovieQuery(currentP);

  const movies = {
    theme1: <MoviesTheme1 perPgaeMovie={perPgaeMovie} isLoading={isLoading} />,
    theme2: <MoviesTheme2 perPgaeMovie={perPgaeMovie} isLoading={isLoading} />,
    theme3: <MoviesTheme3 perPgaeMovie={perPgaeMovie?.perPgaeMovie} isLoading={isLoading} />,
    default: <MoviesDefault />,
  };

  return <>{movies[themeValue] || movies.default}</>;
};

export default Movies;
