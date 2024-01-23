import React from "react";

interface TaxLossHarvestingProps {}

const TaxLossHarvesting: React.FC<TaxLossHarvestingProps> = () => {
  return (
    <div className=' TaxLossHarvesting mt-[-15rem] mx-auto w-full max-w-[2024px] space-y-3 px-8 pt-44 lg:px-12  lg:pt-32'>
      <div className='relative flex flex-col items-center lg:text-center'>
        <div className='animate-float pointer-events-none mb-2 lg:mb-0 lg:absolute -right-8 bottom-full h-[302px] w-[302px] sm:h-[250px] sm:w-[250px] lg:-right-12 lg:bottom-[0%] lg:-bottom-10 lg:-right-16 lg:h-[302px] lg:w-[302px] xl:h-[302px] xl:w-[302px] 2xl:h-[431px] 2xl:w-[431px] 3xl:right-14'>
          <picture>
            <source
              type='image/webp'
              srcSet='https://www.wealthfront.com/next/contenthash/next/optimized/sloth.contenthash.bfbccf08e845fca6940ff6dd232987f0644fa08c.webp 1x, /next/contenthash/next/optimized/sloth@2x.contenthash.e9ca0eefcca25f117fd1874ce5f5b0cc04426b50.webp 2x'
            />
            <img
              className=' animate-bounce animeDuration object-cover min-w-full lg:h-full w-auto'
              width={431}
              height={431}
              alt=''
              loading='lazy'
              src='/images/sloth.webp'
            />
          </picture>
        </div>
        <h2 className='text-textColor text-3xl lg:text-5xl'>
          Let your taxes pay you for a change.
        </h2>

        <p className='font-bold text-textColor mt-2 lg:text-sm   lg:w-[50rem] '>
          Tax-Loss Harvesting can find many small wins to boost your after-tax
          returns.
        </p>
        <p className='lg:w-[36rem] lg:text-sm lg:px-2 p-5 text-xs  text-wrap mb-4 font-light w-[20rem]'>
          Our software monitors your investments to automatically trade similar
          assets that lose value, which can help you lower your tax bill while
          still keeping your portfolio on track. When you offset your capital
          gains by claiming many small losses, you can put the savings right
          back to work in the market. No tractors or shovels required.
        </p>

        <a
          aria-label='Learn more about Tax-Loss Harvesting'
          className='z-10 buttonBorderStly  relative items-center justify-center text-textColor  border-textColor rounded-lg transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 border   inline-flex whitespace-nowrap mb-4'
          href='https://www.wealthfront.com/tax-loss-harvesting'
          rel='noopener noreferrer'
          target='_blank'>
          Learn more
        </a>
      </div>
    </div>
  );
};

export default TaxLossHarvesting;
