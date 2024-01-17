import React  from "react";
import { Button } from "../Shared/Button";

const AutomationWriteUp = () => {
  return (
    <div className=' w-[50vw]  flex flex-col  items-center'>
      <h2 className='automationWriteup  text-textColor text-5xl w-[21rem] p-4'>
        Our not-so-secret ingredient?
        <i className='italic'>Automation✨</i>
      </h2>

      <p className=' text-textColor text-sm my-[-1.5rem] w-[22rem] p-6'>
        Keep your eyes on the big picture, your other investments, or basically
        anything besides the busywork. We rebalance your portfolio,
        automatically diversify deposits, and can help save you taxes, all
        without you ever lifting a finger.
      </p>
      <Button className='w-[6rem] relative left-[-6.5rem] hover:opacity-25 capitalize '>get started</Button>

      <div className="w-[15rem] flex bg-slate-50 text-textColor ">
        <div className="flex justify-between items-start w-full">
          
        </div>
      </div>
    </div>
  );
};

export default AutomationWriteUp;


 
 
 
