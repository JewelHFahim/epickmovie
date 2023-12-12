/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../utils/loading/Loading";

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { isLoading, token } = useSelector((state) => state.user);
  const userInfo = JSON.parse(localStorage.getItem("user-info"));
  console.log(token)

  console.log(userInfo?.token)

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div>
          <Loading />
        </div>
      </div>
    );
  }

  if (userInfo?.token && userInfo?.token !== null && userInfo?.token !== undefined) {
    return children;
  } else {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }
};

export default PrivateRouter;
