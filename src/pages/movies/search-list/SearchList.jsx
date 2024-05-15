import { theme } from "../../../config/config";
import SearchListTheme1 from "./SearchListTheme1";
import SearchListDefault from "./SearchListDefault";
import SearchListTheme2 from "./SearchListTheme2";

const SearchList = () => {
  return (
    <>
      {theme === "theme1" ? (
        <SearchListTheme1 />
      ) : theme === "theme2" ? (
        <SearchListTheme2 />
      ) : (
        <SearchListDefault />
      )}
    </>
  );
};

export default SearchList;
