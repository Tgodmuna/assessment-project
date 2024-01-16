import React from "react";
import WriteUps from "./WriteUps";
import InvestmentImage from "./InvestmentImage";
import Ratings from "./Ratings";

const Hero = () => {
  return (
    <div className='flex flex-col w-full '>
      <div className="flex">
        <WriteUps />
        <InvestmentImage />
      </div>
      <Ratings />
    </div>
  );
};

export default Hero;
