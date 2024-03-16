import { useEffect, useState } from "react";
import { base_url } from "../../config/config";

const DownloadButton = () => {
  const [xmlData, setXMLData] = useState();

  useEffect(() => {
    fetch(`${base_url}/admin/sitemap-download`, {
      headers: {
        Authorization:
          "Bearer 118|6VN3HiB3RvtPAdGlZyGlqjVuj9svWBBIqtUZgjRi0d25a0d8",
      },
    })
      .then((res) => res.text())
      .then((data) => setXMLData(data));
  }, []);

  const handleDownloadAndSave = () => {
    const blob = new Blob([xmlData], { type: "application/xml" });
    const reader = new FileReader();
    reader.onload = function () {
      const dataUrl = reader.result;
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = "sitemap.xml";
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
    reader.readAsDataURL(blob);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button onClick={handleDownloadAndSave} className="text-blue-500 border border-blue-500 hover:bg-blue-600 hover:text-white px-8 py-1.5 transform duration-200">Download and Save XML</button>
    </div>
  );
};

export default DownloadButton;
