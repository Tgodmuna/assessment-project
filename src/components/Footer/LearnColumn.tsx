import React from "react";

const LearnColumn = () => {
  const financialGuides = [
    "Blog",
    "Help Center",
    "What level of risk suits you best?",
    "Home Planning Guide",
    "Financial Health Guide",
    "Equity and IPO Guide",
    "IRA Contributions Calculator",
  ];

  const Learn: JSX.Element[] = financialGuides.map((topic, index) => {
    return (
      <div className='flex flex-col gap-1 hover:cursor-pointer' key={index}>
        <p className='peer w-fit capitalize text-white text-xs'>{topic}</p>
        <div className='w-0 h-[4px] bg-white peer-hover:transition-all peer-hover:w-full duration-1000  '></div>
      </div>
    );
  });
  return (
    <div className='flex flex-col items-start gap-4 w-[10vw'>
      <h1 className='font-bold text-xl text-white capitalize '>learn</h1>
      {Learn}
    </div>
  );
};

export default LearnColumn;
