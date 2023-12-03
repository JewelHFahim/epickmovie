import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

const App = () => {
  return (
    <div className=" bg-[#27272A] lg:bg-[#18181a] ">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
