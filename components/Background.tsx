import React from "react";

const Background = ({ children }) => {
  return (
    <div className="min-h-screen h-fit w-[100vw] bg-backgroundcolor flex justify-center items-center">
      {children}
    </div>
  );
};

export default Background;
