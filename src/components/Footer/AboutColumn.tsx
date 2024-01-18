import React from "react";

const AboutColumn = () => {
  const companyInfo = [
    "About Us",
    "Newsroom",
    "Reviews",
    "Careers",
    "Legal",
    "Sitemap",
    "Back to top",
  ];

  const About: JSX.Element[] = companyInfo.map((topic, index) => {
    return (
      <div className='flex flex-col gap-1 hover:cursor-pointer' key={index}>
        <p className='peer w-fit capitalize text-white text-xs'>{topic}</p>
        <div className='w-0 h-[4px] bg-white peer-hover:transition-all peer-hover:w-full duration-1000  '></div>
      </div>
    );
  });

  return (
    <div className='flex flex-col items-start gap-4 w-[10vw]'>
      <h1 className='font-bold text-xl text-white'>About</h1>
      {About}
    </div>
  );
};

export default AboutColumn;
