import { theme } from "../../../config/config";
import FilterListDefault from "./filter-default/FilterListDefault";
import FilterListTheme1 from "./filterlist-theme1/FilterListTheme1";
import FilterListTheme2 from "./filterlist-theme2/FilterListTheme2";
import FilterListTheme3 from "./filterlist-theme3/FilterListTheme3";

const FilterList = () => {
  const filterList = {
    theme1: <FilterListTheme1 />,
    theme2: <FilterListTheme2 />,
    theme3: <FilterListTheme3 />,
    default: <FilterListDefault />,
  };

  return <>{filterList[theme] || filterList.default}</>;
};

export default FilterList;
