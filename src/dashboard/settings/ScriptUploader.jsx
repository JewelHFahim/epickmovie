import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ScriptUploader = () => {
    const {handleSubmit, register, reset} = useForm();


    const onSubmit = (data) => {
        console.log(data);
        toast.success("Script Posted");
        reset();
    }

  const inputStyle =
    "block w-full px-3 py-2 mt-2 text-gray-700 bg-white border border-e-0 border-gray-200 rounded-s-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring";


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center">

      <div className="w-full">
        <label className="text-gray-200"> Script Text </label>
        <input 
        type="text" 
          {...register("script_text")} 
        placeholder="script text" className={inputStyle}/>
      </div>

      <div className="flex items-center justify-center mt-8">
        <button
          type="submit"
          className="w-[150px] border border-slate-600 h-[43px] text-white uppercase rounded-e-md bg-slate-900 hover:bg-slate-600"
        >
          Save
        </button>
      </div>

    </form>
  );
};

export default ScriptUploader;
