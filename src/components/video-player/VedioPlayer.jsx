const VedioPlayer = () => {
  return (
    <div className="pb-10">
      <h3 className="text-xl">Vedio Player</h3>

      <table className="w-full table-auto text-sm text-left">
        <thead className="text-gray-600 font-medium border-b">
          <tr>
            <th>#</th>
            <th className="py-3 px-6">Title</th>
            <th className="py-3 px-6">Type</th>
            <th className="py-3 px-6">URL source or Shortcode </th>
            <th className="py-3 px-6">Flag Language </th>
            <th className="text-center">Control</th>
          </tr>
        </thead>

        <tbody>
          <tr className="divide-x-2 bg-slate-100">
            <td></td>

            <td className="px-2 py-4">
              <input type="text" placeholder="title" className="py-1 focus:outline-blue-500 border px-4 placeholder:text-sm w-full"/>
            </td>

            <td className="px-2">
              <select data-te-select-init className="border px-4 py-1 rounded-md w-full">
                <option value="1" hidden> URL Embed </option>
                <option value="1">Popularity desc</option>
                <option value="1">Popularity asc</option>
              </select>
            </td>

            <td className="px-2">
              <input type="text" placeholder="shortcode" className="py-1 focus:outline-blue-500 border px-4 placeholder:text-sm w-full"/>
            </td>

            <td className="px-2">
              <select data-te-select-init className="border px-4 py-1 rounded-md w-full" >
                <option value="1" hidden> ------------------ </option>
                <option value="1">Chinies</option>
                <option value="1">Denmark</option>
                <option value="1">English</option>
                <option value="1">Egypt</option>
                <option value="1">Fransh</option>
              </select>
            </td>

            <td className="px-2"><button className="px-4 py-1 border rounded-md text-sm border-blue-500 text-blue-500 hover:bg-slate-200">Remove</button></td>

          </tr>
        </tbody>
      </table>

      <button className="mt-4 border border-dashed border-slate-400 py-1 rounded-md w-full text-blue-500 text-sm hover:bg-slate-100 hover:text-blue-700 hover:border-blue-700 transform duration-150">Add New Row</button>



    </div>
  );
};

export default VedioPlayer;
