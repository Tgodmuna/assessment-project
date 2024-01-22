import { ReactNode } from "react";
import { FaChevronDown } from "react-icons/fa";
import { HiBars2 } from "react-icons/hi2";
const Navlink = () => {
  //links
  const Navlink = ["cash", "bonds", "automated investment", "stocks", "learn"];

  //map thru the navlink array and transform each element.
  const Link = Navlink.map((link, linkIndex) => {
    //add down arrow on certain navlink elements
    const prefix: () => ReactNode | string = () => {
      if (
        (link === "automated investment" && linkIndex === 2) ||
        (link === "stocks" && linkIndex === 3)
      ) {
        return (
          <div className='flex items-center justify-center gap-1'>
            {link}
            <FaChevronDown className='group-hover:translate-y-90 transition-all duration-500' />
          </div>
        );
      }
      return link;
    };
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
      <HiBars2 color=" white" size={40} className="md:hidden relative left-[3rem]" />
    </ul>
  );
};

export default Navlink;
