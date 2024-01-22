import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { singleMovieImport } from "../../../redux/features/movies/movieSlice";
import { singleTvShowImport } from "../../../redux/features/tv-show/tvShowSlice";

const ImportMOdal = ({ toggleState }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const [selectedValue, setSelectedValue] = useState("TMDB");
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const ids =
      selectedValue === "imdb"
        ? { imdb_id: (data.dataId) }
        : { tmdb_id: parseInt(data.dataId) };
    toggleState === "movie"
      ? dispatch(singleMovieImport(ids))
      : dispatch(singleTvShowImport(ids));
    reset();
  };

  return (
    <div className="relative flex justify-center">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-[2px] text-sm rounded-[4px] border border-slate-800 hover:bg-slate-800 hover:text-white transition duration-200"
      >
        Import By TMDB/IMDB
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-10 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 transition-opacity"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              onSubmit={handleSubmit(onSubmit)}
              className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
            >
              <div className="flex justify-center">
                <select
                  value={selectedValue}
                  onChange={handleSelectChange}
                  className="border w-[100px] h-[30px] border-slate-500 px-4 py-1 rounded-s-md  focus:outline-blue-500"
                >
                  <option value="tmdb">TMDB</option>
                  <option value="imdb">IMDB</option>
                </select>

                <form>
                  <div className="flex items-center w-full">
                    <input
                      {...register("dataId")}
                      type="text"
                      placeholder="TMDB/IMDB ID"
                      className="w-full h-[30px] px-2 py-1 rounded-e-md focus:outline-none border border-slate-500 border-r-0 placeholder:text-sm"
                    />
                  </div>

                  <div className="mt-5 flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-1 text-sm border text-white rounded-[4px]"
                    >
                      Import
                    </button>
                  </div>
                </form>
              </div>
              <div className="">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-2xl text-white"
                >
                  <IoCloseCircleOutline />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImportMOdal;
