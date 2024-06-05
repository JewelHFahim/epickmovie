import TvShowTheme2 from "./tvshow-theme2/TvShowTheme2";
import TvShowsTheme1 from "./tvshow-theme1/TvShowsTheme1";
import TvShowsDefault from "./tvshows-default/TvShowsDefault";
import TvShowTheme3 from "./tvshow-theme3/TvShowTheme3";
import { themeValue } from "../../config/config";

const TvShow = () => {

  const tvshows = {
    theme1: <TvShowsTheme1 />,
    theme2: <TvShowTheme2 />,
    theme3: <TvShowTheme3 />,
    default: <TvShowsDefault />,
  };

  return <>{tvshows[themeValue] || tvshows.default}</>;
};

export default TvShow;
