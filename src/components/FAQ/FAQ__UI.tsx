import React from "react";
import { FAQs } from "./FAQ__Logic";

const FAQ__UI = () => {
  const FAQ: JSX.Element[] = FAQs.map((faq, index) => (
    <li className='md:w-[12rem] p-2 bg-white flex flex-col gap-4 my-3' key={index}>
      <h1 className='text-sm text-textColor font-extralight capitalize w-full'>
        {faq.title}
      </h1>
      <p className='w-full md:text-sm text-xs text-textColor text-wrap'>{faq.question}</p>
      <a
        href='gjkkj'
        className='text text-textColor text-xs underline text-left'>
        learn more
      </a>
    </li>
  ));

  return (
    <div className='flex flex-col m-auto bg-white md:w-[75vw] md:p-3'>
      {/* A1 */}
      <div className='flex md:flex-row flex-col w-full  pb-4 justify-center'>
        <div className='w-[30vw]  px-4'>
          <h1 className='text-4xl alphin  text-textColor my-[1rem] w-[20rem]'>
            Invest a little time in the details.
          </h1>
        </div>

        <div className='md:w-[30vw] flex m-auto items-center justify-end px-4'>
          <p className='md:text-sm  text-textColor font-extralight md:w-[25rem] '>
            Still deciding if we’re right for you? These frequently asked
            questions may help.
          </p>
        </div>
      </div>

      {/* A2 */}
      <hr className='border-textColor ' />
      <ul className='flex flex-wrap w-full justify-center items-center gap-2 md:gap-4'>
        {FAQ}
      </ul>
    </div>
  );
};

export default FAQ__UI;
