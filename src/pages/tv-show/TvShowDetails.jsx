import TvShowDetailsDefault from "./tvshow-details-default/TvShowDetailsDefault";
import { theme } from "../../config/config";
import TvShowDetailsTheme1 from "./tvshow-details-theme1/TvShowDetailsTheme1";

const TvShowDetails = () => {
  return (
    <>
      {theme === "theme1" ? <TvShowDetailsTheme1 /> : <TvShowDetailsDefault />}
    </>
  );
};

export default TvShowDetails;
