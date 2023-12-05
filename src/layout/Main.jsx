import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import Nav from "./navbar/nav/Nav";

const Main = () => {
  return (
    <>
      {/*  lg:w-[1170px]  */}

      <div className="w-full lg:w-[61vw] lg:min-w-[1170px] mx-auto">
        <Navbar/>

        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Main;
