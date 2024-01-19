import React, { useEffect, useState } from "react";
import { GoQuestion } from "react-icons/go";

const TolerencePortfolio = () => {
  const [riskTolerance, setRiskTolerance] = useState<number | null>(null);

  useEffect(() => {
   const handleLength = () => {
     const bars = document.querySelectorAll(".valueRange");
     const stockNames = document.querySelectorAll(".stockName");

     if (riskTolerance !== null) {
       bars.forEach((bar, index) => {
         const Length = Math.floor(Math.random() * 40 + 5);
         const Value = Math.floor(Math.random() * 30 + 5);

         (bar as HTMLElement).style.width = `${Length}vw`;
         bar.classList.add("transition-all", "duration-500");
         bar.innerHTML = `${Value}%`;

         // Check if the bar and its name exist before accessing properties
         if (index === 5 && riskTolerance === 1.5 && bar && stockNames[index]) {
           bar.classList.add("hidden");
           (stockNames[index] as HTMLElement).classList.add("hidden");
         } else if (bar && stockNames[index]) {
           // Reset hidden state for other bars and their names
           bar.classList.remove("hidden");
           (stockNames[index] as HTMLElement).classList.remove("hidden");
         }

         const hideProbability = 0.2; 
         if (
           Math.random() < hideProbability &&
           riskTolerance > 5 &&
           bar &&
           stockNames[index]
         ) {
           bar.classList.add("hidden");
           (stockNames[index] as HTMLElement).classList.add("hidden");
         }
       });
     }
   };


    handleLength();
  }, [riskTolerance]);

  return (
    <div className='flex flex-col gap-3 w-[60vw] bg-textColor py-[1rem] px-1 text-slate-50'>
      {/* range slider */}
      <div className='flex flex-col bg-slate-100 h-[4rem] rounded-md w-[23rem] m-auto'>
        <div className='flex w-full justify-between'>
          <p className='capitalize text-textColor font-bold text-xs p-2'>
            Risk score:{riskTolerance}
          </p>
          <p className='capitalize text-neutral-600 text-xs p-2'>
            example portfolio
          </p>
        </div>

        <input
          type='range'
          min={0.5}
          max={10.5}
          value={riskTolerance || 0}
          onChange={(e) => {
            setRiskTolerance(Number(e.target.value));
            console.log(e.target.value);
          }}
          className='range mx-2 hover:cursor-pointer'
        />
      </div>

      <div className='flex m-auto w-full p-1'>
        {/* stocks */}
        <div className=' stockname flex flex-col items-start  justify-between gap-[1.3rem] min-w-[14vw]  '>
          <span className=' US_Stock flex items-center w-[7rem] gap-1'>
            <p className='title'>US stock</p>
            <GoQuestion />
          </span>
          <span className='flex items-center  gap-1 w-[9rem] '>
            <p className='title capitalize'>Foreign stock</p>
            <GoQuestion />
          </span>
          <span className='flex items-center justify-center gap-1'>
            <p className='title capitalize'>Emerging Markets</p>
            <GoQuestion />
          </span>
          <span className='flex items-center justify-center gap-1'>
            <p className='title capitalize'>Dividend Stocks</p>
            <GoQuestion />
          </span>
          <span className='flex items-center justify-center gap-1'>
            <p className='title capitalize'>Municipal Bonds</p>
            <GoQuestion />
          </span>
          <span className='flex items-center justify-center gap-1'>
            <p className='title capitalize'>US Bonds</p>
            <GoQuestion />
          </span>
          <span className='flex items-center justify-center gap-1'>
            <p className='title capitalize'>Coorperate bonds</p>
            <GoQuestion />
          </span>
          <span className='flex items-center justify-center gap-1'>
            <p className='title capitalize'>Tips</p>
            <GoQuestion />
          </span>
        </div>

        {/* bars */}
        <div className=' BARSholder max-w-full flex flex-col justify-between'>
          {/* first bar */}
          <div className='valueRange  w-[18vw]   border  p-1  bg-transparent '>
            <p className=''>18%</p>
          </div>

          {/* second bar */}
          <div className='valueRange  w-[4vw] border  p-1 bg-transparent bg-[#4840BB]'>
            <p className=''> 4%</p>
          </div>

          {/* third bar */}
          <div className='valueRange  w-[3vw] border  p-1   bg-[#4D5898]'>
            <p className=''>3%</p>
          </div>

          {/* fourth bar */}
          <div className='valueRange  w-[7vw] border  p-1   bg-[#7086C9] '>
            <p className='mx-1'>7 %</p>
          </div>

          {/* fifth bar */}
          <div className='valueRange  w-[35vw]  space-x-[8rem] border  p-1  bg-[#BDC6F5]'>
            <p className='w-fit'>35 %</p>
          </div>

          {/* sixth bar */}
          <div className='valueRange  w-[23rem] border  p-1  bg-[#AD6035]'>
            <p className='mx-1'>value %</p>
          </div>

          {/* seventh bar */}
          <div className='valueRange  w-[23rem] border  p-1  bg-[#DF8C5E] '>
            <p className='mx-1'>value %</p>
          </div>

          {/* Eighth bar */}
          <div className='valueRange  w-[23rem] border  p-1  bg-[#FED0B9] '>
            <p className='mx-1'>value %</p>
          </div>
        </div>
      </div>
      {/* down chart */}
      <div className={"flex flex-col justify-between h-[3rem] w-full"}>
        {/* first child */}
        <div className='flex justify-between items-center w-full'>
          {/* 1 */}
          <div className='flex justify-between w-[10rem]'>
            <p className=' capitalize text-neutral-500 text-xs'>real estate</p>
            <p className=' text-neutral-500 text-xs'>value % </p>
          </div>

          {/* 2 */}
          <div className='flex justify-between  w-[13rem]'>
            <p className=' capitalize text-neutral-500 text-xs'>US bonds</p>
            <p className=' text-neutral-500 text-xs'>value % </p>
          </div>

          {/* 3 */}
          <div className='flex justify-between w-[10rem]'>
            <p className=' capitalize text-neutral-500 text-xs'>real estate</p>
            <p className=' text-neutral-500 text-xs'>value % </p>
          </div>
        </div>
        {/* second child */}
        <div className='flex gap-[4.5rem] w-full items-center'>
          {/* 1 */}
          <div className='flex justify-between w-[10rem]'>
            <p className=' capitalize text-neutral-500 text-xs'>Tips</p>
            <p className=' text-neutral-500 text-xs'>value % </p>
          </div>

          {/* 2 */}
          <div className='flex gap-[2rem] w-[15rem]'>
            <p className=' capitalize text-neutral-500 text-xs'>
              emerging market bonds
            </p>
            <p className=' text-neutral-500 text-xs'>value % </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TolerencePortfolio;
