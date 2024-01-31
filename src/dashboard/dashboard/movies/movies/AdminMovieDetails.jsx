import { useParams } from "react-router-dom";
import { useAdminMovieDetailsQuery } from "../../../../redux/features/movies/movieApi";
import VedioPlayer from "../../../../components/video-player/VedioPlayer";
import Loading from "../../../../utils/loading/Loading";

const AdminMovieDetails = () => {

  const { id } = useParams();
  const { data: movieDetails, isLoading } = useAdminMovieDetailsQuery(id);
  const details = movieDetails?.data;
  console.log(details)

  const inputStyle ="py-1 focus:outline-blue-500 border px-4 placeholder:text-sm border bg-white";

  return (
    <main className="w-full bg-white p-10">

      
      <div className="flex justify-center">
        <h3 className="text-xl font-bold sm:text-2xl uppercase">
          Add New Movie
        </h3>
      </div>

      {/* ==================>> FORM DATA <<================= */}

      {
        isLoading ? <Loading/> :
      
      <div className="space-y-5 mb-12">


        {/* ==================>> MOVIE INFO <<============== */}
        <h2 className="text-[20px]">Movies Info</h2>
        <div className="px-8 bg-slate-100 p-5">
          <div className="flex flex-col">
            <label className="">Movies Title</label>
            <p className={inputStyle}>{details?.post_title}</p>
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Generate Data</label>
            <p className={inputStyle}>{details?.additional_data[0]?.meta_value}</p>
          </div>

          <div className="flex flex-col items-start gap-2 mt-2 ">
            <label className="">Featured Title</label>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="" className="" />
              <p className="text-xs">
                Do you want to mark this title as a featured item?
              </p>
            </div>
          </div>

        </div>

        {/* =============>> Images and trailer <<=========== */}
        <h2 className="text-[20px]"> Images and trailer </h2>
        <div className="px-8 bg-slate-100 p-5">
          <div className="flex flex-col mt-2">
            <label className="">Poster</label>
            <p className={inputStyle}>{details?.additional_data[2]?.meta_value}</p>
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Main Backdrops</label>
            <p className={inputStyle}>{details?.additional_data[3]?.meta_value}</p>
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Backdrops</label>
            <p className={inputStyle} rows={5}>{details?.additional_data[4]?.meta_value}</p>
          </div>

          <div className="flex flex-col mt-2 lg:w-1/2">
            <label className="">Video Trailer</label>
            <p className={inputStyle}>{details?.additional_data[5]?.meta_value}</p>
          </div>
        </div>

        {/* ==================>> IMDb Data <<=============== */}
        <h2 className="text-[20px]">IMDb.com data</h2>
        <div className="px-8 bg-slate-100 p-5 flex flex-col lg:flex-row items-center gap-5">
          <div className="flex flex-col">
            <label className="">Rating IMDb</label>
            <div className="flex items-center gap-2 ">
              <p className={inputStyle}>{details?.additional_data[6]?.meta_value}</p>
              <p className={inputStyle}>Rating IMDb</p>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="">Rated</label>
            <p className={inputStyle}>Rated</p>
          </div>

          <div className="flex flex-col">
            <label className="">Country</label>
            <p className={inputStyle}>Country</p>
          </div>
        </div>

        {/* ===============>> Themoviedb Data <<============ */}
        <h2 className="text-[20px]">Themoviedb.org data</h2>
        <div className="px-8 bg-slate-100 p-5 gap-5">
          <div className="flex flex-col">
            <label className="">ID TMDb</label>
            <p className={inputStyle}>{details?.additional_data[1]?.meta_value}</p>
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Original title</label>
            <p className={inputStyle}>{details?.additional_data[9]?.meta_value}</p>
          </div>

          <div className="flex flex-col mt-2 lg:w-1/2">
            <label className="">Tag line</label>
            <p className={`${inputStyle} overflow-y-auto`}>{details?.additional_data[13]?.meta_value}</p>
          </div>

          <div className="flex flex-col mt-2 lg:w-1/2">
            <label className="">Release Date</label>
            <p className={inputStyle}>{details?.release_date}</p>
          </div>

          <div className="flex flex-col mt-2 w-1/2">
            <label className="">Rating IMDb</label>
            <div className="flex items-center gap-2">
              <p className={`${inputStyle} w-1/2`}>{details?.additional_data[9]?.meta_value}</p>
              <p className={`${inputStyle} w-1/2`}>{details?.additional_data[10]?.meta_value}</p>
            </div>
          </div>

          <div className="flex flex-col mt-2 lg:w-1/2">
            <label className="">Runtime</label>
            <p className={inputStyle}>{details?.additional_data[12]?.meta_value}</p>
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Cast</label>
            <p className={`${inputStyle} overflow-y-auto`} rows={5}>{details?.additional_data[13]?.meta_value}</p>
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Director</label>
            <p className={inputStyle}>{details?.additional_data[14]?.meta_value}</p>
          </div>
        </div>
      </div>
}
      {/* =================>> VEDIO PLAYER<<================= */}
      <VedioPlayer />



    </main>
  );
};

export default AdminMovieDetails;
