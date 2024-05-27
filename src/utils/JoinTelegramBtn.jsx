import { Link } from "react-router-dom";
import telegraqm from "../assets/telegram.svg";
import { useSiteConfig } from "../utils/configHooks/ConfigHooks";

const JoinTelegramBtn = () => {

  const {telegramLink} = useSiteConfig();

  return (
    <div className="flex justify-center mt-[50px] lg:mt-[36px]">
      <Link
        to={telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center gap-4 lg:gap-2 w-[60%] h-[90px] lg:w-[211px] lg:h-[43px] transition-transform ease-in-out duration-200 hover:bg-gradient-to-t from-[#4fbf98] to-[#39add3] bg-[#FCD8FF] rounded-[9px] text-black hover:text-white"
      >
        <img src={telegraqm} alt="" className="w-[50px] h-[50px] lg:w-[22px] lg:h-[22px]" />
        <p className="text-[30px] lg:text-[15px]  hover:text-white font-[700] font-roboto">
          Join Our Telegram
        </p>
      </Link>
    </div>
  );
};

export default JoinTelegramBtn;
