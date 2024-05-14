import { useLocation } from "react-router-dom";
import { usePerPgaeMovieQuery } from "../../../redux/features/movies/movieApi";
import MoviesDefault from "./movies-default/MoviesDefault";
import MoviesTheme1 from "./movies-theme1/MoviesTheme1";
import { theme } from "../../../config/config";
import MoviesTheme2 from "./movies-theme2/MoviesTheme2";

const Movies = () => {
  const location = useLocation();
  const currentRoute = location.pathname;

  const currentP = Number(currentRoute?.slice(13));
  const { data: perPgaeMovie, isLoading } = usePerPgaeMovieQuery(currentP);

  return (
    <>
      {theme === "theme1" ? (
        <MoviesTheme1 perPgaeMovie={perPgaeMovie} isLoading={isLoading} />
      ) : theme === "theme2" ? (
        <MoviesTheme2 perPgaeMovie={perPgaeMovie} isLoading={isLoading} />
      ) : (
        <MoviesDefault />
      )}
    </>
  );
};

export default Movies;
