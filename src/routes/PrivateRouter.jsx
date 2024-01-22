/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../utils/loading/Loading";
import { useEffect, useRef } from "react";

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.user);
  const userInfo = JSON.parse(localStorage.getItem("user-info"));

  // const isMounted = useRef(true);

  // useEffect(() => {
  //   return () => {
  //     isMounted.current = false;
  //   };
  // }, []);

  // useEffect(() => {
  // const timeoutId =  setTimeout(() => {
  //     if (isMounted.current) {
  //       localStorage.removeItem("user-info");
  //       dispatch(userInfo?.token(null));
  //     }

  //   }, 1 * 1000);

  //   return () => {
  //     if (isMounted.current) {
  //       clearTimeout(timeoutId);
  //     }
  //   };
  // }, [dispatch, userInfo]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
        localStorage.removeItem("user-info");
        dispatch(userInfo?.token(null));
      
    }, 24 * 60 * 60 * 1000);

    return () => {
        clearTimeout(timeoutId);
    };
  }, [dispatch, userInfo]);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <Loading />
      </div>
    );
  }

  if (
    userInfo?.token &&
    userInfo?.token !== null &&
    userInfo?.token !== undefined
  ) {
    return children;
  } else {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }
};

export default PrivateRouter;
