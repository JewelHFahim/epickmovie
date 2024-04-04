import { theme } from "../../../config/config";
import FilterListDefault from "./filter-default/FilterListDefault";
import FilterListTheme1 from "./filterlist-tmeme1/FilterListTheme1";

const FilterList = () => {
  return (
    <>{theme === "theme1" ? <FilterListTheme1 /> : <FilterListDefault />}</>
  );
};

export default FilterList;
