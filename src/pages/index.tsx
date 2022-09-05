import React, { useRef, useState } from "react";
import Background from "../components/Background";
import SEO from "../components/SEO";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaUserAlt } from "react-icons/fa";

const VideoBg = () => {
  const router = useRouter();
  const topPage = useRef<HTMLDivElement>(null);
  const bottomPage = useRef<HTMLDivElement>(null);
  const [ userImage, setUserImage ] = useState(null)

  const handleClick = () => {
    router.push("/dashboard");
  };

  const handleRegister = () => {
    topPage.current?.classList.add("animate__animated", "animate__fadeOut");
    bottomPage.current?.classList.add("animate__animated", "animate__fadeOut");
    setTimeout(() => {
      router.push("/register");
    }, 500);
  };

  const handleLogin = () => {
    topPage.current?.classList.add("animate__animated", "animate__fadeOut");
    bottomPage.current?.classList.add("animate__animated", "animate__fadeOut");
    setTimeout(() => {
      router.push("/login");
    }, 500);
  };

  return (
    <>
      <SEO title="GameStand" description="Landing Page - The NEXUS App simplifies your access to your games, unifying all platforms into one." />
      <Background config="flex flex-col">
        <div
          ref={topPage}
          className="w-[100%] h-[100vh] bg-backgroundlanding relative object-cover"
        >
          <video autoPlay loop muted className="w-[100%] h-[100vh] object-cover">
            <source src="/bf4.mp4" />
          </video>
          <div className="absolute w-[100%] h-[100%] top-0 flex text-text flex-col items-center bg-backgroundlanding">
            <header className="z-[1] w-[100%] h-[60px] flex flex-col items-center justify-center relative">
              <div className="w-[80.5%] flex items-center gap-8 mt-3">
                <Image
                  src="/Logo.svg"
                  alt="Nexus logo"
                  width={198}
                  height={40}
                  className="cursor-pointer"
                  onClick={handleClick}
                  priority
                />
                <div className="ml-auto bg-linkpage rounded-[50%] p-2 cursor-pointer hover:bg-text ease-linear duration-300">
                  { userImage === null ? <FaUserAlt className=" text-backgroundlanding" /> : 'renderizar user'}
                  
                </div>
              </div>
            </header>
            <div className="w-[80%] h-[100%] flex flex-col justify-center">
              <div>
                <h1 className="mt-auto text-[5rem] w-[30%] font-bebas">
                  Your unified gaming platform
                </h1>
              </div>
              <span className="font-bebas font-light">
                The NEXUS App simplifies your access to your games, unifying all
                platforms into one.
              </span>
              <div className="w-[100%] ">
                <button
                  className="p-4 bg-primaryhover rounded-lg mt-5 ease-in-out duration-300 font-bebas hover:scale-[102%] mr-2 "
                  onClick={handleRegister}
                >
                  Sign Up Today!
                </button>
                <button
                  className="p-4 bg-boxcolor rounded-lg mt-5 ease-in-out duration-300 font-bebas hover:scale-[102%] border-[1px] border-hovercard"
                  onClick={handleLogin}
                >
                  I already have my account
                </button>
              </div>
            </div>
          </div>
        </div>

        <div ref={bottomPage} className="w-[100%] h-fit py-16 flex justify-center flex-col items-center bg-[#13151b]">
          <h1 className="font-bebas text-[4rem] text-text text-center">Supported Platforms</h1>
          <div className="gap-8 flex py-4 flex-wrap px-4">
            <Image 
            src="/steam.jpg"
            alt="Epic Games Logo"
            width={400}
            height={200}
            className="cursor-pointer rounded-lg"
            onClick={handleClick}
            priority />
            <Image 
            src="/epic.png"
            alt="Epic Games Logo"
            width={400}
            height={200}
            className="cursor-pointer rounded-lg"
            onClick={handleClick}
            priority />
            <Image 
            src="/playstation.jpg"
            alt="Epic Games Logo"
            width={400}
            height={200}
            className="cursor-pointer rounded-lg"
            onClick={handleClick}
            priority />
            <Image 
            src="/xbox.jpg"
            alt="Epic Games Logo"
            width={400}
            height={200}
            className="cursor-pointer rounded-lg"
            onClick={handleClick}
            priority />
          </div>
        </div>
      </Background>
    </>
  );
};

export default VideoBg;
