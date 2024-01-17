import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { Button } from "../Shared/Button";

const Pricing = () => {
  return (
    <div className=' pricing flex flex-col justify-center items-center text-white h-auto'>
      <h1 className='m-auto mt-[3rem] text-5xl '>
        <span className='text-center ml-[10rem]'>Our fee is small,</span> <br />{" "}
        but we think it’s a really big deal.
      </h1>
      <p className='text-[7.5rem] text-center font-bold'>0.25%</p>
      <div className='flex'>
        <p className='w-[35rem] m-0 px-4 text-center text-xs '>
          For just 0.25% a year, Automated Investing Account clients get all the
          benefits of always-on automation, expert-curated portfolios, and
          Tax-Loss Harvesting that typically covers our fee more than 11x over.{" "}
        </p>
        <span className=' ml-[-2rem]'>
          <a title='more infor relative' href='jnsjn'>
            <RiErrorWarningLine />
          </a>
        </span>
      </div>

      <Button className='w-fit text-center p-2 mt-[3rem] capitalize buttonBorderStly hover:rounded-lg bg-transparent rounded-lg  border-2 border-white '>
        see how much it costs
      </Button>
    </div>
  );
};

export default Pricing;
