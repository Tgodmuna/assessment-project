import React from "react";
import { investmentTopics } from "./footerData";

const InvestingColumn = () => {
  const Investing: JSX.Element[] = investmentTopics.map((topic, index) => {
    return (
      <div
        className='flex flex-col gap-1 hover:cursor-pointer relative'
        key={index}>
        <p className='peer w-fit capitalize text-white text-xs'>{topic}</p>
        <div className='w-0 h-[4px] bg-white peer-hover:transition-all peer-hover:w-full duration-1000  '></div>
      </div>
    );
  });

  return (
    <div className='flex flex-col items-start gap-4 w-[10vw]'>
      <h1 className='font-bold text-xl text-white capitalize'>investing</h1>
      {Investing}
    </div>
  );
};

export default React.memo(InvestingColumn);
