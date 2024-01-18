import React from "react";
import WriteUps from "./WriteUps";
import InvestmentImage from "./InvestmentImage";
import Ratings from "./Ratings";

const Hero = () => {
  return (
    <div className='flex flex-col w-full bg-gradient-to-b from-slate-400 to-lightOrange'>
      <div className='flex'>
        <WriteUps />
        <InvestmentImage />
      </div>
      <Ratings />
    </div>
  );
};

export default Hero;
