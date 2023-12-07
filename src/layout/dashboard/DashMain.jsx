import { Outlet } from "react-router-dom";
import Sidebar from "../../dashboard/SideDrawer";

const DashMain = () => {
  return (
    <div className="min-w-screen min-h-screen flex gap-1 border border-red-600 p-2">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default DashMain;
