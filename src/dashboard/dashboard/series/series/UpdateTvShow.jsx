import { useForm } from "react-hook-form";
import {
  useUpdateMovieMutation,
} from "../../../../redux/features/movies/movieApi";
import { useNavigate, useParams } from "react-router-dom";
import { useAdminTvShowDetailsQuery } from "../../../../redux/features/tv-show/tvShowApi";

const UpdateTvShow = () => {

  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: tvShowDetails } = useAdminTvShowDetailsQuery(id);
  const [updateMovie] = useUpdateMovieMutation();

  const onSubmit = (data) => {
    console.log(data);
    updateMovie({ data, id });
    reset();
    navigate("/admin/dashboard/movies-db");
  };

  const inputStyle =
    "py-1 focus:outline-blue-500 border px-4 placeholder:text-sm";

  return (
    <main className="w-full bg-white p-10">
      <div className="flex justify-center">
        <h3 className="text-xl font-bold sm:text-2xl uppercase">Edit Series</h3>
      </div>
      <hr />

      {/* =============>> FORM DATA <<=========== */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* ==================>> MOVIE INFO <<============== */}
        <h2 className="text-[20px]">Series Info</h2>

        <div className="px-8 bg-slate-100 p-5">
          <div className="flex flex-col">
            <label className="">Series Title</label>
            <input
              type="text"
              name="post_title"
              defaultValue={tvShowDetails?.data?.post_title}
              {...register("post_title")}
              placeholder="Series Title"
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-2">
            <label className="">Series Content</label>
            <textarea
              rows={6}
              type="text"
              name="post_content"
              {...register("post_content")}
              defaultValue={tvShowDetails?.data?.post_content}
              placeholder="Series Content"
              className={`${inputStyle} py-2`}
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
    </main>
  );
};

export default UpdateTvShow;
