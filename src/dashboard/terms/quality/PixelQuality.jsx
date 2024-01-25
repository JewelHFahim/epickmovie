import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  useCreatePixelQualityMutation,
  useDeleteTermsMutation,
  usePixelQualityListQuery,
} from "../../../redux/features/movies/movieApi";
import PaginatedItems from "../../../utils/pagination-frontend/PaginatedItems";

const PixelQuality = () => {
  const { data: pixelQualityList, isLoading } = usePixelQualityListQuery();
  const [createPixelQuality] = useCreatePixelQualityMutation();
  const [deleteTerms] = useDeleteTermsMutation();

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    createPixelQuality(data);
    toast.success("Create Quality");
    reset();
  };



  const datas = {
    items: pixelQualityList,
    isLoading: isLoading,
    thead: "Quality",
    deleteAction: deleteTerms,
  };


  return (
    <div className="flex flex-col w-full">
      {/* ================>> PIXEL QUALITY <<==============*/}
      <div className="flex">
        <div className="bg-white w-[45%] border-r px-2  py-4">
          <div className="flex justify-center">
            <h3 className="text-xl font-bold sm:text-2xl uppercase">
              Add Pixel Quality
            </h3>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 bg-slate-50 p-6 rounded-md"
          >
            <div className="flex flex-col">
              <label>Pixel Quality Name</label>
              <input
                type="text"
                placeholder="Add Pixel quality"
                {...register("name", { required: true })}
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
                Add Quality
              </button>
            </div>
          </form>
        </div>

        <div className="mx-auto bg-white border w-[60%]  p-2">
          <div className="items-start justify-center md:flex">
            <div className="max-w-lg">
              <h3 className="text-xl font-bold sm:text-2xl uppercase">
                Quality List
              </h3>
            </div>
          </div>

          {/* ==============>> QUALITY LIST <<=============== */}
          <PaginatedItems items={pixelQualityList} isLoading={isLoading} datas={datas}/>
        </div>
      </div>
    </div>
  );
};

export default PixelQuality;
