import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

const App = () => {
  return (
    <div className=" px-[365px] bg-[#202022]">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
