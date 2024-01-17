import { ButtonHTMLAttributes, ReactNode } from "react";

type buttonProp = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  width?: string;
  className?: string;
};

export const Button = ({ children, width, className, ...prop }: buttonProp) => {
  return (
    <button
      {...prop}
      className={` ${className}  p-2 rounded-md bg-buttonPrimary text-white text-base font-semibold text-nowrap m-2 text-center `}>
      {children}
    </button>
  );
};
