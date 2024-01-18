import React from "react";
import Header from "./Header";
import BottomWriteUps from "./BottomWriteUps";

const Info = () => {
  return (
    <section className=' infor w-full flex flex-col justify-center items-center m-auto bg-gradient-to-b from-slate-400 to-lightOrange '>
      <Header />
      <BottomWriteUps />
    </section>
  );
};

export default Info;
