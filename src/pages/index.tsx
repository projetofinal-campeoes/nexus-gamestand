import React, { useRef, useState, useEffect } from "react";
import Background from "../components/Background";
import SEO from "../components/SEO";
import { useRouter } from "next/router";
import SupportedPlatforms from "../components/SupportedPlatforms";
import LandingHeader from "../components/LandingHeader";
import Soon from "../components/Soon";
import Loader from "../components/Loader"

const VideoBg = () => {
  const router = useRouter();
  const topPage = useRef<HTMLDivElement>(null);
  const midPage = useRef<HTMLDivElement>(null);
  const bottomPage = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    router.events.on('routeChangeStart', () => {setIsLoading(true)})
  }, [])

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
      {
        isLoading ?
            <Background config='items-center justify-center'>
                <Loader/>
            </Background>
        :
            <Background config="flex flex-col">
            <LandingHeader
            topPage={topPage}
            handleClick={handleClick}
            handleRegister={handleRegister}
            handleLogin={handleLogin}
            fadeOut={fadeOut}
            />
            <SupportedPlatforms handleClick={handleClick} midPage={midPage} />
            <Soon handleClick={handleClick} bottomPage={bottomPage} />
            </Background>
      }
      
    </>
  );
};

export default VideoBg;
