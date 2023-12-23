import Loading from "../../../../utils/loading/Loading";
import { MdEditSquare } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import {
  useAddEpisodeMutation,
  useEpisodeListQuery,
} from "../../../../redux/features/tv-show/tvShowApi";
import { Link, useParams } from "react-router-dom";
import { useDeleteEpisodeMutation } from "../../../../redux/features/trash/trashApi";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { FiTrash } from "react-icons/fi";

const EpisodeList = () => {
  const { id } = useParams();
  const { handleSubmit, register, reset } = useForm();
  const { data: episodeList, isLoading } = useEpisodeListQuery(id);
  const [deleteEpisode] = useDeleteEpisodeMutation();
  const [addEpisode] = useAddEpisodeMutation();

  console.log(episodeList);

  const handleDeleteEpisode = (epiId) => {
    console.log(epiId);
    deleteEpisode(epiId);
    toast.error("Deleted");
  };

  const onSubmit = (data) => {
    console.log(data);
    addEpisode({ data, id });
    toast.success("Added Episode");
    reset();
  };

  return (
    <div className="flex flex-col items-center w-full p-5">
      <div className="bg-white w-full py-4 bg">
        <div className="flex justify-center">
          <h3 className="text-xl font-bold sm:text-2xl uppercase">
            Add New Episode
          </h3>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 bg-slate-50 p-6 mx-2 rounded-md"
        >
          <div className="flex flex-col">
            <label>Episode Number</label>
            <input
              type="number"
              {...register("episode_no")}
              placeholder="Add Episode Number"
              className="border py-1 px-4 rounded-md bg-white focus:outline-blue-500"
            />
          </div>

          <div className="flex flex-col mt-2">
            <label>Episode URL</label>
            <input
              type="text"
              {...register("download_link")}
              placeholder="Add Episode URL"
              className="border py-1 px-4 rounded-md bg-white focus:outline-blue-500"
            />
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="bg-slate-700 px-5 py-1 rounded-md text-white hover:bg-slate-800"
            >
              Add New Episode
            </button>
          </div>
        </form>
      </div>

      <div className="mx-auto bg-white border w-full px-6 py-4">
        <div className="items-start justify-center md:flex">
          <div className="max-w-lg">
            <h3 className="text-xl font-bold sm:text-2xl uppercase">
              Episode List
            </h3>
          </div>
        </div>

        <div>
          <Link to="/admin/dashboard/episode-trash">
            <button className="flex items-center gap-1 text-red-700 hover:bg-red-50 px-2 py-[2px] rounded-lg">
              <FiTrash />
              Trash
            </button>
          </Link>
        </div>

        {/* ==============>> EPISODE LIST <<=============== */}
        <div className="mt-1 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6">Title</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {episodeList?.data?.map((item, idx) => (
                <tr key={idx} className="odd:bg-gray-50 even:bg-white">
                  <td className="px-6 py-4 font-medium flex items-center gap-x-2">
                    {item?.episode_name}
                  </td>

                  <td className="text-center px-6 ">
                    <button className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                      <MdEditSquare />
                    </button>
                    <button
                      onClick={() => handleDeleteEpisode(item?.id)}
                      className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EpisodeList;
