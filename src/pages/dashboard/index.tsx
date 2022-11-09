import React from "react";
import BackgroundDashboard from "../../components/BackgroundDashboard";
import GeralContainer from "../../components/GeralContainer";
import LeftAside from "../../components/LeftAside";
import RightSide from "../../components/RightSide";
import SEO from "../../components/SEO";

const Dashboard = () => {
  return (
    <BackgroundDashboard config="flex flex-col">
      <SEO
        title="Dashboard"
        description="The NEXUS App simplifies your access to your games, unifying all platforms into one."
      />
      <GeralContainer>
        <LeftAside />

        <RightSide> </RightSide>
      </GeralContainer>
    </BackgroundDashboard>
  );
};

export default Dashboard;
