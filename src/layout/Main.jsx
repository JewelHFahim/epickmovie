import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
