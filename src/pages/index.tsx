import React, { useRef } from "react";
import Background from "../components/Background";
import SEO from "../components/SEO";
import { useRouter } from "next/router";
import SupportedPlatforms from "../components/SupportedPlatforms";
import LandingHeader from "../components/LandingHeader";
import Soon from "../components/Soon";

const VideoBg = () => {
  const router = useRouter();
  const topPage = useRef<HTMLDivElement>(null);
  const midPage = useRef<HTMLDivElement>(null);
  const bottomPage = useRef<HTMLDivElement>(null);

  const fadeOut = () => {
    topPage.current?.classList.add("animate__animated", "animate__fadeOut");
    midPage.current?.classList.add("animate__animated", "animate__fadeOut");
    bottomPage.current?.classList.add("animate__animated", "animate__fadeOut");
  };

  const handleClick = () => {
    fadeOut();
    setTimeout(() => {
      router.push("/dashboard");
    }, 500);
  };

  const handleRegister = () => {
    fadeOut();
    setTimeout(() => {
      router.push("/register");
    }, 500);
  };

  const handleLogin = () => {
    fadeOut();
    setTimeout(() => {
      router.push("/login");
    }, 500);
  };

  return (
    <>
      <SEO
        title="GameStand"
        description="The NEXUS App simplifies your access to your games, unifying all platforms into one."
      />
      <Background config="flex flex-col">
        <LandingHeader
          topPage={topPage}
          handleClick={handleClick}
          handleRegister={handleRegister}
          handleLogin={handleLogin}
        />
        <SupportedPlatforms handleClick={handleClick} midPage={midPage} />
        <Soon handleClick={handleClick} bottomPage={bottomPage} />
      </Background>
    </>
  );
};

export default VideoBg;
