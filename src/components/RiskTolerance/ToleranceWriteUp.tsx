import { Button } from "../Shared/Button";

const ToleranceWriteUp = () => {
  return (
    <div className=' ToleranceWriteUp flex flex-col items-start  p-[2rem] w-[40vw] bg-transparent text-textColor '>
      <h1 className='w-[8rem] text-5xl font-light p-3'>
        Smarter investing, brilliantly personalized.
      </h1>
      <p className='w-[21rem] p-3'>
        Just answer a few questions, and we’ll build you a personalized
        portfolio of low-cost index funds from up to 17 global asset classes.
        Our software handles all the trading, rebalancing, and other busywork to
        help grow your wealth for the long term.
          </p>
          <Button  className="hover:bg-opacity-45 w-[6rem]">Get started</Button>
    </div>
  );
};

export default ToleranceWriteUp;
