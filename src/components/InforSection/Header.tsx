import React from "react";
import Illustration from "./ILLustration";

const Header = () => {
  return (
    <div className=' header flex flex-col w-'>
      <div className='flex justify-between items-center h-[10rem] p-4'>
        <h1 className=' text-4xl w-[45vw] capitalize text-textColor self-end'>
          Investing that accounts for your needs.
        </h1>
        <Illustration />
      </div>
      <hr className='border-textColor mt-[1rem]' />
    </div>
  );
};

export default Header;
