import { useEffect } from "react";
import Loading from "../../utils/loading/Loading";
import { admin_base_url } from "../../config/config";

const AdminLoginRedirect = () => {
  
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = admin_base_url;
    }, 3000);

    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div className="w-full h-screen bg-[#18181a] flex justify-center items-start mx-auto pt-20">
      <Loading />
      <p className="text-[20px] text-white">Admin Dashboard</p>
    </div>
  );
};

export default AdminLoginRedirect;
