import SubMenuButton from "../../utils/SubMenuButton";
import jawan from "../../assets/jawan.png";

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

  const movies = [
    {
      name: "Download Jawan (2023) Extended Cut Hindi Movie 480p | 720p | 1080p | 2160p WEB-DL ESub",
      img: jawan,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center gap-[34px] mt-[6px]">
        {subMenus.map((menu, i) => (
          <SubMenuButton>{menu.title}</SubMenuButton>
        ))}
      </div>

      <div className="w-full h-[28px] flex justify-center items-center bg-[#5C1EC2] mt-[8px]">
        <p className="text-[14px] font-[600] flex items-center gap-4 text-white">
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

      {/* Movies */}
      <div className="grid grid-cols-5 gap-[25px] my-[18px]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, i) => (
          <div
            key={i}
            className="w-[205px] h-[460px] rounded-[10px] flex flex-col  items-center bg-[#27272A]"
          >
            <img src={jawan} alt="" className="w-full h-[322px]" />
            <p className="text-center text-[14px] text-white font-[700]">
              Download Jawan (2023) Extended Cut Hindi Movie 480p | 720p | 1080p
              | 2160p WEB-DL ESub
            </p>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="w-full h-[87px] bg-[#27272A] mt-[64px] flex justify-start items-center gap-[13px] px-[23px]">
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <div
            key={i}
            className="flex justify-center items-center bg-[#494949] rounded-[6px] p-5 w-[8px] h-[15px] text-[12px] font-[600] text-white"
          >
            {item}
          </div>
        ))}

        <div className="flex justify-center items-center bg-[#494949] rounded-[6px] p-5 w-[8px] h-[15px] text-[12px] font-[600] text-white">
          ...
        </div>

        <div className="flex justify-center items-center bg-[#494949] rounded-[6px] p-5 w-[8px] h-[15px] text-[12px] font-[600] text-white">
          Next
        </div>
      </div>

      
    </div>
  );
};

export default Home;
