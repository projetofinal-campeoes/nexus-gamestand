import React, { useEffect } from "react";
import Background from "../components/Background";
import Login from "../components/Login";

const login = () => {  
  return (
    <>
      <Background config="items-center justify-center ">
        <Login />
      </Background>
    </>
  );
};

export default login;
