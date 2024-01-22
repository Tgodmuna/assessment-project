import React from "react";
import { Button } from "../Shared/Button";

const Client = () => {
  return (
    <section className='bg-[rgb(22,19,56)] p-[1rem] flex flex-col gap-[2rem] md:items-center md:justify-center '>
      {/* 1 */}
      <h1 className='md:text-sm mb-[-1.4rem] text-[20px] pt-[3rem] text-slate-50 font-semibold uppercase md:text-center '>
        MEET OUR STOCK INVESTING ACCOUNT
      </h1>
      {/* 2 */}
      <div className=' alphin flex flex-col md:gap-2 md:w-[34rem] md:m-auto'>
        <p className='uppercase md:text-4xl text-[34px] text-white md:text-center'>
          Want a little more control?
        </p>
        <p className='md:text-4xl capitalize text-[34px] font-extrabold text-white md:font-extrabold fontweight md:text-center '>
          Invest in individual stocks.
        </p>
      </div>
      {/* 3 */}
      <div className='flex flex-col gap-1 m-auto'>
        <p className='md:text-sm text-white md:font-bold md:text-center'>
          Fractional shares. No commissions. $1 to get started.
        </p>
        <p className='md:w-[37rem]  md:text-center md:text-sm text-white'>
          Other investing apps might focus on what’s trending, but our Stock
          Investing Account lets you skip the endless hours of research, to help
          you make smarter investing decisions, faster. Browse 45+ pre-built
          collections and invest in companies you love without the advisory or
          management fees.
        </p>
      </div>
      <Button className='text-slate-50 capitalize bg-[rgb(189,198,245)] rounded-lg w-[13rem] -mt-2 Gradient'>
        get Started
      </Button>

      <a
        href='kjhjhj'
        className='text-white mt-[-2rem] pb-3  underline capitalize md:text-xl cursor-pointer'>
        learn more stock investing
      </a>

      <picture className='hidden md:block'>
        <source
          type='image/webp'
          srcSet='https://www.wealthfront.com/next/contenthash/next/stock_investing/floating_token_bottom_module.contenthash.df2d9343e1c0c26d3cc35debf6d5e934937a3a10.webp 1x, https://www.wealthfront.com/next/contenthash/next/stock_investing/floating_token_bottom_module@2x.contenthash.7ad2ce4b09411ba5990996c084086fab855ac89d.webp 2x'
        />
        <img
          width='955'
          height='251'
          className='absolute top-[272rem] left-[6rem]'
          alt='Floating stock tokens'
          loading='lazy'
          src='https://www.wealthfront.com/next/contenthash/next/stock_investing/floating_token_bottom_module.contenthash.48c47cf4c269e8d572c4dcb7b53243c58d338344.png'
        />
      </picture>

      <picture className='hidden md:block'>
        <source
          type='image/webp'
          srcSet='https://www.wealthfront.com/next/contenthash/next/stock_investing/floating_token_top_module.contenthash.336989cde44825b496b03d0f7449c9d81040efb0.webp 1x, /next/contenthash/next/stock_investing/floating_token_top_module@2x.contenthash.3637ce4a138bd64cc9d0586e1e51a932b08b3e09.webp 2x'
        />
        <img
          className='absolute top-[246rem] left-[7rem] '
          width='993'
          height='223'
          alt='Floating stock tokens'
          loading='lazy'
          src='https://www.wealthfront.com/next/contenthash/next/stock_investing/floating_token_top_module.contenthash.6a6bcbff6770aace4761f41f4eaa83267dd8ec28.png'
        />
      </picture>

      <picture className='hidden md:block'>
        <source
          type='image/webp'
          srcSet='https://www.wealthfront.com/next/contenthash/next/stock_investing/stock_investing_module_banner-640w.contenthash.fba2430424203aa7d327ec0c88ba47cdb5a1e607.webp 640w, https://www.wealthfront.com/next/contenthash/next/stock_investing/stock_investing_module_banner-750w.contenthash.930b46e6c57e9591ff258314a402c7ed03f62f6c.webp 750w, /next/contenthash/next/stock_investing/stock_investing_module_banner-828w.contenthash.6c3a75fcdaf36d8107d1ca35f055a988abc63a7d.webp 828w, https://www.wealthfront.com/next/contenthash/next/stock_investing/stock_investing_module_banner-1080w.contenthash.ddac27439b432587791b530c03064620036610a5.webp 1080w, https://www.wealthfront.com/next/contenthash/next/stock_investing/stock_investing_module_banner-1200w.contenthash.53fae4bdc70a0169cecb49c12db174c9d287f966.webp 1200w, https://www.wealthfront.com/next/contenthash/next/stock_investing/stock_investing_module_banner-1920w.contenthash.22e34a88c5e76593903bbe654d034712094373e3.webp 1920w, https://www.wealthfront.com/next/contenthash/next/stock_investing/stock_investing_module_banner-2048w.contenthash.3396298c3016fed74c864c55493a22c1fbd6ca55.webp 2048w, https://www.wealthfront.com/next/contenthash/next/stock_investing/stock_investing_module_banner-3840w.contenthash.2e0e5e691c5661371441f222f4389087f00ed1c3.webp 3840w'
        />
        <img
          className='absolute top-[260rem] left-0 w-full'
          width='1178'
          height='400'
          alt=''
          loading='lazy'
          src='https://www.wealthfront.com/next/contenthash/next/stock_investing/stock_investing_module_banner.contenthash.9b308b700fe787a1a09997f0a728f374b3f0d32d.png'
        />
      </picture>
    </section>
  );
};

export default Client;
