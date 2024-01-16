import { ButtonHTMLAttributes, ReactNode } from "react";

type buttonProp = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  width: string;
};

export const Button = ({ children, width, ...prop }: buttonProp) => {
  return (
    <button
      {...prop}
      className={`bg-pri p-2 rounded-md bg-buttonPrimary text-white text-base font-semibold text-nowrap m-2 text-center w-[${width}]`}>
      {children}
    </button>
  );
};
