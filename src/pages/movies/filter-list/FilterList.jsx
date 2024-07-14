import { themeValue } from "../../../config/config";
import FilterListTheme1 from "./filterlist-theme1/FilterListTheme1";
import FilterListTheme2 from "./filterlist-theme2/FilterListTheme2";
import FilterListTheme3 from "./filterlist-theme3/FilterListTheme3";
import FilterListDefault from "./filter-default/FilterListDefault";

const FilterList = () => {

  const filterList = {
    theme1: <FilterListTheme1 />,
    theme2: <FilterListTheme2 />,
    theme3: <FilterListTheme3 />,
    default: <FilterListDefault />,
  };

  return <>{filterList[themeValue] || filterList.default}</>;
};

export default FilterList;
