import React from "react";

const AboutDelievry = () => {
  return (
    <div className='flex w-[100vw] '>
      <div className='bg-[#BDC6F5] w-[50vw] p-[4rem] h-[25rem] flex flex-col items-start gap-[2rem]'>
        <h1 className='text-4xl mt-[3rem] alphin'>We’re here if you need us</h1>
        <p className='text-[13px] capitalize text-textColor  w-[40vw] '>
          You can do everything you need right in our app. But sometimes, it’s
          just easier to talk to a person. That’s why we have a gaggle of
          certified CPAs, CFAs, and CFPs standing by to answer your questions.
        </p>
        <a
          href='jknjk'
          className='underline text-center capitalize text-textColor'>
          learn more our product specialists
        </a>
      </div>

      <div className='w-[50vw] h-[25rem]'>
        <img className="w-full object-contain " src='/images/moving-truck.webp' alt='delievry truck' />
      </div>
    </div>
  );
};

export default AboutDelievry;
