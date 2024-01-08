import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className=" bg-[#27272A] lg:bg-[#18181a] ">
      <RouterProvider router={router} />
      <Toaster/>
    </div>
  );
};

export default App;
