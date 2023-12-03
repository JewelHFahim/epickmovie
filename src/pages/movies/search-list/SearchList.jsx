import NavigationButton from "../../../utils/NavigationButton";
import HomeMovieList from "../mobie-list/HomeMovieList";

const SearchList = () => {
  return (
    <div>
      <div className="mt-2 mb-[32px]">
        <h1 className="text-[32px] font-[700] font-roboto text-white">
          Search Results for: Jawan
        </h1>
      </div>

      <HomeMovieList />

      {/* ==================>> Navigation <<=============*/}
      <div className="w-full h-[87px] bg-[#27272A] mt-[64px] flex justify-start items-center gap-[13px] px-[23px]">
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <NavigationButton>{item}</NavigationButton>
        ))}
        <NavigationButton>...</NavigationButton>
        <NavigationButton>140</NavigationButton>
        <NavigationButton>Next</NavigationButton>
      </div>

      
    </div>
  );
};

export default SearchList;
