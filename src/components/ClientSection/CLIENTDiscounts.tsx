import React from "react";

const CLIENTDiscounts = () => {
  return (
    <div className='flex'>
      <picture>
        <source
          type='image/webp'
          srcSet='https://www.wealthfront.com/next/contenthash/next/optimized/nest-egg.contenthash.9f875a83916bb512617d581306273ac5a8261b3a.webp 1x, https://www.wealthfront.com/next/contenthash/next/optimized/nest-egg@2x.contenthash.30c0a1cc7acc24caad8b0a3f215d92f9269d72da.webp 2x'
        />
              <img
                  className="absolute left-[-2.5rem] top-[302rem]"
          width='401'
          height='401'
          alt=''
          loading='lazy'
          src='https://www.wealthfront.com/next/contenthash/next/optimized/nest-egg.contenthash.a3c3aeb22af33693e1c790912bd22a4ee492c86d.png'
        />
      </picture>

      <div className='flex flex-col gap-[2rem] w-[60vw] m-auto p-2'>
        <div className='flex flex-col w-full gap-4'>
          <p className='text-textColor text-3xl my-3 alphin font-extralight'>
            You can count on us
          </p>
          <hr className='border-textColor border' />
        </div>

        <div className='flex flex-col  w-full gap-4'>
          <p className='text-textColor text-3xl  alphin font-extralight w-[20rem]'>
            <span className='text-textColor font-extrabold text-4xl italic'>
              $50 Billion
            </span>
            managed for clients
          </p>
          <hr className='border-textColor border' />
        </div>

        <div className='flex flex-col  w-full gap-4'>
          <p className='text-textColor text-3xl  my-3 alphin font-extralight'>
            <span className='text-textColor font-extrabold text-4xl italic'>
              0%
            </span>
            of your trade data sold
          </p>
          <hr className='border-textColor border' />
        </div>

        <div className='flex flex-col  m-auto  w-full gap-4 '>
          <p className='text-textColor text-3xl my-3 alphin font-extralight'>
            <span className='text-textColor font-extrabold text-4xl italic'>
              $500,000
            </span>
            protected by SIPC
          </p>
          <p className='text-xs text-textColor mt-[-1rem] '>
            includes $250,000 cash limit
          </p>
          <hr className='border-textColor border' />
        </div>
      </div>
    </div>
  );
};

export default CLIENTDiscounts;
