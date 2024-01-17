import React, { ReactNode } from "react";

type ToolTippropType = {
  className: string;
  children: ReactNode;
};

export const LabelToolTip: React.FC<ToolTippropType> = (prop) => {
  return <div className={prop.className}> {prop.children}</div>;
};
