import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { MdEditSquare } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import Loading from "../../../utils/loading/Loading";
import { useCreatePrintQualityMutation, useDeleteTermsMutation, usePrintQualityListQuery } from "../../../redux/features/movies/movieApi";

const PrintQuality = () => {
    const { handleSubmit, register, formState: { errors }, reset} = useForm()

      const [createPrintQuality] = useCreatePrintQualityMutation();
      const { data: printQualityList, isLoading } = usePrintQualityListQuery();  
      const [deleteTerms] = useDeleteTermsMutation();


      console.log(printQualityList)

    const onSubmitPrint = (data) => {
        console.log(data);
        createPrintQuality(data);
        toast.success("Create Quality");
        reset();
      };


      const handleDelete = (id) => {
        deleteTerms(id);
        toast.error("Deleted")
      }
    
    return (
        <div>
            
      {/* ================>> PRINT QUALITY <<==============*/}
      <div className="flex">
        <div className="bg-white w-[45%] border-r px-2  py-4">
          <div className="flex justify-center">
            <h3 className="text-xl font-bold sm:text-2xl uppercase">
              Add PRINT Quality
            </h3>
          </div>

          <form
            onSubmit={handleSubmit(onSubmitPrint)}
            className="mt-6 bg-slate-50 p-6 rounded-md"
          >
            <div className="flex flex-col">
              <label>Print Quality Name</label>
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

          {/* ==============>> GENRE LIST <<=============== */}
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
                  {printQualityList?.data?.map((item) => (
                    <tr key={item?.id} className="odd:bg-gray-50 even:bg-white">
                      <td className="px-6 py-4 font-medium flex items-center gap-x-2">
                        {item?.name}
                      </td>
                      <td className="text-center px-6 ">
                        <button className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                          <MdEditSquare />
                        </button>
                        <button
                          onClick={()=>handleDelete(item?.id)}
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
        </div>
    );
};

export default PrintQuality;