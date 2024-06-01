import { useSiteConfig } from "../../../utils/configHooks/ConfigHooks";
import EnglishMoviesTheme1 from "./EnglishMoviesTheme1";
import EnglishMoviesTheme2 from "./EnglishMoviesTheme2";

const EnglishMovies = () => {
  const { themeValue } = useSiteConfig();

  return (
    <>
      {themeValue === "theme1" && <EnglishMoviesTheme1 />}
      {themeValue === "theme2" && <EnglishMoviesTheme2 />}
    </>
  );
};

export default EnglishMovies;
