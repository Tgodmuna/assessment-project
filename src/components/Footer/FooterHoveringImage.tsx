import React from "react";

interface Position {
  x: number;
  y: number;
}

interface FooterHoveringImageProps {
  position: Position;
}

const FooterHoveringImage: React.FC<FooterHoveringImageProps> = ({
  position,
}) => {
  console.log("from hoveringImage", position);
  return (
    <img
      style={{
        position: "absolute",
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
      src='https://www.wealthfront.com/next/contenthash/next/optimized/sloth.contenthash.5e9cec20bd02d53291f49c10db6ee6e9f78d47e2.png'
      alt='hover'
      className={
        " absolute  w-[10rem] left-[" +
        position.x +
        "px]  top-[" +
        position.y +
        "px] }"
      }
    />
  );
};

export default FooterHoveringImage;
