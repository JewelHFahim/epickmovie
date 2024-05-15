import { theme } from "../../../config/config";
import FilterListDefault from "./filter-default/FilterListDefault";
import FilterListTheme2 from "./filterlist-theme2/FilterListTheme2";
import FilterListTheme1 from "./filterlist-tmeme1/FilterListTheme1";

const FilterList = () => {
  return (
    <>
      {theme === "theme1" ? (
        <FilterListTheme1 />
      ) : theme === "theme2" ? (
        <FilterListTheme2 />
      ) : (
        <FilterListDefault />
      )}
    </>
  );
};

export default FilterList;
