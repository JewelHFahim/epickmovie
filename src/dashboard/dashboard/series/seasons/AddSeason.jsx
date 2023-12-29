import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  useAddSeasonMutation,
  useAdminTvShowDetailsQuery,
} from "../../../../redux/features/tv-show/tvShowApi";
import toast from "react-hot-toast";

const AddSeasons = () => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const { data: tvShowDetails } = useAdminTvShowDetailsQuery(id);
  const [addSeason] = useAddSeasonMutation();
  const navigate = useNavigate();

  const details = tvShowDetails?.data;

  const onSubmit = (abc) => {
    const data = { season_no: parseInt(abc.season_no) };
    const res = addSeason({ data, id });
    console.log(res);
    reset();
    toast.success("Season Added");
    navigate(`/admin/dashboard/tvshow-details/${id}`)
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
          <div className="flex flex-col mt-2">
            <label className="">Serie Name</label>
            <input
              type="text"
              name="title"
              readOnly
              placeholder="Season Name"
              defaultValue={details?.post_title}
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Season No</label>
            <input
              type="number"
              name="season_no"
              {...register("season_no")}
              placeholder="Season No"
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
