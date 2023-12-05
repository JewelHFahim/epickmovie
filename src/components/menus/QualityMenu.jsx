const QualityMenu = ({ quality1, setQuality }) => {
  const closeDropdown = () => {
    setQuality(false);
  };

  const qualitys = [
    {
      title: "480p",
      url: "",
    },
    {
      title: "720p HEVC",
      url: "",
    },
    {
      title: "720p",
      url: "",
    },
    {
      title: "4k 2160p",
      url: "",
    },
    {
      title: "WEB-DL",
      url: "",
    },
    {
      title: "BlueRay",
      url: "",
    },
    {
      title: "WEBRip",
      url: "",
    },
    {
      title: "HQ S-Print",
      url: "",
    },
  ];

  return (
    <div>
      {quality1 && (
        <div
          onClick={closeDropdown}
          className="ml-[450px] z-[99] absolute w-48 py-2 origin-top-right shadow-xl bg-[#27272A]"
        >
          {qualitys.map((menu, i) => (
            <a
              key={i}
              href="#"
              className="block px-4 py-3 text-[18px] text-white font-[600] font-inter capitalize transition-colors duration-300 transform hover:bg-[#333335]"
            >
              {menu.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default QualityMenu;
