import { usePerPgaeMovieQuery } from "../../redux/features/movies/movieApi";
import { useState } from "react";
import { ad_url } from "../../config/config";

const LatestMoviesCard = () => {
  const [initialVisite, setInitialVisite] = useState(1);
  const { data: movieList } = usePerPgaeMovieQuery(1);

  return (
    <div className="bg-[#27272A] p-2 flex flex-col gap-y-3">
      {(movieList?.data?.data)?.slice(0,5)?.map((item, i) => (
        <button key={i} 
          onClick={() =>{
  
            if (initialVisite > 1) {
              window.open(item?.post_type === "movies" ? `/movie/${item?.id}/${item?.post_title}` : `/series/${item?.id}/${item?.post_title}`, "_blank");
            } else {
              window.open(ad_url, "_blank")
            }
            setTimeout(() => {
              setInitialVisite(1);
            }, 50000);
            
            setInitialVisite(initialVisite + 1);
          }
           }
          className="flex items-center gap-x-3 bg-[#202020] p-1 shadow-md">
            
          <div className="bg-gradient-to-t from-[#ff1818] to-[#fdd506] p-[2px] w-[55px] h-[70px]">
            <img src={item?.poster_image_url} alt="" className="w-full h-full object-cover"/>
          </div>

          <h3 className="text-[#D6D6D6D6] text-opacity-[60%] font-aclonica w-[80%] text-[11px]">
            {item?.post_title}
          </h3>
        </button>
      ))}
    </div>
  );
};

export default LatestMoviesCard;
