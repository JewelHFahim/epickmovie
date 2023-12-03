const MovieMenu = ({ isOpen, setIsOpen }) => {
  
  const closeDropdown = () => {
    setIsOpen(false);
  };

  const menus = [
    {
      title: "Bollywood",
      url: "",
    },
    {
      title: "Hollywood",
      url: "",
    },
    {
      title: "Hindi Dubbed",
      url: "",
    },
    {
      title: "Tamil",
      url: "",
    },
    {
      title: "Telugu",
      url: "",
    },
    {
      title: "Bengali",
      url: "",
    },
    {
      title: "Chinies",
      url: "",
    },
    {
      title: "Japanies",
      url: "",
    },
    {
      title: "Spanish",
      url: "",
    },
    {
      title: "Korean",
      url: "",
    },
  ];

  return (
    <div>
      {isOpen && (
        <div
          onClick={closeDropdown}
          className="ml-[80px] z-[99] absolute w-48 py-2 origin-top-right shadow-xl bg-[#27272A]"
        >
          {menus.map((menu, i) => (
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

export default MovieMenu;
