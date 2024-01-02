import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { Toaster } from "react-hot-toast";
import ScriptPage from "./dashboard/settings/ScriptPage";

const App = () => {
  return (
    <div className=" bg-[#27272A] lg:bg-[#18181a] ">
      <RouterProvider router={router} />
      <Toaster/>
      <ScriptPage/>
    </div>
  );
};

export default App;
