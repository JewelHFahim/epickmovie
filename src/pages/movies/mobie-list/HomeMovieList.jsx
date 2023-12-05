import { Link } from "react-router-dom";
import { useMovieListQuery } from "../../../redux/features/movies/movieApi";
import Test from "../../../components/pagination/Test";

const HomeMovieList = ({ perPgaeMovie }) => {

  const { data: allMovies } = useMovieListQuery();
  console.log(allMovies);

  return (
    <div>
      
      {/* ==================>> Movies <<==================*/}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-[17px] lg:gap-[25px] my-[18px]">
        {perPgaeMovie?.data?.data?.map((item) => (
          <div
            key={item?.ID}
            className=" bg-gradient-to-t from-[#ff1818] to-[#fdd506] lg:bg-none w-[180px] h-[390px] lg:w-[205px] lg:h-[460px] p-[1.5px] rounded-[10px]"
          >
            <Link
              to={`/movie/${item?.ID}`}
              className="w-full h-full rounded-[10px] flex flex-col  items-center bg-[#27272A]"
            >
              <img
                src={item?.poster_image_url}
                alt=""
                className="w-full h-[267px]"
              />
              <p className="text-center text-[14px] text-white font-[700] p-2 font-alef">
                {item?.post_name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeMovieList;
