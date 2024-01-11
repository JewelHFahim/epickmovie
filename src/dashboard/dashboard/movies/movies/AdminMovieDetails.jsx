import { useParams } from "react-router-dom";
import { useAdminMovieDetailsQuery } from "../../../../redux/features/movies/movieApi";
import { useForm } from "react-hook-form";
import VedioPlayer from "../../../../components/video-player/VedioPlayer";

const AdminMovieDetails = () => {
  const { register } = useForm();
  const { id } = useParams();
  const { data: movieDetails } = useAdminMovieDetailsQuery(id);
  const details = movieDetails?.data;
  console.log(details);

  const inputStyle =
    "py-1 focus:outline-blue-500 border px-4 placeholder:text-sm";

  return (
    <main className="w-full bg-white p-10">

      
      <div className="flex justify-center">
        <h3 className="text-xl font-bold sm:text-2xl uppercase">
          Add New Movie
        </h3>
      </div>

      {/* ==================>> FORM DATA <<================= */}
      <div className="space-y-5 mb-12">


        {/* ==================>> MOVIE INFO <<============== */}
        <h2 className="text-[20px]">Movies Info</h2>
        <div className="px-8 bg-slate-100 p-5">
          <div className="flex flex-col">
            <label className="">Movies Title</label>
            <input
              type="text"
              readOnly
              defaultValue={details?.post_title}
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Generate Data</label>
            <input
              type="text"
              readOnly
              defaultValue={details?.additional_data[0]?.meta_value}
              className={inputStyle}
            />
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
            <input
              type="text"
              readOnly
              defaultValue={details?.additional_data[2]?.meta_value}
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Main Backdrops</label>
            <input
              type="text"
              readOnly
              defaultValue={details?.additional_data[3]?.meta_value}
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Backdrops</label>
            <textarea
              type="text"
              readOnly
              rows={5}
              defaultValue={details?.additional_data[4]?.meta_value}
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2 lg:w-1/2">
            <label className="">Video Trailer</label>
            <input
              type="text"
              readOnly
              defaultValue={details?.additional_data[5]?.meta_value}
              className={inputStyle}
            />
          </div>
        </div>

        {/* ==================>> IMDb Data <<=============== */}
        <h2 className="text-[20px]">IMDb.com data</h2>
        <div className="px-8 bg-slate-100 p-5 flex flex-col lg:flex-row items-center gap-5">
          <div className="flex flex-col">
            <label className="">Rating IMDb</label>
            <div className="flex items-center gap-2 ">
              <input
                type="text"
                readOnly
                defaultValue={details?.additional_data[6]?.meta_value}
                className={inputStyle}
              />
              <input
                type="text"
                readOnly
                defaultValue={details?.additional_data[11]?.meta_value}
                className={inputStyle}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="">Rated</label>
            <input
              type="text"
              readOnly
              defaultValue={details?.additional_data[7]?.meta_value}
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col">
            <label className="">Country</label>
            <input
              type="text"
              name="country"
              defaultValue={details?.additional_data[8]?.meta_value}
              className={inputStyle}
            />
          </div>
        </div>

        {/* ===============>> Themoviedb Data <<============ */}
        <h2 className="text-[20px]">Themoviedb.org data</h2>
        <div className="px-8 bg-slate-100 p-5 gap-5">
          <div className="flex flex-col">
            <label className="">ID TMDb</label>
            <input
              type="text"
              readOnly
              defaultValue={details?.additional_data[1]?.meta_value}
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Original title</label>
            <input
              type="text"
              readOnly
              defaultValue={details?.additional_data[9]?.meta_value}
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2 lg:w-1/2">
            <label className="">Tag line</label>
            <input
              type="text"
              readOnly
              defaultValue={details?.additional_data[13]?.meta_value}
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2 lg:w-1/2">
            <label className="">Release Date</label>
            <input
              type="date"
              readOnly
              defaultValue={details?.additional_data[10]?.meta_value}
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2 w-1/2">
            <label className="">Rating IMDb</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                name="rating_imdb"
                {...register("rating_imdb")}
                placeholder="Average / votes"
                className={`${inputStyle} w-1/2`}
              />
              <input
                type="text"
                name="rating_imdb"
                {...register("rating_imdb")}
                placeholder="Average / votes"
                className={`${inputStyle} w-1/2`}
              />
            </div>
          </div>

          <div className="flex flex-col mt-2 lg:w-1/2">
            <label className="">Runtime</label>
            <input
              type="text"
              readOnly
              defaultValue={details?.additional_data[14]?.meta_value}
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Cast</label>
            <textarea
              type="text"
              readOnly
              rows={5}
              defaultValue={details?.additional_data[15]?.meta_value}
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Director</label>
            <input
              type="text"
              readOnly
              defaultValue={details?.additional_data[16]?.meta_value}
              className={inputStyle}
            />
          </div>
        </div>
      </div>

      {/* =================>> VEDIO PLAYER<<================= */}
      <VedioPlayer />



    </main>
  );
};

export default AdminMovieDetails;
