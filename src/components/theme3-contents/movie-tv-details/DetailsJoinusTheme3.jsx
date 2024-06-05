import { Link } from "react-router-dom";
import telegram from "../../../assets/join tg.png";
import facebook from "../../../assets/join fb.png";
import { useSiteConfig } from "../../../utils/configHooks/ConfigHooks";

const DetailsJoinusTheme3 = () => {
  const { telegramLink, faceBookLink } = useSiteConfig();

  return (
    <div className="hidden  border-[4px] lg:flex items-start justify-evenly border-red-700 mt-8 py-10">
      {/* Telegram */}

      <Link
        to={telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col justify-center items-center gap-y-2"
      >
        <h2 className="text-[40px] lg:text-[25px] text-center text-orange-600 font-medium">
          JOIN US ON TELEGRAM
        </h2>
        <img src={telegram} alt="" className="w-[220px] h-[90px]" />
      </Link>

      {/* Facebook */}
      <Link
        to={faceBookLink}
        target="_blank"
        className="flex flex-col justify-center text-center items-center gap-y-2"
      >
        <h2 className="text-[40px] lg:text-[25px] text-orange-600 font-medium">
          JOIN US ON FACEBOOK
        </h2>
        <img src={facebook} alt="" className="w-[220px] h-[80px]" />
      </Link>
    </div>
  );
};

export default DetailsJoinusTheme3;
