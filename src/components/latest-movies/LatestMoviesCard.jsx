import { Link } from "react-router-dom";

const LatestMoviesCard = () => {
  return (
    <div className="bg-[#27272A] p-2 flex flex-col gap-y-3">
      {Array.from({ length: 5 }).map((item, i) => (
        <Link
          to=""
          key={i}
          className="flex items-center gap-x-3 bg-[#202020] p-1 shadow-md"
        >
          <div className="bg-gradient-to-t from-[#ff1818] to-[#fdd506] p-[2px] w-[55px] h-[70px]">
            <img
              src="https://image.tmdb.org/t/p/w300/9v7e4WvlEY4JnO62OEuw3zllmAP.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-[#D6D6D6D6] text-opacity-[60%] font-aclonica w-[80%] text-[11px]">
            Download Har Har Mahadev (2022) Dual Audio [ Hindi-Marathi ] WEBRIP
            480p, 720p & 1080p | Gdrive
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default LatestMoviesCard;
