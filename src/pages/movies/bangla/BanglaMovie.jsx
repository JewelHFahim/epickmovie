import { useSiteConfig } from "../../../utils/configHooks/ConfigHooks";
import BanglaDefault from "./BanglaDefault";
import BanglaTheme1 from "./BanglaTheme1";
import BanglaTheme2 from "./BanglaTheme2";
import BanglaTheme3 from "./BanglaTheme3";

const BanglaMovie = () => {
  const { themeValue } = useSiteConfig();

  const banglaMovies = {
    theme1: <BanglaTheme1 />,
    theme2: <BanglaTheme2 />,
    theme3: <BanglaTheme3 />,
    default: <BanglaDefault />,
  };

  return <>{banglaMovies[themeValue] || banglaMovies.default}</>;
};

export default BanglaMovie;
