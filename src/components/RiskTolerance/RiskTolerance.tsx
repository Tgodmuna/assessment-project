import React from 'react'
import ToleranceWriteUp from './ToleranceWriteUp'
import TolerencePortfolio from './TolerencePortfolio'
import Banner from './Banner';

const RiskTolerance = () => {
  return (
    <section className='flex flex-col pb-[2rem] bg-gradient-to-b from-slate-400 to-lightOrange'>
      <div className=' flex'>
        <TolerencePortfolio />
        <ToleranceWriteUp />
      </div>
      <Banner/>
    </section>
  );
}

export default RiskTolerance