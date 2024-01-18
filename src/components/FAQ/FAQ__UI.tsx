import React from "react";
import { FAQs } from "./FAQ__Logic";

const FAQ__UI = () => {
  const FAQ: JSX.Element[] = FAQs.map((faq, index) => (
    <li className='w-[12rem] flex flex-col gap-4 my-3' key={index}>
      <h1 className='text-sm text-textColor font-extralight capitalize w-full'>
        {faq.title}
      </h1>
          <p className='w-full text-xs text-textColor text-wrap'>{faq.question}</p>
          <a href="gjkkj" className="text text-textColor text-xs underline text-left">learn more</a>
    </li>
  ));

  return (
    <div className='flex flex-col m-auto bg-white w-[75vw] p-3'>
      <div className='flex w-full items-center justify-between pb-4'>
        <div className='w-[50vw]'>
          <h1 className='text-5xl alphin text-textColor my-[1rem] w-[25rem]'>
            Invest a little time in the details.
          </h1>
        </div>
        <div className='w-[50vw] flex items-center justify-end '>
          <p className='text-xl text-textColor font-extralight w-[25rem] '>
            Still deciding if we’re right for you? These frequently asked
            questions may help.
          </p>
        </div>
      </div>
      <hr className='border-textColor ' />
      <ul className='flex flex-wrap justify-center items-center gap-4'>
        {FAQ}
      </ul>
    </div>
  );
};

export default FAQ__UI;
