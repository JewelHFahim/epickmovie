import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  useCreateAudioMutation,
  useDeleteTermsMutation,
  useGetAudioListQuery,
} from "../../../redux/features/movies/movieApi";
import PaginatedItems from "../../../utils/pagination-frontend/PaginatedItems";
import RetryCountDown from "../../../utils/count-down/CountDown";
import { adminHeader, base_url } from "../../../config/config";
import { useEffect, useState } from "react";
import { useFetchWithRetry } from "../../../utils/fetch-with-retryes/FetchWithRetry";

const AddAudio = () => {
  // const { data: audioList, isLoading, error } = useFetchWithRetry(useGetAudioListQuery);
  const { data: audioList, isLoading } = useGetAudioListQuery();
  const [createAudio] = useCreateAudioMutation();
  const [deleteTerms] = useDeleteTermsMutation();
  const { handleSubmit, register, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    createAudio(data);
    toast.success("Create Audio");
    reset();
  };

  const datas = {
    items: audioList,
    isLoading: isLoading,
    thead: "Audio",
    deleteAction: deleteTerms,
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
        {/* {
          audioList?.data?.status === 429   && <RetryCountDown/>
        } */}
        <PaginatedItems datas={datas} />
      </div>
    </div>
  );
};

export default AddAudio;
