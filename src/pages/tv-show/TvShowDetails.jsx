import TvShowDetailsDefault from "./tvshow-details-default/TvShowDetailsDefault";
import TvShowDetailsTheme1 from "./tvshow-details-theme1/TvShowDetailsTheme1";
import TvShowDetailsTheme2 from "./tvshow-theme2/TvShowDetailsTheme2";
import TvShowDetailsTheme3 from "./tvshow-details-theme3/TvShowDetailsTHeme3";
import { themeValue } from "../../config/config";

const TvShowDetails = () => {

  const tvShowDetails = {
    theme1: <TvShowDetailsTheme1 />,
    theme2: <TvShowDetailsTheme2 />,
    theme3: <TvShowDetailsTheme3 />,
    default: <TvShowDetailsDefault />,
  };

  return <>{tvShowDetails[themeValue] || tvShowDetails.default}</>;
};

export default TvShowDetails;
