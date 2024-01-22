import { useForm } from "react-hook-form";

const AddSeries = () => {
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
          Add New Series
        </h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* ==================>> Tv Show INFO <<============== */}
        <h2 className="text-[20px]">Tv Show Info</h2>
        <div className="px-8 bg-slate-100 p-5">
          <div className="flex flex-col">
            <label className="">Series Title</label>
            <input
              type="text"
              name="title"
              {...register("title")}
              placeholder="Movie Title"
              className={inputStyle}
            />
          </div>

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
              name="main_backdrops"
              {...register("main_backdrops")}
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

          <div className="flex flex-col lg:w-1/2 mt-2">
            <label className="">Video Trailer</label>
            <input
              type="text"
              name="video_trailer"
              {...register("video_trailer")}
              placeholder="Add id Youtube video"
              className={inputStyle}
            />
          </div>
        </div>

        {/* ==================>> More Data <<================== */}
        <h2 className="text-[20px]">More Data</h2>
        <div className="px-8 bg-slate-100 p-5 gap-5">
          <div className="flex flex-col mt-2">
            <label className="">Original Name</label>
            <input
              type="text"
              name="original_title"
              {...register("original_title")}
              placeholder="Original title"
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2 lg:w-1/2">
            <label className="">First Air Date</label>
            <input
              type="date"
              name="first_air_date"
              {...register("first_air_date")}
              placeholder="Tag line"
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2 lg:w-1/2">
            <label className="">Last Air Date</label>
            <input
              type="date"
              name="last_air_date"
              {...register("last_air_date")}
              placeholder="Tag line"
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2 lg:w-1/2">
            <label className="">Content Total Posted</label>
            <div className="flex items-center gap-5 w-full">
              <input
                type="text"
                name="content_total1"
                {...register("content_total1")}
                placeholder="Seasons / Episodes"
                className={`${inputStyle} w-1/2`}
              />

              <input
                type="text"
                name="content_total2"
                {...register("content_total2")}
                placeholder="Seasons / Episodes"
                className={`${inputStyle} w-1/2`}
              />
            </div>
          </div>

          <div className="flex flex-col mt-2 lg:w-1/2">
            <label className="">Rating TMDb</label>
            <div className="flex items-center gap-5 w-full">
              <input
                type="text"
                name="rating_timd1"
                {...register("rating_timd1")}
                placeholder="Rating TMDb"
                className={`${inputStyle} w-1/2`}
              />

              <input
                type="text"
                name="rating_timd2"
                {...register("rating_timd2")}
                placeholder="Rating TMDb"
                className={`${inputStyle} w-1/2`}
              />
            </div>
          </div>

          <div className="flex flex-col mt-2 lg:w-1/2">
            <label className="">Episode Runtime</label>
            <input
              type="text"
              name="episode_runtime"
              {...register("episode_runtime")}
              placeholder="episode runtime"
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
            <label className="">Creator</label>
            <input
              type="text"
              name="creator"
              {...register("creator")}
              placeholder="Creator"
              className={inputStyle}
            />
          </div>
        </div>

        {/* ==================>> Submit Btn <<================= */}
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="px-32 py-2 rounded-lg text-white uppercase font-medium bg-slate-700 hover:bg-slate-800 transform duration-150"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddSeries;
