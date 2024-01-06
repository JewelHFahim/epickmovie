import { useParams } from "react-router-dom";
import { useSingleUserDetailsQuery } from "../../redux/features/users/userApi";
import { useForm } from "react-hook-form";
import { useSiteLogoUserQuery } from "../../redux/features/settings/settingApi";
import { resetPassword } from "../../redux/features/users/userSlice";
import { useDispatch } from "react-redux";

const ResetPassword = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: userDetails } = useSingleUserDetailsQuery(parseInt(id));
  const { data: logo } = useSiteLogoUserQuery();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(resetPassword(data));
    reset();
  };

  const inputStyle =
    "block w-full px-2 py-1 mt-2 placeholder:text-sm placeholder-gray-500 bg-white border border-gray-500 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300";

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-white border border-red-500">
      <div className="w-[450px] mx-auto overflow-hidden bg-white border shadow-xl">
        <div className="px-10 pb-8">
          <img src={logo?.data} alt="" className="p-8" />
          <p className="mt-1 text-center">Reset your password</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full">
              <input
                type="email"
                {...register("email", { required: true })}
                defaultValue={userDetails?.data?.email}
                placeholder="Registered Email Address"
                className={inputStyle}
              />
              {errors.email && (
                <p className="text-sm text-red-600">Email Required</p>
              )}
            </div>

            <div className="flex items-center justify-center mt-4">
              <button
                type="submit"
                className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
