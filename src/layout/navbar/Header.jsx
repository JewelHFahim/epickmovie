import logo from "../../assets/logo.png";
import search from "../../assets//Search Icon.svg";

const Header = () => {
  
  return (
    <div className="w-full lg:h-[130px] flex flex-col lg:flex-row items-center justify-between py-2 lg:py-0 px-4 ">

      <div className=" w-[173px] h-[60px] lg:w-[200px] lg:h-[75px]">
        <img src={logo} alt="" className="w-full h-full object-cover" />
      </div>

      <div className=" w-[320px] lg:w-[453px] h-[42px] mt-[15px] lg:mt-0 flex items-center justify-between rounded-[9px] bg-[#18181B]">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full h-full bg-transparent border-0 focus:outline-none text-[12px] text-white px-5"
        />
        <img src={search} alt="" className="h-full cursor-pointer" />
      </div>

      <div></div>

    </div>
  );
};

export default Header;
