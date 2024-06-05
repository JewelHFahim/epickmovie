import { themeValue } from "../../../config/config";
import EnglishMoviesTheme1 from "./EnglishMoviesTheme1";
import EnglishMoviesTheme2 from "./EnglishMoviesTheme2";

const EnglishMovies = () => {

  return (
    <>
      {themeValue === "theme1" && <EnglishMoviesTheme1 />}
      {themeValue === "theme2" && <EnglishMoviesTheme2 />}
    </>
  );
};

export default EnglishMovies;
