import React from "react";

const Illustration: React.FC = () => {
  return (
    <>
      <div className='pointer-events-none absolute left-[-2rem] top-[10rem] w-[283px] -translate-x-1/2 -translate-y-3/4 transform md:left-auto md:right-0 md:top-[206rem] md:w-[343px] md:-translate-y-1/2 md:translate-x-0 lg:w-[443px] 2xl:w-[553px] 3xl:w-auto p-1'>
        <picture>
          <source
            type='image/webp'
            srcSet='https://www.wealthfront.com/next/contenthash/next/optimized/box-house.contenthash.a4141741727ff198ee4bf8fa2592bf54f1550bd2.webp 1x, https://www.wealthfront.com/next/contenthash/next/optimized/box-house@2x.contenthash.abd3dc556bbdc5a4b34df5fbf6e6865ccfc5ae90.webp 2x'
          />
          <img
            width={663}
            height={663}
            alt=''
            loading='lazy'
            src='https://www.wealthfront.com/next/contenthash/next/optimized/box-house.contenthash.a4141741727ff198ee4bf8fa2592bf54f1550bd2.png'
          />
        </picture>
      </div>
    </>
  );
};

export default Illustration;
