import telegraqm from "../assets/telegram.svg";
import { useJoinTelegramUserQuery } from "../redux/features/settings/settingApi";

const JoinTelegramBtn = () => {
  const { data: joinTelegram } = useJoinTelegramUserQuery();

  return (
    <div className="flex justify-center mt-[21px] lg:mt-[36px]">
      <a
        href={joinTelegram?.data}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center gap-2 w-[211px] h-[43px] transition duration-200 hover:bg-gradient-to-t from-[#4fbf98] to-[#39add3] bg-[#FCD8FF] rounded-[9px]"
      >
        <img src={telegraqm} alt="" className="w-[22px] h-[22px]" />
        <p className="text-[15px] text-black font-[700] font-roboto">
          Join Our Telegram
        </p>
      </a>
    </div>
  );
};

export default JoinTelegramBtn;
