import { useMovieListQuery } from "../../../redux/features/movies/movieApi";
import PaginationButton from "../../../utils/PaginationButton";

const Category = () => {

  const {data: movieList } = useMovieListQuery();

  console.log(movieList?.data?.data)

  // const hollywood = movieList?.data?.data?.filter(movie => movie?.)

  return (
    <div className="px-4">
      {/* ==================>> Searched Category <<=============*/}
      <div className="mt-2 mb-[32px] text-center lg:text-left">
        <h1 className="text-[18px] lg:text-[32px] font-[700] font-roboto text-white">
          Category: ACTION
        </h1>
        <p className="text-[11px] lg:text-[12px] fopt-[700] text-[#AEABAB] font-roboto mt-3 text-left">
          Action is a wide-open genre and term, and we endeavored to include
          something from every era, style, and movement of action movies. We
          have the classics (Die Hard, The French Connection), modern fan
          favorites (Hardcore Henry, John Wick), superhero blockbusters (Captain
          America: The Winter Soldier), and plenty from the macho ’80s
          (Commando, First Blood). Not to mention some action genre crossovers:
          sci-fi (Equilibrium), horror (They Live), and, of course, comedy
          (Beverly Hills Cop).
        </p>
      </div>

      {/* ==================>> Movie List <<=============*/}
      {/* <HomeMovieList /> */}
      

      {/* ==================>> Navigation <<=============*/}
      <div className="w-full h-[87px] bg-[#27272A] mt-[64px] flex justify-start items-center gap-[13px] px-[23px]">
        {[1, 2, 3].map((item, i) => (
          <PaginationButton key={i}>{item}</PaginationButton>
        ))}
        <PaginationButton>...</PaginationButton>
        <PaginationButton>140</PaginationButton>
        <PaginationButton>Next</PaginationButton>
      </div>
    </div>
  );
};

export default Category;
