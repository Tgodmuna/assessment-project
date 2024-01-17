import React from "react";
import AutomationWriteUp from "./AutomationWriteUp";
import AutomationVideo from "./AutomationVideo";
import TaxLossHarvesting from "./AutomationTask";

const Automation = () => {
  return (
    <section className='flex flex-col'>
      <div className='flex'>
        <AutomationVideo
          poster='https://www.wealthfront.com/next/contenthash/next/optimized/vanlife.contenthash.1a2473e3a801186e41d5f34a78ff67e1e92c81c2.jpg'
          webmSource='https://www.wealthfront.com/next/contenthash/next/vanlife.contenthash.d137accbf403b4f762924ae4741bd24cccdcad64.webm'
        />
        <AutomationWriteUp />
      </div>
      <TaxLossHarvesting />
    </section>
  );
};

export default Automation;
