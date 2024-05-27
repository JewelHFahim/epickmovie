import { theme } from "../../../config/config";
import SearchListTheme1 from "./SearchListTheme1";
import SearchListDefault from "./SearchListDefault";
import SearchListTheme2 from "./SearchListTheme2";
import SearchListTheme3 from "./SearchListTheme3";

const SearchList = () => {
  const searchList = {
    theme1: <SearchListTheme1 />,
    theme2: <SearchListTheme2 />,
    theme3: <SearchListTheme3 />,
    default: <SearchListDefault />,
  };
  return <>{searchList[theme] || searchList.default}</>;
};

export default SearchList;
