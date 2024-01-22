import React, { useCallback, useContext, useEffect, useState } from "react";
import InvestingColumn from "./InvestingColumn";
import Save from "./Save";
import Bond from "./Bond";
import Borrow from "./Borrow";
import LearnColumn from "./LearnColumn";
import AboutColumn from "./AboutColumn";
import FooterHoveringImage from "./FooterHoveringImage";
import { Context } from "../../App";
import FooterWriteUp from "./FooterWriteUp";

const FOOTER = () => {
  //saving the mouse state
  const [position, setPosition] = useState({ x: 0, y: 0 });

  //access the context to get the state
  const HoveredContext = useContext(Context);

  //set a hover handler to manage the appearance of the hoveringimage.
  const handleHoveringIN = useCallback(() => {
    HoveredContext?.setisFooterHovered(true);
  }, [HoveredContext]);

  const handleHoveringOUT = useCallback(() => {
    HoveredContext?.setisFooterHovered(false);
  }, [HoveredContext]);

  //mouse position handler
  const handleMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  //on component mount , listen for a mouse mouse movement
  useEffect(() => {
    HoveredContext?.isFooterHovered
      ? window.addEventListener("mousemove", handleMouseMove as EventListener)
      : window.removeEventListener(
          "mousemove",
          handleMouseMove as EventListener,
        );

    return () => {
      // Cleanup the event listener on component unmount
      window.removeEventListener("mousemove", handleMouseMove as EventListener);
    };
  }, [HoveredContext?.isFooterHovered]);

  return (
    <footer
      className='flex flex-col'>
      <section
        className='bg-[#18172B] h-full w-full  flex md:flex-row flex-col md:p-[3rem]'
        onMouseEnter={() => handleHoveringIN()}
        onMouseLeave={() => handleHoveringOUT()}>
        {/* logo */}
        <div className='md:w-[30vw] m-auto pt-[13px] md:flex-col md:h-[40vw]'>
          <img
            src='/images/wordmark.svg'
            alt='company logo'
            className=''
          />
        </div>

        {/* large screen footer links */}
        <div className='md:flex hidden w-[100rem] m-auto justify-between p-2'>
          <InvestingColumn />
          <div className='flex flex-col items-start gap-[3rem] w-fit '>
            <Save />
            <Bond />
            <Borrow />
          </div>
          <LearnColumn />
          <AboutColumn />
        </div>

        {/* small screen */}
        <div className='flex md:hidden'>
          <div className='flex w-full flex-wrap'>
            <InvestingColumn />
            <LearnColumn />
            <AboutColumn />
          </div>
          <div className='w-full flex-wrap'>
            <Save />
            <Bond />
            <Borrow />
          </div>
        </div>
      </section>

      {/* footer write up */}
      <FooterWriteUp />

      {/* hover image */}
      {HoveredContext?.isFooterHovered && (
        <FooterHoveringImage position={{ x: position.x, y: position.y }} />
      )}
    </footer>
  );
};

export default FOOTER;
