import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { Button } from "../Shared/Button";

const Pricing = () => {
  return (
    <div className=' pricing flex p-2 pb-[8rem]  md:p-0 flex-col justify-center items-center text-white h-auto'>
      <h1 className='m-auto mt-[3rem] text-center text-[45px] md:text-5xl  '>
        <span className='md:text-center md:ml-[10rem]'>Our fee is small,</span>{" "}
        <br /> but we think it’s a really big deal.
      </h1>
      <p className='md:text-[7.5rem] text-[5.25rem] text-center font-bold'>
        0.25%
      </p>
      <div className='flex'>
        <p className='md:w-[35rem] m-0 md:px-4 text-center text-[18px] text-pretty  md:text-xs '>
          For just 0.25% a year, Automated Investing Account clients get all the
          benefits of always-on automation, expert-curated portfolios, and
          Tax-Loss Harvesting that typically covers our fee more than 11x over.{" "}
        </p>
        <span className=' absolute left-[15rem] top-[24.2] z-10 md:ml-[-2rem]'>
          <a title='more infor relative' href='jnsjn'>
            <RiErrorWarningLine />
          </a>
        </span>
      </div>

      <Button className='md:w-fit w-[16rem] text-center p-2 md:mt-[3rem] capitalize buttonBorderStly hover:rounded-lg bg-transparent rounded-lg  border-2 border-white '>
        see how much it costs
      </Button>
    </div>
  );
};

export default Pricing;
