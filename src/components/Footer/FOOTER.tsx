import React from "react";
import InvestingColumn from "./InvestingColumn";
import Save from "./Save";
import Bond from "./Bond";
import Borrow from "./Borrow";
import LearnColumn from "./LearnColumn";
import AboutColumn from "./AboutColumn";

const FOOTER = () => {
  return (
    <section className='bg-[#18172B] h-full w-full flex p-[3rem]'>
      <div className='w-[30vw] pt-[13px]'>
        <img
          src='/images/wordmark.svg'
          alt='company logo'
          className=''
        />
      </div>
      <div className='flex w-[100rem] m-auto justify-between p-2'>
        <InvestingColumn />
        <div className='flex flex-col items-start gap-[3rem] w-fit '>
          <Save />
          <Bond />
          <Borrow />
        </div>
        <LearnColumn />
        <AboutColumn />
      </div>
    </section>
  );
};

export default FOOTER;
