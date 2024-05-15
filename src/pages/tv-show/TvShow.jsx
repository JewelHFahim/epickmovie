import { theme } from "../../config/config";
import TvShowTheme2 from "./tvshow-theme2/TvShowTheme2";
import TvShowsTheme1 from "./tvshow-theme1/TvShowsTheme1";
import TvShowsDefault from "./tvshows-default/TvShowsDefault";

const TvShow = () => {
  return (
    <div>
      {theme === "theme1" ? (
        <TvShowsTheme1 />
      ) : theme === "theme2" ? (
        <TvShowTheme2 />
      ) : (
        <TvShowsDefault />
      )}
    </div>
  );
};

export default TvShow;
