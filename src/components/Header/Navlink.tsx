import { ReactNode, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { HiBars2 } from "react-icons/hi2";
import NavLinkDropDown1 from "./NavLinkDropDown1";
import { propType } from "./Header";

const Navlink = (prop: propType) => {
  //links
  const Navlink = ["cash", "bonds", "automated investment", "stocks", "learn"];
  const [isDropDownShowing1, setisDropDownShowing1] = useState(false);
  const handleDropDropDown1 = () => {
    setisDropDownShowing1(!isDropDownShowing1);
  };

  //map thru the navlink array and transform each element.
  const Link = Navlink.map((link, linkIndex) => {
    //add down arrow on certain navlink elements
    const prefix: () => ReactNode | string = () => {
      if (link === "stocks" && linkIndex === 3) {
        return (
          <div className='flex items-center justify-center gap-1'>
            {link}
            <FaChevronDown className='group-hover:translate-y-90 transition-all duration-500' />
          </div>
        );
      }
      return link;
    };

    //append handler to the automated investment nav bar
    if (link === "automated investment" && linkIndex === 2) {
      return (
        <div
          key={linkIndex}
          className='hidden lg:flex flex-col relative'
          onClick={handleDropDropDown1}>
          <li
            className='text-nowrap text-center text-sm text-blue-950 capitalize p-2 font-semibold group peer'
            aria-label='nav link'>
            <div className='flex items-center justify-center gap-1'>
              {link}
              <FaChevronDown
                className={`group-hover:translate-y-90 transition-all duration-500 ${
                  isDropDownShowing1 ? "rotate-180" : ""
                }`}
              />
            </div>
          </li>
          <div className='underline w-[0rem] h-[0.2rem] transition-all ease bg-buttonPrimary peer-hover:block peer-hover:w-full peer-hover:duration-500 mt-[-10px]'></div>
        </div>
      );
    }
    return (
      <div className=' hidden lg:flex flex-col '>
        <li
          className='text-nowrap text-center text-sm  text-blue-950 capitalize p-2 font-semibold group peer'
          aria-label='nav link'
          key={linkIndex}>
          {prefix()}
        </li>
        <div className='underline w-[0rem] h-[0.2rem] transition-all ease bg-buttonPrimary peer-hover:block peer-hover:w-full peer-hover:duration-500 mt-[-10px]'></div>
      </div>
    );
  });

  return (
    <ul className='flex justify-center gap-3 items-center w-[40rem] h-[3rem] '>
      {Link}
      <HiBars2
        onClick={prop.handleActive}
        color=' white'
        size={40}
        className='md:hidden relative left-[3rem]'
      />
      {isDropDownShowing1 && <NavLinkDropDown1 />}
    </ul>
  );
};

export default Navlink;
