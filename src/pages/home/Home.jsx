import HomeTheme1 from "./HomeTheme1";
import HomeTheme2 from "./HomeTheme2";
import HomeTheme3 from "./HomeTheme3";
import HomeDefault from "./HomeDefault";
import { useSiteConfig } from "../../utils/configHooks/ConfigHooks";

const Home = () => {
  const { themeValue } = useSiteConfig();


  const themes = {
    theme1: <HomeTheme1 />,
    theme2: <HomeTheme2 />,
    theme3: <HomeTheme3 />,
  };

  return <>{themes[themeValue] || <HomeDefault />}</>;
};

export default Home;
