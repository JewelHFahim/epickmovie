import { theme } from "../../config/config";
import TvShowsTheme1 from "./tvshow-theme1/TvShowsTheme1";
import TvShowsDefault from "./tvshows-default/TvShowsDefault";

const TvShow = () => {
  return (
    <div>{theme === "theme1" ? <TvShowsTheme1 /> : <TvShowsDefault />}</div>
  );
};

export default TvShow;
