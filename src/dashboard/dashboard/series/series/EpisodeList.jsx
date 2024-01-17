import { FaTrashAlt } from "react-icons/fa";
import { useEpisodeListQuery } from "../../../../redux/features/tv-show/tvShowApi";
import { Link, useParams } from "react-router-dom";
import { useDeleteEpisodeMutation } from "../../../../redux/features/trash/trashApi";
import toast from "react-hot-toast";
import { FiTrash } from "react-icons/fi";
import AddEpisodeModal from "../episode/AddEpisodeModal";

const EpisodeList = () => {
  const { id } = useParams();
  const { data: episodeList } = useEpisodeListQuery(id);
  const [deleteEpisode] = useDeleteEpisodeMutation();

  console.log(episodeList);

  const handleDeleteEpisode = (epiId) => {
    const shouldDelete = window.confirm("Are you sure want delete this Episode?");
    if (shouldDelete) {
      deleteEpisode(epiId);
      toast.error("Deleted");
    } else {
      console.log("Deletion cancle by user");
    }
  };

  return (
    <div className="flex flex-col items-center w-full px-5 py-5 lg:px-[50px] lg:py-[50px]">

      <div className="flex justify-end w-full py-1">
        <AddEpisodeModal id={id} />
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
                <th className="py-3">URL</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {episodeList?.data?.map((item, idx) => (
                <tr key={idx} className="odd:bg-gray-50 even:bg-white">

                  <td className="px-6 py-4 font-medium flex items-center gap-x-2"> {item?.episode_name}</td>

                  <td className="text-blue-700"> {item?.link_uuid} </td>

                  <td className="text-center px-6 ">
                    <button onClick={() => handleDeleteEpisode(item?.id)}
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
