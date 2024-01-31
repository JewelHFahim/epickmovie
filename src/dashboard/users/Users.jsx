import { useUserListQuery } from "../../redux/features/users/userApi";

const Users = () => {
  const { data: userList } = useUserListQuery();
  const userInfo = JSON.parse(localStorage.getItem("user-info"));

  return (
    <div className=" mx-auto p-8">
      <div className="p-2 shadow-md rounded-md border">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl"> Members </h3>
        </div>

        {userInfo?.user_type === 1 && (
          <div className="mt-3 md:mt-0">
            <a href="/admin/dashboard/register" className="text-blue-600 hover:text-blue-700 font-medium"> +Add member </a>
          </div>
        )}
      </div>

      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Username</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Role</th>
              <th className="py-3 px-6 text-center"></th>
            </tr>
          </thead>

          <tbody className="text-gray-600 divide-y">
            {userList?.data?.map((item, idx) => (
              <tr key={idx}>
                <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                  <div className="w-10 h-10 rounded-full bg-slate-200"></div>

                  <div>
                    <span className="block text-gray-700 text-sm font-medium">
                      {item.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.user_type === 1 ? "Administrator" : "Editor"}
                </td>

                {userInfo?.user_type === 1 && (
                  <td className="text-right px-6 whitespace-nowrap">
                    <a
                      href={`/admin/dashboard/users/${item?.id}`}
                      className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Edit
                    </a>

                    <button
                      href="javascript:void()"
                      className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};
export default Users;
