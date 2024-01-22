import React from "react";

const BottomWriteUps = () => {
  return (
    <div className='flex flex-col h-screen  md:flex-row justify-between gap-[3rem] md:pb-[5rem] w-full md:w-[80vw]'>
      {/* write up one */}
      <div className='flex flex-col gap-[1rem] h-screen md:gap-4 w-full px-[2rem] '>
        {/* 1 */}
        <div className='flex flex-col md:justify-between gap-2 md:gap-[1rem] h-[6rem] md:p-2 '>
          <h1 className='text-textColor md:text-3xl  text-[28px] w-full capitalize font-bold '>
            Invest for retirement.
          </h1>
          <p className='text-textColor text-sm '>
            Traditional IRA, Roth IRA, SEP IRA, 401(k) Rollover
          </p>
        </div>

        {/* 2 */}
        <div className='flex flex-col  h-[6rem] md:p-2 md:justify-between gap-2 md:gap-[1rem] '>
          <h1 className='text-textColor text-[28px] md:text-3xl capitalize font-bold'>
            Invest for education.
          </h1>
          <p className='text-textColor text-sm '>
            529 Account for college savings
          </p>
        </div>

        {/* 3 */}
        <div className='flex flex-col md:justify-between gap-2 md:gap-[1rem] h-[6rem] md:p-2 '>
          <h1 className='text-textColor text-[28px] md:text-3xl capitalize font-bold'>
            Invest for everything else.
          </h1>
          <p className='text-textColor text-sm '>
            Individual Accounts, Joint Accounts, Trust Accounts
          </p>
        </div>
      </div>

      {/* write up two */}

      <div className='md:w-[40vw] w-full px-[2rem] font-bold flex flex-col gap-5'>
        <h1 className='md:text-4xl text-[28px] capitalize text-textColor'>
          Invest even faster with the Wealthfront Cash Account.
        </h1>
        <p className='md:w-[20rem] md:text-xs md:font-extralight text-textColor h-auto'>
          Enjoy a 5.00% APY on all your cash. Pay bills, save for big purchases,
          or get in the market in minutes. Our technology lets you automate your
          paycheck and organize cash effortlessly.
        </p>
        <a
          href='kjhjhj'
          className='text-textColor md:text-xs underline capitalize'>
          learn more
        </a>
      </div>
    </div>
  );
};

export default BottomWriteUps;
