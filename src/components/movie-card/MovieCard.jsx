import { Link } from "react-router-dom";

const MovieCard = ({ item, redirect }) => {

  console.log(redirect)

  return (
    <div className=" bg-gradient-to-t from-[#ff1818] to-[#fdd506] lg:bg-none w-[180px] min-h-[100%]  lg:w-[205px] lg:h-[460px] p-[1.5px] rounded-[10px]">
      <Link
        to={`/movie/${item?.id}`}
        className="w-full h-full rounded-[10px] flex flex-col  items-center bg-[#27272A] overflow-hidden"
      >
        <img
          src={item?.poster_image_url}
          alt=""
          className="w-full  rounded-tr-[10px] rounded-tl-[10px]"
        />
        <p className="text-center text-[14px] text-white font-[700] p-2 font-alef">
          {item?.post_title}
        </p>
      </Link>
    </div>
  );
};

export default MovieCard;
