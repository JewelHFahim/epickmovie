import { useSiteConfig } from "../../../utils/configHooks/ConfigHooks";
import HindiMoviesTheme1 from "./HindiMoviesTheme1";
import HindiMoviesTheme2 from "./HindiMoviesTheme2";

const HindiMovies = () => {
  const { themeValue } = useSiteConfig();

  return (
    <>
      {themeValue === "theme1" && <HindiMoviesTheme1 />}
      {themeValue === "theme2" && <HindiMoviesTheme2 />}
    </>
  );
};

export default HindiMovies;
