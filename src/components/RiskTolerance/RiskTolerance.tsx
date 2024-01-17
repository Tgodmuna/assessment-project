import React from 'react'
import ToleranceWriteUp from './ToleranceWriteUp'
import TolerencePortfolio from './TolerencePortfolio'

const RiskTolerance = () => {
  return (
      <section className='flex'>
          <TolerencePortfolio/>
          <ToleranceWriteUp/>
    </section>
  )
}

export default RiskTolerance