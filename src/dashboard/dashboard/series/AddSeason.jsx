import { useForm } from "react-hook-form";

const AddSeasons = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const inputStyle =
    "py-1 focus:outline-blue-500 border px-4 placeholder:text-sm";

  return (
    <main className="w-full bg-white p-10">
      <div className="flex justify-center">
        <h3 className="text-xl font-bold sm:text-2xl uppercase">
          Add New Seasons
        </h3>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* ==================>> Tv Show INFO <<============== */}
        <h2 className="text-[20px]">Seasons Info</h2>
        <div className="px-8 bg-slate-100 p-5">
          <div className="flex flex-col">
            <label className="">Serie Name</label>
            <input
              type="text"
              name="title"
              {...register("title")}
              placeholder="Season Name"
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

export default AddSeasons;
