import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAddEpisodeMutation } from "../../../../redux/features/tv-show/tvShowApi";
import toast from "react-hot-toast";

const AddEpisodeModal = ({id}) => {

  const [isOpen, setIsOpen] = useState(false);
  const { handleSubmit, register, reset } = useForm();
  const [addEpisode] = useAddEpisodeMutation();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onSubmit = (data) => {
      addEpisode({  data, id: parseInt(id) });
    toast.success("Added Episode");
    reset();
  };

  const inputStyle = "block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"

  return (
    <div className="relative flex justify-center">

      <button onClick={openModal} className="font-medium text-blue-600 hover:text-blue-800"> +Add Episode </button>

      {isOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true"> &#8203; </span>

            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">


              <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title"> Add New Episode </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-4">

              <label className="block mt-3" htmlFor="email">
                <input type="number" {...register("episode_no")} placeholder="Add Episode Number" className={inputStyle} />
              </label>

              <label className="block mt-3" htmlFor="email">
                <input type="text" {...register("download_link")} placeholder="Add Episode URL" className={inputStyle} />
              </label>

                <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                  <button onClick={closeModal} className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                    Cancel
                  </button>

                  <button type="submit" className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                    Add Episode
                  </button>
                </div>

              </form>
            </div>


          </div>
        </div>
      )}
      
    </div>
  );
};

export default AddEpisodeModal;
