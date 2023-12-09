import { Outlet } from "react-router-dom";
import Sidebar from "../../dashboard/SideDrawer";

const DashMain = () => {
  return (
    <div className="min-w-screen min-h-screen flex bg-white">

      <div className="w-[20%] fixed left-0 top-0">
        <Sidebar />
      </div>

      <div className="w-[80%] ml-[20%]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashMain;
