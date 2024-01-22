import React from 'react'

const ExploreWriteUp = () => {
    return (
      <div className=' w-full md:w-[30rem] flex flex-col p-5 gap-[3rem]'>
        <div className='space-y-4 exploreheader'>
          <h2 className='text-textColor font-light text-3xl md:text-4xl w-[20rem]'>
            You make it custom. We’ll do the rest.
          </h2>
        </div>
        <div className='space-y-4'>
          <div className='text-textColor  text- max-w-[420px]'>
            Choose from hundreds of funds in categories like clean energy, tech,
            and crypto and we’ll handle the trades and rebalance your portfolio
            for you. Or start with a portfolio designed around your values with
            our
            <a
              className='z-10 relative font-medium underline'
              href='/socially-responsible-investing'>
              Socially Responsible portfolio
            </a>
            . We make it easy and safe to customize by helping you see when your
            choices won’t be in line with your preferred risk level.
          </div>
        </div>
      </div>
    );
}

export default ExploreWriteUp