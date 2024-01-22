import React from "react";

const InvestmentImage = () => {
  return (
    <img
      loading='lazy'
      src='/images/investment.jpeg'
      alt='investment and trends'
      className=' shadow-md shadow-slate-500 w-auto  md:w-[100rem] object-contain md:self-start md:relative '
    />
  );
};

export default InvestmentImage;
