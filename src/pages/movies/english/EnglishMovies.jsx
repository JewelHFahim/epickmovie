import { theme } from "../../../config/config";
import EnglishMoviesTheme1 from "./EnglishMoviesTheme1";
import EnglishMoviesTheme2 from "./EnglishMoviesTheme2";

const EnglishMovies = () => {
  return (
    <>
      {theme === "theme1" && <EnglishMoviesTheme1 />}
      {theme === "theme2" && <EnglishMoviesTheme2 />}
    </>
  );
};

export default EnglishMovies;
