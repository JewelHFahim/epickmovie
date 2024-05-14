import { theme } from "../../config/config";
import HomeDefault from "./HomeDefault";
import HomeTheme1 from "./HomeTheme1";
import HomeTheme2 from "./HomeTheme2";

const Home = () => {
  return (
    <>
      {theme === "theme1" ? (
        <HomeTheme1 />
      ) : theme === "theme2" ? (
        <HomeTheme2 />
      ) : (
        <HomeDefault />
      )}
    </>
  );
};

export default Home;
