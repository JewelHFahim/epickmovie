import { theme } from "../../../config/config";
import BanglaDefault from "./BanglaDefault";
import BanglaTheme1 from "./BanglaTheme1";
import BanglaTheme2 from "./BanglaTheme2";

const BanglaMovie = () => {
  return (
    <>
      {theme === "theme1" ? (
        <BanglaTheme1 />
      ) : theme === "theme2" ? (
        <BanglaTheme2 />
      ) : (
        <BanglaDefault />
      )}
    </>
  );
};

export default BanglaMovie;
