import React from "react";

const Bond = () => {
  const BondTopic = ["Bond"];
  const Bond: JSX.Element[] = BondTopic.map((ele, index) => {
    return (
      <div
        className='flex flex-col gap-1 w-fit hover:cursor-pointer'
        key={index}>
        <p className='peer  capitalize text-white text-xs'>{ele}</p>
        <div className='w-0 h-[4px] bg-white peer-hover:transition-all peer-hover:w-full duration-1000 '></div>
      </div>
    );
  });

  return (
    <div>
      <h1 className='font-bold text-xl text-white '>Bond</h1>
      {Bond}
    </div>
  );
};

export default Bond;