import React from "react";

const NavLinkDropDown1 = () => {
  return (
    <div className=' w-fit h-[13rem] z-20  top-[4.3rem] absolute filter-shadow flex items-stretch justify-center overflow-hidden rounded-xl bg-white font-medium text-textColor'>
      <div className='flex-shrink-0 flex-grow py-9 pl-4 pr-4'>
        <a href='https://www.wealthfront.com/investing'>
          <div className='group flex items-center justify-start rounded p-1 pr-6 text-left'>
            <div className='mr-4 h-[128px] w-[128px] flex-shrink-0 flex-grow-0 transition-transform group-hover:scale-110'>
              <img
                className='h-full w-full object-contain object-center'
                width='128'
                height='128'
                alt='hourglass'
                loading='eager'
                src='https://www.wealthfront.com/next/contenthash/next/optimized/hourglass.contenthash.a39b6b5c4ee7aefbae8df8c13688ea731c570ba3.png'
              />
            </div>
            <div className='max-w-[300px] flex-grow'>
              <div className='group relative inline-block text-xs font-bold text-textColor group`'>
                Automated Index Investing
                <div className='underline w-[0rem] h-[0.2rem] transition-all ease bg-buttonPrimary group-hover:block group-hover:w-full group-hover:duration-500 mt-[-5px]'></div>
                <div className='pointer-events-none absolute -bottom-0.5 -right-4 font-serif'>
                  ↗
                </div>
              </div>
              <div className=' font-normal'>
                We’ll build and manage a diversified portfolio of low-cost index
                funds personalized for you.
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className='flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-4 bg-gray-100 p-8 py-10'>
        <a
          href='https://www.wealthfront.com/socially-responsible-investing'
          className='group relative whitespace-nowrap text-textColor font-medium group'>
          Socially Responsible (SRI)
          <div className='underline w-[0rem] h-[0.2rem] transition-all ease bg-buttonPrimary group-hover:block group-hover:w-full group-hover:duration-500 mt-[-5px]'></div>
        </a>
        <a
          href='https://www.wealthfront.com/retirement'
          className='group relative whitespace-nowrap text-textColor font-medium group'>
          Retirement (IRAs)
          <div className='underline w-[0rem] h-[0.2rem] transition-all ease bg-buttonPrimary group-hover:block group-hover:w-full group-hover:duration-500 mt-[-5px]'></div>
        </a>
        <a
          href='https://www.wealthfront.com/college'
          className='group relative whitespace-nowrap text-textColor font-medium group'>
          College (529s)
          <div className='underline w-[0rem] h-[0.2rem] transition-all ease bg-buttonPrimary group-hover:block group-hover:w-full group-hover:duration-500 mt-[-5px]'></div>
        </a>
        <hr className='my-1 w-full border-gray-300' />
        <a
          href='https://www.wealthfront.com/explore'
          className='group relative whitespace-nowrap text-textColor font-medium group'>
          Explore all investments
          <div className='underline w-[0rem] h-[0.2rem] transition-all ease bg-buttonPrimary group-hover:block group-hover:w-full group-hover:duration-500 mt-[-5px]'></div>
        </a>
      </div>
    </div>
  );
};

export default NavLinkDropDown1;
