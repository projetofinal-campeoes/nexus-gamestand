import Image from "next/image";
import { ReactNode } from "react";

interface IBackgroundProps {
  children: ReactNode;
  config?: string;
}

const BackgroundDashboard = ({ children }: IBackgroundProps) => {
  return (
    <div className={`min-h-screen h-fit z-10 flex flex-col items-center justify-center`}>
        {children}      
    <Image src="/bg.png" layout="fill" className={`min-h-screen h-fit object-cover fixed z-0`} />
    </div>
  );
};

export default BackgroundDashboard;
