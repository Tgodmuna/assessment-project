import { FaStar } from "react-icons/fa6";
import { JsxElement } from "typescript";
//types for the ratings
type rating_1Type = {
  value: string;
  text: string;
};

//types for the ratings
type rating_2Type = {
  logo: string;
  text1: string;
  text2: string;
};

const Ratings = () => {
  //rating object array1
  const Rating1: rating_1Type[] = [
    {
      value: "700K",
      text: "trusted clients ",
    },
    {
      value: "$50B+",
      text: "in assets managed ",
    },
    {
      value: "4.8",
      text: "appleStore",
    },
    {
      value: "4.9",
      text: "google play store",
    },
  ];

  //rating object array1
  const Rating2: rating_2Type[] = [
    {
      logo: "/images/nerdwallet.svg",
      text1: "Best Robo-advisor, Portfolio Options, 2023 ",
      text2: "Best Robo-advisor, IRA, 2022",
    },
    {
      logo: "/images/investopedia.svg",
      text1: "Best Robo-advisor, 2022 ",
      text2: "Best Robo-advisor, 2020 ",
    },
  ];

  const Lists = () => {
    const list1 = Rating1.map((ele) => {
      return (
        <li className='flex flex-col    md:justify-between md:items-start md:w-full  md:m-1  md:relative top-[-0.5rem]'>
          <p className='text-xl font-bold [color:#230b59]'>
            {ele.value}
          </p>
          <p className='text-xs   w-[10rem] [color:#230b59] md:text-left text-center capitalize'>
            {ele.text}
            {ele.text === "google play store" && (
              <sup className='text-xs'>2</sup>
            )}
            {ele.text === "appleStore" && <sup className='text-xs'>2</sup>}
          </p>
        </li>
      );
    });
    const list2 = Rating2.map((ele) => {
      return (
        <li className='flex flex-col justify-between items-center md:items-start  w-fit [color:#230b59]'>
          <img
            src={` ${ele.logo}`}
            alt=' logo'
            className='w-[9rem] object-contain mb-2'
          />
          <p className=' text-center text-[13px] md:text-balance md:text-xs capitalize w-fit'>
            {ele.text1} <sup className='text-xs'>1</sup>
          </p>
          <p className='md:text-xs text-[13px] capitalize'>
            {ele.text2} <sup className='text-xs'>1</sup>
          </p>
        </li>
      );
    });
    return (
      <section className='md:flex-row flex flex-col '>
        <ul className=' justify-center items-center gap-[1rem]  mb-[2rem] w-full flex md:flex-row flex-col md:justify-center md:items-center md:gap-[3rem]  p-3 md:w-[50vw] bg-'>
          {list2}
        </ul>
        <ul className='md:flex  columns-2  justify-between items-start h-full md:p-3 m-auto md:w-[50vw]'>
          {list1}
        </ul>
      </section>
    );
  };

  return <>{Lists()}</>;
};

export default Ratings;
