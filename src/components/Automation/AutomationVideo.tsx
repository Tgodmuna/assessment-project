import React, { ReactNode } from "react";
import { LabelToolTip } from "./LabelTip";

interface VideoProps {
  poster: string;
  webmSource: string;
}

const VideoComponent: React.FC<VideoProps> = ({ poster, webmSource }) => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col'>
        <video
          src={webmSource}
          aria-hidden='true'
          poster={poster}
          loop
          playsInline
          autoPlay
          className='transform  object-cover w-[45rem] mt-[1rem] h-full pt-5 px-5'
        />
        <p className='text-sm m- text-textColor text-opacity-40 text-center '>
          Tax Loss Harvesting benefits will vary. Wealthfront doesn’t provide
          tax advice.
        </p>
      </div>

      <div className=''>
        <LabelToolTip
          className={
            " w-[15rem] relative top-[-9rem] left-[27rem] filter-shadow flex flex-col bg-opacity-60 justify-between p-3  h-[5rem] bg-slate-50 rounded-xl "
          }>
          <div className='flex justify-between items-center text-textColor'>
            <div className='flex gap-1 '>
              <img
                src='images/notif-app.svg'
                alt='logo'
                className='w-[1rem] object-contain'
              />
              <span className='text-xs font-extralight WEALTHFRONT'>
                WEALTHFRONT
              </span>
            </div>
            <p className='lowercase WEALTHFRONT font-extralight text-textColor'>
              now
            </p>
          </div>
          <p className='capitalize text-xs text-center text-textColor'>
            We saved you $78.11 on your taxes.
          </p>
        </LabelToolTip>
        <LabelToolTip
          className={
            " w-[13rem] relative top-[-19rem] left-[28rem] filter-shadow flex flex-col bg-opacity-60 shadow-black justify-between p-3  h-[4rem] bg-slate-50 rounded-xl "
          }>
          <div className='flex justify-between items-center text-textColor'>
            <div className='flex gap-1 '>
              <img
                src='images/notif-app.svg'
                alt='logo'
                className='w-[1rem] object-contain'
              />
              <span className='text-xs font-extralight WEALTHFRONT'>
                WEALTHFRONT
              </span>
            </div>
            <p className='lowercase WEALTHFRONT font-extralight text-textColor'>
              now
            </p>
          </div>
          <p className='capitalize text-xs text-center text-textColor'>
            We saved you $78.11 on your taxes.
          </p>
        </LabelToolTip>
      </div>
    </div>
  );
};

export default VideoComponent;
