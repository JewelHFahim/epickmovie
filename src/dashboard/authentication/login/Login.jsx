import { useForm } from "react-hook-form";
import { loginUser } from "../../../redux/features/users/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const userToken = await dispatch(loginUser(data));

      if (userToken) {
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-white ">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-xl border">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-8"
              src="https://epickmovies.online/wp-content/uploads/2023/12/cropped-EpickMovies-Favicone.png"
              alt=""
            />
          </div>

          <h3 className="mt-3 text-xl font-medium text-center">Welcome Back</h3>

          <p className="mt-1 text-center">Login here</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full mt-4">
              <input
                type="email"
                {...register("email")}
                placeholder="Email Address"
                aria-label="Email Address"
                className="block w-full px-4 py-2 mt-2  placeholder-gray-500 bg-white border border-gray-500 rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="w-full mt-4">
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                })}
                placeholder="Password"
                aria-label="Password"
                className="block w-full px-4 py-2 mt-2  placeholder-gray-500 bg-white border border-gray-500 rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              />
              {errors.password && (
                <p role="alert" className="text-sm text-red-400">
                  minimum length 8 char
                </p>
              )}
            </div>

            <div className="flex items-center justify-between mt-4">
              <a
                href="#"
                className="text-sm text-gray-600  hover:text-gray-500"
              >
                Forget Password?
              </a>

              <button
                type="submit"
                className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
