import React from "react";
import { Button } from "../Shared/Button";

const WriteUps = () => {
  return (
    <div className='writeUps flex flex-col justify-center items-start w-[26rem] px-[2rem]'>
      {/* first writeup */}
      <div className='first_writeUp w-[25rem] p-3 '>
        <i>
          There’s no secret to long-term wealth, but if there were it would be
          this:
        </i>
      </div>
      {/* second writeup */}
      <div className='second_writeUp   p-3  w-[19rem]'>
        <p className='mt-[1rem]  '>automated index investing.</p>
      </div>
      {/* third writeUp */}
      <div className='third_WriteUp'>
        <p className='p-3'>
          Even with the inevitable ups and downs of the market, our
          expert-built, globally-diversified Automated Investing Account makes
          it easy to start building long-term wealth by managing your risk,
          maximizing returns, and minimizing taxes.
        </p>
      </div>
      {/* call to action button */}
      <Button width='6rem' className='capitalize Gradient '>
        get started
      </Button>
    </div>
  );
};

export default WriteUps;
