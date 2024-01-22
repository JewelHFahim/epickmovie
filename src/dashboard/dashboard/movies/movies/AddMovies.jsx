import { useForm } from "react-hook-form";
import VedioPlayer from "../../../../components/video-player/VedioPlayer";

const AddMovies = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = () => {
    reset();
  };

  const inputStyle =
    "py-1 focus:outline-blue-500 border px-4 placeholder:text-sm";

  return (
    <main className="w-full bg-white p-10">
      <div className="flex justify-center">
        <h3 className="text-xl font-bold sm:text-2xl uppercase">
          Add New Movie
        </h3>
      </div>

      {/* =============>> FORM DATA <<=========== */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* ==================>> MOVIE INFO <<============== */}
        <h2 className="text-[20px]">Movies Info</h2>
        <div className="px-8 bg-slate-100 p-5">
          <div className="flex flex-col">
            <label className="">Movies Title</label>
            <input
              type="text"
              name="title"
              {...register("title")}
              placeholder="Movie Title"
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Generate Data</label>
            <input
              type="text"
              name="title"
              {...register("title")}
              placeholder="Generate data from imdb.com"
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

        {/* ==================>> Images and trailer <<============== */}
        <h2 className="text-[20px]"> Images and trailer </h2>
        <div className="px-8 bg-slate-100 p-5">
          <div className="flex flex-col mt-2">
            <label className="">Poster</label>
            <input
              type="text"
              name="poster"
              {...register("poster")}
              placeholder="Add Img URL"
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Main Backdrops</label>
            <input
              type="text"
              name="title"
              {...register("title")}
              placeholder="Add url image"
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Backdrops</label>
            <textarea
              type="text"
              name="backdrops"
              {...register("backdrops")}
              placeholder="Place each image url below another"
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2 lg:w-1/2">
            <label className="">Video Trailer</label>
            <input
              type="text"
              name="title"
              {...register("title")}
              placeholder="Add id Youtube video"
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
                name="rating_imdb"
                {...register("rating_imdb")}
                placeholder="Average / votes"
                className={inputStyle}
              />
              <input
                type="text"
                name="rating_imdb"
                {...register("rating_imdb")}
                placeholder="Average / votes"
                className={inputStyle}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="">Rated</label>
            <input
              type="text"
              name="rated"
              {...register("rated")}
              placeholder="Rated"
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col">
            <label className="">Country</label>
            <input
              type="text"
              name="country"
              {...register("country")}
              placeholder="Country"
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
              name="id_imdb"
              {...register("id_imdb")}
              placeholder="ID TMDb"
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Original title</label>
            <input
              type="text"
              name="original_title"
              {...register("original_title")}
              placeholder="Original title"
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2 lg:w-1/2">
            <label className="">Tag line</label>
            <input
              type="text"
              name="tag_line"
              {...register("tag_line")}
              placeholder="Tag line"
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2 lg:w-1/2">
            <label className="">Release Date</label>
            <input
              type="date"
              name="release_date"
              {...register("release_date")}
              placeholder="Tag line"
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
              name="runtime"
              {...register("runtime")}
              placeholder="Runtime"
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Cast</label>
            <textarea
              type="text"
              name="cast"
              {...register("cast")}
              placeholder="Cast"
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Director</label>
            <input
              type="text"
              name="director"
              {...register("director")}
              placeholder="Director"
              className={inputStyle}
            />
          </div>
        </div>

        {/* ================>> Submit Btn <<================= */}
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="px-32 py-2 rounded-lg text-white uppercase font-medium bg-slate-700 hover:bg-slate-800 transform duration-150"
          >
            Submit
          </button>
        </div>
      </form>

      {/* =============>> VEDIO PLAYER<<=========== */}
      <VedioPlayer />
    </main>
  );
};

export default AddMovies;
