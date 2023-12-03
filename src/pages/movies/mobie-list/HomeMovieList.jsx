import { Link } from "react-router-dom";
import jawan from "../../../assets/jawan.png";

const HomeMovieList = () => {
  return (
    <div>
      {/* ==================>> Movies <<==================*/}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-[17px] lg:gap-[25px] my-[18px]">

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item, i) => (
          <div key={i} className=" bg-gradient-to-t from-[#ff1818] to-[#fdd506] lg:bg-none w-[180px] h-[390px] lg:w-[205px] lg:h-[460px] p-[1.5px] rounded-[10px]">
            <Link
              to={`/movie/${item}`}
              className="w-full h-full rounded-[10px] flex flex-col  items-center bg-[#27272A]"
            >
              <img src={jawan} alt="" className="w-full h-[267px]" />
              <p className="text-center text-[14px] text-white font-[700] p-2 font-alef">
                Download Jawan (2023) Extended Cut Hindi Movie 480p | 720p |
                1080p | 2160p WEB-DL ESub
              </p>
            </Link>
          </div>
        ))}

      </div>
    </div>
  );
};

export default HomeMovieList;
