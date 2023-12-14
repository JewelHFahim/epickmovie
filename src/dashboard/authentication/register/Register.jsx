import { useForm } from "react-hook-form";
import { registerUser } from "../../../redux/features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Select, initTE } from "tw-elements";
import { useNavigate } from "react-router-dom";

const Register = () => {
  initTE({ Select });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.user);
  console.log(message);

  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(registerUser(data));
    navigate("/admin/dashboard/users");
  };

  return (
    <div className="w-full h-full flex justify-center items-center bg-white" >
      <div className="w-[450px] mx-auto overflow-hidden bg-white border shadow-xl">
        <div className="px-10 py-4">

          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-8"
              src="https://epickmovies.online/wp-content/uploads/2023/12/cropped-EpickMovies-Favicone.png"
              alt=""
            />
          </div>

          <p className="mt-1 text-center">Register here</p>

          <form onSubmit={handleSubmit(onSubmit)} >

            <div className="w-full mt-4">
              <input
                type="text"
                {...register("full_name")}
                placeholder="Full Name"
                aria-label="Full Name"
                className="block w-full px-4 py-1 mt-2 placeholder:text-sm placeholder-gray-500 bg-white border border-gray-500 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="w-full mt-4">
              <input
                type="email"
                {...register("email")}
                placeholder="Email Address"
                aria-label="Email Address"
                className="block w-full px-4 py-1 mt-2 placeholder:text-sm  placeholder-gray-500 bg-white border border-gray-500 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="w-full mt-4">
              <input
                type="number"
                {...register("phone")}
                placeholder="Phone Number"
                aria-label="Phone Number"
                className="block w-full px-4 py-1 mt-2 placeholder:text-sm  placeholder-gray-500 bg-white border border-gray-500 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <select data-te-select-init className="block w-full px-4 py-1 mt-2 placeholder:text-sm  placeholder-gray-500 bg-white border border-gray-500 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300">
              <option hidden>Select Role</option>
              <option value="1">Admin</option>
              <option value="2">Editor</option>
              <option value="3">Moderator</option>
            </select>

            <div className="w-full mt-4">
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                })}
                placeholder="Password"
                aria-label="Password"
                className="block w-full px-4 py-1 mt-2 placeholder:text-sm placeholder-gray-500 bg-white border border-gray-500 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              />
              {errors.password && (
                <p role="alert" className="text-sm text-red-400">
                  minimum length 8 char
                </p>
              )}
            </div>

            <div className="flex items-center justify-center mt-4">
              <button
                type="submit"
                className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Add User
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
