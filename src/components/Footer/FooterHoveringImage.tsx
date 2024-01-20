import React, { useContext } from "react";
import { Context } from "../../App";

interface Position {
  x: number;
  y: number;
}

interface FooterHoveringImageProps {
  position: Position | undefined;
}

const FooterHoveringImage: React.FC<FooterHoveringImageProps> = ({
  position,
}) => {
  const hoverContext = useContext(Context);

  return (
    <img
      style={{
        position: "relative",
        top: `${position?.y}px`,
        left: `${position?.x}px`,
      }}
      src='https://www.wealthfront.com/next/contenthash/next/optimized/sloth.contenthash.5e9cec20bd02d53291f49c10db6ee6e9f78d47e2.png'
      alt='hover'
      className={` w-[10rem] ${
        hoverContext?.isFooterHovered
          ? `transition-all duration-1000 translate-x-[1rem] translate-y-[-73rem] filter-shadow  `
          : "transition-all  duration-1000"
      } `}
    />
  );
};

export default FooterHoveringImage;
