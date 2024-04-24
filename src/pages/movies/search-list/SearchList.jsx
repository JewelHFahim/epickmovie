import { theme } from "../../../config/config";
import SearchListTheme1 from "./SearchListTheme1";
import SearchListDefault from "./SearchListDefault";

const SearchList = () => {
  return (
    <>{theme === "theme1" ? <SearchListTheme1 /> : <SearchListDefault />}</>
  );
};

export default SearchList;
