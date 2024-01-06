import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSiteLogoUserQuery } from "../../redux/features/settings/settingApi";
import toast from "react-hot-toast";
import { setPassword } from "../../redux/features/users/userSlice";
import { useDispatch } from "react-redux";

const SetNewPass = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const { string } = useParams();
  const dispatch = useDispatch();
  const { data: logo } = useSiteLogoUserQuery();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = (data) => {
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    dispatch(setPassword({ body: data, token: string }));
    reset();
  };

  const inputStyle =
    "block w-full px-2 py-1 mt-2 placeholder:text-sm placeholder-gray-500 bg-white border border-gray-500 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300";

  const isSubmitDisabled = newPassword !== confirmPassword;

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-white border border-red-500">
      <div className="w-[450px] mx-auto overflow-hidden bg-white border shadow-xl">
        <div className="px-10 pb-8">
          <img src={logo?.data} alt="" className="p-8" />
          <p className="mt-1 text-center">Set your password</p>

          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="w-full mt-4">
              <label htmlFor="">New Password</label>
              <input
                type="password"
                {...register("new_password", { required: true })}
                placeholder="New Password"
                className={inputStyle}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              {errors.new_password && (
                <p className="text-sm text-red-600">New Password Required</p>
              )}
            </div>

            <div className="w-full mt-4">
              <label htmlFor="">Confirm Password</label>
              <input
                type="password"
                {...register("new_confirm_password")}
                placeholder="Confirm Password"
                className={inputStyle}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.new_confirm_password && (
                <p className="text-sm text-red-600">
                  Confirm Password Required
                </p>
              )}
            </div>

       
            <div className="flex items-center justify-center mt-4">
              {isSubmitDisabled ? (
                <button
                  disabled={isSubmitDisabled}
                  className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-200 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 cursor-not-allowed"
                >
                  Reset Password
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  Reset Password
                </button>
              )}
            </div>

            <div className="flex justify-center mt-2">
            <Link to="/admin/login" className="text-blue-600 hover:text-blue-700 hover:underline">Login</Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default SetNewPass;
