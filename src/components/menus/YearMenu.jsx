const YearMenu = ({ year1, setYear }) => {
  const closeDropdown = () => {
    setYear(false);
  };

  const menus = [
    {
      title: "2023",
      url: "",
    },
    {
      title: "2022",
      url: "",
    },
    {
      title: "2021",
      url: "",
    },
    {
      title: "2020",
      url: "",
    },
    {
      title: "2019",
      url: "",
    },
    {
      title: "2018",
      url: "",
    },
    {
      title: "2017",
      url: "",
    },
    {
      title: "2016",
      url: "",
    },
    {
      title: "2015",
      url: "",
    },
    {
      title: "2014",
      url: "",
    },
    {
      title: "2013",
      url: "",
    },
    {
      title: "2012",
      url: "",
    },
    {
      title: "2012 - 2008",
      url: "",
    },
    {
      title: "2007 - Old",
      url: "",
    },
  ];

  return (
    <div>
      {year1 && (
        <div
          onClick={closeDropdown}
          className="ml-[320px] z-[99] absolute w-48 py-2 origin-top-right shadow-xl bg-[#27272A]"
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

export default YearMenu;
