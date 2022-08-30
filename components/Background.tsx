import { ReactNode } from "react";

interface IBackgroundProps {
    children: ReactNode
}

const Background = ({ children }: IBackgroundProps) => {
  return (
    <div className="min-h-screen h-fit w-[100vw] bg-backgroundcolor flex justify-center items-center">
      {children}
    </div>
  );
};

export default Background;
