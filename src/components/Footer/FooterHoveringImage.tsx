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
        position: "absolute",
        top: `${position?.y}px`,
        left: `${position?.x}px`,
      }}
      src='https://www.wealthfront.com/next/contenthash/next/optimized/sloth.contenthash.5e9cec20bd02d53291f49c10db6ee6e9f78d47e2.png'
      alt='hover'
      className={`absolute opacity-0  w-[10rem] ${
        hoverContext?.isFooterHovered
          ? "transition-all duration-1000 filter-shadow  "
          : "transition-all  duration-1000"
      } `}
    />
  );
};

export default FooterHoveringImage;
