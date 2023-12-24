import { Dropdown, Ripple, initTE } from "tw-elements";
import { MdKeyboardArrowDown } from "react-icons/md";

const DropdownQuality = ({ pixelQualityList }) => {
  initTE({ Dropdown, Ripple });

  const list = [
    {
      name: "Test1",
    },
    {
      name: "Test2",
    },
    {
      name: "Test3",
    },
    {
      name: "Test4",
    },
  ];

  return (
    <div>
      <div className="relative" data-te-dropdown-ref>
        <button
          className="flex items-center whitespace-nowrap rounded bg-primary border px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out motion-reduce:transition-none"
          type="button"
          id="dropdownMenuButton1"
          data-te-dropdown-toggle-ref
          aria-expanded="false"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Dropdown button
          <MdKeyboardArrowDown className="h-5 w-5" />
        </button>

        <ul
          className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-clip-padding text-center text-base shadow-lg  [&[data-te-dropdown-show]]:block"
          aria-labelledby="dropdownMenuButton1"
          data-te-dropdown-menu-ref
        >
          {list?.map((item) => (
            <li key={item?.id} className="bg-slate-700 w-[190px]">
              <a
                className="block w-full whitespace-nowrap  px-4 py-2 text-sm font-normal text-white hover:bg-slate-600  active:no-underline disabled:pointer-events-none "
                href="#"
                data-te-dropdown-item-ref
              >
                {item?.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownQuality;
