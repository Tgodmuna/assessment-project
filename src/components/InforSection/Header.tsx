import React from "react";
import Illustration from "./ILLustration";

const Header = () => {
  return (
    <div className=' header flex flex-col lg:w-2/3 md:w-[80vw] px-[2rem] '>
      <div className='flex-col flex md:flex-row md:justify-between items-center h-[10rem] '>
        <h1 className=' md:text-4xl md:w-[45vw] text-[40px] capitalize text-textColor md:self-end'>
          Investing that accounts for your needs.
        </h1>
        <Illustration />
      </div>
      <hr className='border-textColor text-4xl mt-[1rem]' />
    </div>
  );
};

export default Header;
