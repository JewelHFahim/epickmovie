import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  useAdminGenreListQuery,
  useCreateGenreMutation,
  useDeleteTermsMutation,
} from "../../../redux/features/movies/movieApi";
import PaginatedItems from "../../../utils/pagination-frontend/PaginatedItems";

const AddGenre = () => {
  const { data: genreList, isLoading } = useAdminGenreListQuery();
  const [createGenre] = useCreateGenreMutation();
  const [deleteTerms] = useDeleteTermsMutation();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    createGenre(data);
    toast.success("Create Genre");
    reset();
  };

  const datas = {
    items: genreList,
    isLoading: isLoading,
    thead: "Genre",
    deleteAction: deleteTerms,
  };


  return (
    <div className="flex w-full">
      <div className="bg-white w-[45%] border-r px-2  py-4">
        <div className="flex justify-center">
          <h3 className="text-xl font-bold sm:text-2xl uppercase">
            Add New Genre
          </h3>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 bg-slate-50 p-6 rounded-md"
        >
          <div className="flex flex-col">
            <label>Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="add new genre"
              className="border py-1 px-4 rounded-md bg-white focus:outline-blue-500"
            />
            <p className="text-xs text-gray-400">
              The name is how it appears on your site.
            </p>
            {errors.name && (
              <span className="text-red-400">Name is required</span>
            )}
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="bg-slate-700 px-5 py-2 text-sm font-medium rounded-md text-white hover:bg-slate-800"
            >
              Add New Genre
            </button>
          </div>
        </form>
      </div>

      {/* ===================>> LIST <<=================  */}
      <div className="mx-auto bg-white border w-[60%]  p-2">
        <div className="items-start justify-center md:flex">
          <div className="max-w-lg">
            <h3 className="text-xl font-bold sm:text-2xl uppercase">
              Genre List
            </h3>
          </div>
        </div>

        {/* ==============>> GENRE LIST <<=============== */}
        <PaginatedItems datas={datas} />

      </div>
    </div>
  );
};

export default AddGenre;
