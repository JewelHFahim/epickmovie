import { Link } from "react-router-dom";
import { useCountryListClientQuery } from "../../redux/features/movies/movieApi";
import { collectFilteredItem } from "../../redux/features/search/searchSlice";
import { useDispatch } from "react-redux";

const CountryList = () => {
    const { data: countryList } = useCountryListClientQuery();
    const dispatch = useDispatch();

    const handleCountry = (country) => {
        dispatch(collectFilteredItem(country));
      };
    

    return (
        <>
            {countryList?.data?.map((item, i) => (
            <Link
              key={i}
              to="/filter-list"
              onClick={() => handleCountry(item?.slug)}
              className="py-3 lg:px-4 lg:py-[4px] rounded-[4px] bg-[#f4f4f4c9] hover:bg-slate-700 hover:text-white border hover:border-slate-400 transition-all duration-200 text-[20px] lg:text-[10px] text-[#27272A] font-inter font-bold flex justify-center items-center text-center"
            >
              {item?.name}
            </Link>
          ))}
        </>
    );
};

export default CountryList;