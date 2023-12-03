const GenerMenu = ({ gener1, setGener }) => {
  const closeDropdown = () => {
    setGener(false);
  };

  const menus = [
    {
      title: "Action",
      url: "",
    },
    {
      title: "Adventure",
      url: "",
    },
    {
      title: "Animation",
      url: "",
    },
    {
      title: "Bengali",
      url: "",
    },
    {
      title: "Comedy",
      url: "",
    },
    {
      title: "Crime",
      url: "",
    },
    {
      title: "Fantasy",
      url: "",
    },
    {
      title: "Horror",
      url: "",
    },
    {
      title: "Mystery",
      url: "",
    },
    {
      title: "Romance",
      url: "",
    },
    {
      title: "Sci-Fi",
      url: "",
    },
    {
      title: "Thriller",
      url: "",
    },
  ];

  return (
    <div>
      {gener1 && (
        <div
          onClick={closeDropdown}
          className="ml-[200px] z-[99] absolute w-48 py-2 origin-top-right shadow-xl bg-[#27272A]"
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

export default GenerMenu;
