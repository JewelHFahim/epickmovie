import { useParams } from "react-router-dom";
import { useSingleUserDetailsQuery, useUserRoleListQuery } from "../../redux/features/users/userApi";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Select, initTE } from "tw-elements";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  initTE({ Select });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
  } = useForm();
  const { data: userRoleList } = useUserRoleListQuery();
  const {id } = useParams();

  const { data: userDetails } = useSingleUserDetailsQuery(parseInt(id));

  console.log(userRoleList);

  const onSubmit = (data) => {
    const userData = {
      full_name: data.full_name,
      email: data.email,
      password: data.password,
      role_type: parseInt(data.user_role),
    };

    console.log(userData);

    // dispatch(registerUser(userData));
    navigate("/admin/dashboard/users");
  };

  const rolesData = userRoleList?.data;

  return (
    <div className="w-full h-full flex justify-center items-center bg-white">
      <div className="w-[450px] mx-auto overflow-hidden bg-white border shadow-xl">
        <div className="px-10 py-4">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-8"
              src="https://epickmovies.online/wp-content/uploads/2023/12/cropped-EpickMovies-Favicone.png"
              alt=""
            />
          </div>

          <p className="mt-1 text-center">Update User</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full mt-4">
              <input
                type="text"
                {...register("full_name")}
                defaultValue={userDetails?.data?.name}
                placeholder="Full Name"
                aria-label="Full Name"
                className="block w-full px-4 py-1 mt-2 placeholder:text-sm placeholder-gray-500 bg-white border border-gray-500 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>

            <div className="w-full mt-4">
              <input
                type="email"
                {...register("email")}
                defaultValue={userDetails?.data?.email}
                placeholder="Email Address"
                aria-label="Email Address"
                className="block w-full px-4 py-1 mt-2 placeholder:text-sm  placeholder-gray-500 bg-white border border-gray-500 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>


            <select
              data-te-select-init
              {...register("user_role")}
              className="block w-full px-4 py-1 mt-2 placeholder:text-sm  placeholder-gray-500 bg-white border border-gray-500 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option hidden>{userDetails?.data?.user_type}</option>

              {Object.entries(rolesData ?? {}).map(([roleId, role]) => (
                <option key={roleId} value={roleId}>
                  {role}
                </option>
              ))}
            </select>


            <div className="flex items-center justify-center mt-4">
              <button
                type="submit"
                className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                Save User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
