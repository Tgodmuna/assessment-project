import React from "react";

const Banner = () => {
  return (
    <div className=' banner md:w-[80vw] md:h-[4.2rem] my-[3rem] m-auto rounded-xl bg-slate-500 md:p-4 hover:ring-2 hover:ring-orange-500 hover:cursor-pointer'>
      <div className='relative z-20 py-2 px-3 text-center font-sans text-3xl font-extrabold leading-[26px] tracking-tighter text-white sm:px-6'>
        What level of risk suits you best?
        <span className='copy-h2-alt'>➳</span>
      </div>
    </div>
  );
};

export default Banner;
