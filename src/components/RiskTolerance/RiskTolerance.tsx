import React from 'react'
import ToleranceWriteUp from './ToleranceWriteUp'
import TolerencePortfolio from './TolerencePortfolio'
import Banner from './Banner';

const RiskTolerance = () => {
  return (
    <section className='flex flex-col pb-[2rem] bg-gradient-to-b from-slate-400 to-lightOrange'>
      <div className=' holder flex-col flex p-3 md:p-0 md:flex-row '>
        <TolerencePortfolio />
        <ToleranceWriteUp />
      </div>
      <Banner/>
    </section>
  );
}

export default RiskTolerance