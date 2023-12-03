import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <div className=" lg:w-[1170px] mx-auto">
        <Navbar />
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Main;
