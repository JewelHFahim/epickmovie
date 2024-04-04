import { theme } from "../../config/config";
import HomeDefault from "./HomeDefault";
import HomeTheme1 from "./HomeTheme1";

const Home = () => {
  return <>{theme === "theme1" ? <HomeTheme1 /> : <HomeDefault />}</>;
};

export default Home;
