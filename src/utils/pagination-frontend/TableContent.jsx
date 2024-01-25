import { FaTrashAlt } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import Loading from "../loading/Loading";
import { useDeleteTermsMutation } from "../../redux/features/movies/movieApi";
import toast from "react-hot-toast";

const TableContent = ({ currentItems, isLoading }) => {
    const [deleteTerms] = useDeleteTermsMutation();

    
  const handleDelete = (id) => {
    deleteTerms(id);
    toast.error("Deleted");
  };
  
  return (
    <div className="mt-8 shadow-sm border rounded-lg overflow-x-auto">
      <table className="w-full table-auto text-sm text-left">
        <thead className="text-gray-600 font-medium border-b">
          <tr>
            <th className="py-3 px-6">Quality</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>

        {isLoading ? (
          <Loading />
        ) : (
          <tbody className="divide-y">
            {currentItems?.map((item) => (
              <tr key={item?.id} className="odd:bg-gray-50 even:bg-white">
                <td className="px-6 py-4 font-medium flex items-center gap-x-2">
                  {item?.name}
                </td>
                <td className="text-center px-6 ">
                  <button className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                    <MdEditSquare />
                  </button>
                  <button
                      onClick={() => handleDelete(item?.id)}
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

  );
};

export default TableContent;
