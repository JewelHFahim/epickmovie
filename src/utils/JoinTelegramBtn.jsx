import telegraqm from "../assets/telegram.svg";


const JoinTelegramBtn = () => {
  return (
    <div className="flex justify-center mt-[21px] lg:mt-[36px]">
      <button className="flex justify-center items-center gap-2 border w-[211px] h-[43px] bg-[#FCD8FF] rounded-[9px]">
        <img src={telegraqm} alt="" className="w-[22px] h-[22px]" />
        <p className="text-[15px] text-black font-[700] font-roboto">
          Join Our Telegram
        </p>
      </button>
    </div>
  );
};

export default JoinTelegramBtn;
