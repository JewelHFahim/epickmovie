import { theme } from "../../../config/config";
import HindiMoviesTheme1 from "./HindiMoviesTheme1";
import HindiMoviesTheme2 from "./HindiMoviesTheme2";

const HindiMovies = () => {
  return (
    <>
      {theme === "theme1" && <HindiMoviesTheme1 />}
      {theme === "theme2" && <HindiMoviesTheme2 />}
    </>
  );
};

export default HindiMovies;
