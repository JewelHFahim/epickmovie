
import { MdEditSquare } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loading from "../../../utils/loading/Loading";
import { useCreateAudioMutation, useGetAudioListQuery } from "../../../redux/features/movies/movieApi";

const AddAudio = () => {
  const { data: audioList, isLoading } = useGetAudioListQuery();
  const [createAudio] = useCreateAudioMutation();
  

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    createAudio(data);
    toast.success("Create Audio");
    reset();
  };

  return (
    <div className="flex w-full">
      <div className="bg-white w-[45%] border-r px-2  py-4">
        <div className="flex justify-center">
          <h3 className="text-xl font-bold sm:text-2xl uppercase">
            Add New Audio
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
              Add New Audio
            </button>
          </div>
        </form>
      </div>

      {/* ===================>> LIST <<=================  */}
      <div className="mx-auto bg-white border w-[60%]  p-2">
        <div className="items-start justify-center md:flex">
          <div className="max-w-lg">
            <h3 className="text-xl font-bold sm:text-2xl uppercase">
              Audio List
            </h3>
          </div>
        </div>

        {/* ==============>> GENRE LIST <<=============== */}
        <div className="mt-8 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6">Title</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            {isLoading ? (
              <Loading />
            ) : (
              <tbody className="divide-y">
                {audioList?.data?.map((item, idx) => (
                  <tr key={idx} className="odd:bg-gray-50 even:bg-white">
                    <td className="px-6 py-4 font-medium flex items-center gap-x-2">
                      {item?.name}
                    </td>
                    <td className="text-center px-6 ">
                      <button className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                        <MdEditSquare />
                      </button>
                      <button
                        
                        className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddAudio;
