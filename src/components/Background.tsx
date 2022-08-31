import { ReactNode } from "react";

interface IBackgroundProps {
    children: ReactNode,
    config?: string,
}

const Background = ({ children, config }: IBackgroundProps) => {
  return (
    <div className={`min-h-screen h-fit w-[100%] bg-backgroundcolor flex ${config}`}>
      {children}
    </div>
  );
};

export default Background;
