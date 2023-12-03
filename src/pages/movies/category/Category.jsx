import NavigationButton from "../../../utils/NavigationButton";
import HomeMovieList from "../mobie-list/HomeMovieList";

const Category = () => {
  return (
    <div>
      
      <div className="mt-2 mb-[32px]">
        <h1 className="text-[32px] font-[700] font-roboto text-white">
          Category: ACTION
        </h1>
        <p className="text-[12px] fopt-[700] text-[#AEABAB] font-roboto mt-3">
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

export default Category;
