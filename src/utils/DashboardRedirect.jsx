import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./loading/Loading";

const DashboardRedirect = () => {
  
  const navigate = useNavigate();

    useEffect(() => {
      const redirectTimer = setTimeout(() => {
        navigate("/admin/dashboard");
      }, 3000);

      return () => clearTimeout(redirectTimer);
    }, [navigate]);

  return (
    <div className="w-full h-screen bg-[#18181a] flex justify-center items-start mx-auto pt-20">
      <Loading />
      <p className="text-[20px] text-white">
        Redirecting to admin dashboard...
      </p>
    </div>
  );
};

export default DashboardRedirect;
