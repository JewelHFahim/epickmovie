import SubMenuButton from "../../utils/SubMenuButton";
import HomeMovieList from "../movies/mobie-list/HomeMovieList";
import NavigationButton from "../../utils/NavigationButton";

const Home = () => {
  const subMenus = [
    {
      title: "Join Telegram",
    },
    {
      title: "[18+] Movies",
    },
    {
      title: "Bollywood",
    },
    {
      title: "Hollywood",
    },
    {
      title: "Dual Audio",
    },
    {
      title: "Tamil",
    },
    {
      title: "Telegu",
    },
    {
      title: "Korean Collection",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">

      {/* ==================>> Submenus <<================*/}
      <div className="hidden lg:flex items-center gap-[25px] mt-[6px]">
        {subMenus.map((menu, i) => (
          <SubMenuButton key={i}>{menu.title}</SubMenuButton>
        ))}
      </div>

      {/* ==================>> Domains <<=================*/}
      <div className="w-[90%] h-[28px] hidden lg:flex justify-center items-center bg-[#5C1EC2] mt-[8px]">
        <p className="text-[14px] font-[600] flex items-center gap-2 text-white">
          Our All Domains are
          <span className="text-[#F00]">Epickmovies.fun</span> |
          <span className="text-[#FFD600]">EpickMovies.link</span> |
          <span className="text-[#42FF00]">BollyFlix.shop</span>|
          <span className="text-[#69C9FF]"> movieshub.pro</span> |
          <span className="text-[#F00]">mlwbd.lat</span> |
          <span className="text-[#FFD600]">mlwbd.team</span>|
          <span className="text-[#42FF00]">mkvcinema.blog</span> |
          <span className="text-[#FFA113]">10bestmovies.com</span>
        </p>
      </div>

      <HomeMovieList />

      {/* ==================>> Navigation <<=============*/}
      <div className="w-full h-[47px] lg:h-[87px] bg-[#343437] mt-[64px] flex justify-start items-center gap-[8px] lg:gap-[13px] px-[23px]">

        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <NavigationButton key={i}>{item}</NavigationButton>
        ))}
        <NavigationButton>...</NavigationButton>
        <NavigationButton>140</NavigationButton>
        <NavigationButton>Next</NavigationButton>
      </div>
      
    </div>
  );
};

export default Home;
