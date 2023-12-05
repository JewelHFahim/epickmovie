import PaginationButton from "../../../utils/PaginationButton";
import HomeMovieList from "../mobie-list/HomeMovieList";

const SearchList = () => {

  return (
    <div className="px-2">

      <div className="mt-2 mb-[32px]">
        <h1 className="text-[12px] lg:text-[32px] font-[700] font-roboto text-white">
          Search Results for: Jawan
        </h1>
      </div>

      <HomeMovieList />

      {/* ==================>> Navigation <<=============*/}
      <div className="w-full h-[47px] lg:h-[87px] bg-[#343437] mt-[64px] flex justify-start items-center gap-[8px] lg:gap-[13px] px-[23px]">

        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <PaginationButton key={i}>{item}</PaginationButton>
        ))}
        <PaginationButton>...</PaginationButton>
        <PaginationButton>140</PaginationButton>
        <PaginationButton>Next</PaginationButton>
      </div>

      
    </div>
  );
};

export default SearchList;
