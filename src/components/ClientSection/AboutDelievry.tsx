import React from "react";

const AboutDelievry = () => {
  return (
    <div className='flex flex-col md:flex-row w-[100vw] '>
      {/* 1 */}
      <div className='bg-[#BDC6F5] md:w-[50vw] w-full  md:p-[4rem] md:h-[25rem] flex flex-col items-start md:gap-[2rem]'>
        <h1 className='md:text-4xl text-[30px] text-textColor mt-[3rem] alphin'>
          We’re here if you need us
        </h1>
        <p className='md:text-[13px] text-[20px] w-[85vw] p-2 text-center capitalize text-textColor  md:w-[40vw]'>
          You can do everything you need right in our app. But sometimes, it’s
          just easier to talk to a person. That’s why we have a gaggle of
          certified CPAs, CFAs, and CFPs standing by to answer your questions.
        </p>
        <a
          href='jknjk'
          className='underline text-center text-xs capitalize text-textColor'>
          learn more our product specialists
        </a>
      </div>

      {/* 2 */}
      <div className='md:w-[50vw] md:h-[25rem]'>
        <img
          className='max-w-full w-fit object-cover '
          src='/images/moving-truck.webp'
          alt='delievry truck'
        />
      </div>
    </div>
  );
};

export default AboutDelievry;
