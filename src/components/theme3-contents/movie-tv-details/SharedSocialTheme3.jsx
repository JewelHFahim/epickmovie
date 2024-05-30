import { FaFacebookF, FaPinterest, FaTwitter, FaWhatsapp } from "react-icons/fa";

const SharedSocialTheme3 = () => {
    return (
        <div className="hidden mt-2 lg:flex items-center gap-x-4">
        <p className="font-medium text-gray-100 flex items-center gap-x-4 border-r border-gray-700 max-w-fit pr-3">
          <span className="text-gray-500">Shared</span> <span>0</span>
        </p>

        <div className="flex items-center gap-x-1 bg-blue-900 px-2 rounded-md text-gray-100 py-[2px]">
          <FaFacebookF />
          <p>facebook</p>
        </div>

        <div className="flex items-center gap-x-1 bg-[#03a9f4] px-2 rounded-md text-gray-100 py-[2px]">
          <FaTwitter />

          <p>twitter</p>
        </div>

        <div className=" bg-red-700 px-3 rounded-md text-gray-100 py-[7px]">
          <FaPinterest />
        </div>

        <div className=" bg-green-600 px-3 rounded-md text-gray-100 py-[7px]">
          <FaWhatsapp />
        </div>
      </div>
    );
};

export default SharedSocialTheme3;