import React from "react";

const BottomWriteUps = () => {
  return (
    <div className='flex justify-between '>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col justify-between h-[6rem] p-2 '>
          <h1 className='text-textColor text-3xl capitalize font-bold'>
            Invest for retirement.
          </h1>
          <p className='text-textColor text-sm '>
            Traditional IRA, Roth IRA, SEP IRA, 401(k) Rollover
          </p>
        </div>

        <div className='flex flex-col justify-between h-[6rem] p-2 '>
          <h1 className='text-textColor text-3xl capitalize font-bold'>
            Invest for education.
          </h1>
          <p className='text-textColor text-sm '>
            529 Account for college savings
          </p>
        </div>

        <div className='flex flex-col justify-between h-[6rem] p-2 '>
          <h1 className='text-textColor text-3xl capitalize font-bold'>
            Invest for everything else.
          </h1>
          <p className='text-textColor text-sm '>
            Individual Accounts, Joint Accounts, Trust Accounts
          </p>
        </div>
      </div>
      <div className='w-[40vw] px-[2rem] font-bold flex flex-col gap-5'>
        <h1 className='text-4xl capitalize text-textColor'>
          Invest even faster with the Wealthfront Cash Account.
        </h1>
        <p className='w-[20rem] text-xs font-extralight text-textColor '>
          Enjoy a 5.00% APY on all your cash. Pay bills, save for big purchases,
          or get in the market in minutes. Our technology lets you automate your
          paycheck and organize cash effortlessly.
        </p>
      <a href='kjhjhj' className='text-textColor text-xs underline capitalize'>
        learn more
      </a>
      </div>
    </div>
  );
};

export default BottomWriteUps;
