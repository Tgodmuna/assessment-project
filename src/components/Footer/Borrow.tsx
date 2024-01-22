import { BorrowTopic } from "./footerData";

const Borrow = () => {
  const Borrowing: JSX.Element[] = BorrowTopic.map((ele, index) => {
    return (
      <div
        className='flex flex-col gap-1 w-fit hover:cursor-pointer'
        key={index}>
        <p className='peer  capitalize text-white text-xs'>{ele}</p>
        <div className='w-0 h-[4px] bg-white peer-hover:transition-all peer-hover:w-full duration-1000 '></div>
      </div>
    );
  });

  return (
    <div className='flex flex-col gap-3'>
      <h1 className='font-bold text-xl text-white '>Borrow </h1>
      {Borrowing}
    </div>
  );
};

export default Borrow;
