import { theme } from "../../../config/config";
import BanglaDefault from "./BanglaDefault";
import BanglaTheme1 from "./BanglaTheme1";

const BanglaMovie = () => {
  return <>{theme === "theme1" ? <BanglaTheme1 /> : <BanglaDefault />}</>;
};

export default BanglaMovie;
