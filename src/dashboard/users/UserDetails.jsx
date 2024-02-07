import { useParams } from "react-router-dom";
import {
  useSingleUserDetailsQuery,
  useUserRoleListQuery,
} from "../../redux/features/users/userApi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUpdateUserMutation } from "../../redux/features/movies/movieApi";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSiteLogoUserQuery } from "../../redux/features/settings/settingApi";

const UserDetails = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, setValue } = useForm();
  const { data: siteLogo } = useSiteLogoUserQuery();

  const { id } = useParams();
  const { data: userDetails } = useSingleUserDetailsQuery(parseInt(id));
  const { data: userRoleList } = useUserRoleListQuery();
  const [updateUser] = useUpdateUserMutation();

  const type = userDetails?.data?.user_type === 1 ? "Administrator" : "Editor";

  useEffect(() => {
    setValue("name", userDetails?.data?.name, { shouldDirty: false });
    setValue("email", userDetails?.data?.email, { shouldDirty: false });
    setValue("user_type", type, { shouldDirty: false });
  }, [setValue, userDetails?.data?.name, userDetails?.data?.email, type]);

  const onSubmit = async (data) => {
    try {
      const res = await updateUser({ data, id: parseInt(id) });
      console.log(res);
      if (res && res.data) {
        const { message } = res.data;
        toast.success(message);
        navigate("/admin/dashboard/users");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const rolesData = userRoleList?.data;

  const inputStyle =
    "block w-full px-2 py-1 mt-2 placeholder:text-sm placeholder-gray-500 bg-white border border-gray-500 focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300";

  return (
    <div className="w-full h-full flex justify-center items-center bg-white">
      <div className="w-[450px] mx-auto overflow-hidden bg-white border shadow-xl">
        <div className="px-10 py-4">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8" src={siteLogo?.data} alt="" />
          </div>

          <p className="mt-1 text-center">Update User</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full mt-4">
              <input
                type="text"
                {...register("name")}
                placeholder="Full Name"
                className={inputStyle}
              />
            </div>

            <div className="w-full mt-4">
              <input
                type="email"
                {...register("email")}
                placeholder="Email Address"
                className={inputStyle}
              />
            </div>

            <select {...register("user_type")} className={inputStyle}>
              <option hidden>{type}</option>

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
