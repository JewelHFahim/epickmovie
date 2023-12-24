import { useForm } from "react-hook-form";
import { useCreateConfigMutation } from "../../redux/features/settings/settingApi";
import toast from "react-hot-toast";
import { Select, initTE } from "tw-elements";


const Settings = () => {
    initTE({ Select });

  const {
    handleSubmit,
    register,
    reset,
    formState: { error },
  } = useForm();

  const [createConfig] = useCreateConfigMutation();

  const onSubmit = (data) => {
    console.log(data);
    // createConfig(data);
    // toast.success("Submitted");
    // reset();
  };

  const inputStyle =
    "block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring";

  return (
    <div>
      <section className=" px-[20px] lg:px-[250px] py-[20px] lg:py-[50px] w-full h-screen mx-auto bg-gray-800">
        <h2 className="text-lg font-semibold text-white">Account settings</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2"
        >
          <div>
            <label className="text-gray-200"> Site Name </label>
            <input
              type="text"
              {...register("site_name")}
              placeholder="site name"
              className={inputStyle}
            />
          </div>

          <div>
            <label className="text-gray-200"> Site Logo</label>
            <input
              type="text"
              {...register("site_logo")}
              placeholder="site logo"
              className={inputStyle}
            />
          </div>

          <div>
            <label className="text-gray-200"> Site News </label>
            <input
              type="text"
              {...register("site_news")}
              placeholder="site news"
              className={inputStyle}
            />
          </div>

          <div>
            <label className="text-gray-200"> Site Footer </label>
            <input
              type="text"
              {...register("site_footer")}
              placeholder="site footer"
              className={inputStyle}
            />
          </div>

          <div>
            <label className="text-gray-200"> Telegram Link </label>
            <input
              type="text"
              {...register("telegram_link")}
              placeholder="telegram link"
              className={inputStyle}
            />
          </div>

          {/* <div>
            <label className="text-gray-200">Quick Menu Order</label>
            <input type="text" {...register("quick_menu_order")} placeholder=" quick menu_ order" className={inputStyle}
            />
          </div> */}

          <select {...register("quick_menu_order")} multiple data-te-select-init>
            <option hidden>Select Menus</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
            <option value="6">Six</option>
            <option value="7">Seven</option>
            <option value="8">Eight</option>
          </select>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Settings;
