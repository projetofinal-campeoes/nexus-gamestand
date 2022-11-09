import React from "react";
import BackgroundDashboard from "../../components/BackgroundDashboard";
import GeralContainer from "../../components/GeralContainer";
import LeftAside from "../../components/LeftAside";
import RightSide from "../../components/RightSide";

const matheus = () => {
  return (
    <BackgroundDashboard config="flex flex-col">
      <GeralContainer>
        <LeftAside />

        <RightSide> 
            
        </RightSide>
      </GeralContainer>
    </BackgroundDashboard>
  );
};

export default matheus;
