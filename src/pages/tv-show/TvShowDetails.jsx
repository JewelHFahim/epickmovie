import TvShowDetailsDefault from "./tvshow-details-default/TvShowDetailsDefault";
import { theme } from "../../config/config";
import TvShowDetailsTheme1 from "./tvshow-details-theme1/TvShowDetailsTheme1";
import TvShowDetailsTheme2 from "./tvshow-theme2/TvShowDetailsTheme2";

const TvShowDetails = () => {
  return (
    <>
      {theme === "theme1" ? (
        <TvShowDetailsTheme1 />
      ) : theme === "theme2" ? (
        <TvShowDetailsTheme2 />
      ) : (
        <TvShowDetailsDefault />
      )}
    </>
  );
};

export default TvShowDetails;
