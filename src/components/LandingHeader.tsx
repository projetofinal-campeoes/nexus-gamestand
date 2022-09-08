import React from "react";
import Image from "next/image";
import { useAuth } from "../context/AuthContext";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";
import CookieConsent from "react-cookie-consent";

type ILandingPage = {
  topPage: any;
  handleClick: () => void;
  handleRegister: () => void;
  handleLogin: () => void;
  fadeOut: () => void;
};

const LandingHeader = ({
  handleClick,
  handleRegister,
  handleLogin,
  topPage,
  fadeOut,
}: ILandingPage) => {
  const { user } = useAuth();

  const video = ["/wow.mp4", "/cars.mp4", "/horizon.mp4"];
  const random = Math.floor(Math.random() * video.length);
  const router = useRouter();
  const handleLogout = () => {
    deleteCookie("token");
    deleteCookie("id");
    fadeOut();
    setTimeout(() => {
      router.reload();
    }, 500);
  };
  return (
    <>
      <div
        ref={topPage}
        className="w-[100%] h-[100vh] bg-backgroundlanding relative object-cover animate__animated animate__fadeIn animate__slow"
      >
        {user?.username === "Kenzinho" ? (
          <>
            <Image src={"/easteregg.jpg"} layout="fill" className="object-cover" />
          </>
        ) : (
          <>
            <video
              autoPlay
              loop
              muted
              className="w-[100%] h-[100vh] object-cover"
            >
              <source src={video[random]} />
            </video>
          </>
        )}

        <div className="absolute w-[100%] h-[100%] top-0 flex text-text flex-col items-center bg-backgroundlanding">
          <header className="z-[1] w-[100%] h-[60px] flex flex-col items-center justify-center relative">
            <div className="w-[80.5%] flex items-center gap-8 mt-3">
              <Image
                src="/Logo.svg"
                alt="Nexus logo"
                width={198}
                height={40}
                className="cursor-pointer"
                priority
              />
              {user?.imageURL && (
                <div className="ml-auto bg-linkpage rounded-[50%] cursor-pointer hover:bg-text ease-linear duration-300 flex items-center justify-center overflow-hidden w-[40px] h-[40px]">
                  <img
                    src={user!.imageURL}
                    alt={user!.username}
                    className="object-cover h-[100%]"
                    onClick={handleClick}
                  />
                </div>
              )}
            </div>
          </header>
          <div className="w-[80%] h-[100%] flex flex-col justify-center sm:mt-[20rem]">
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
              {user ? (
                <>
                  <button
                    className="p-5 bg-primaryhover rounded-lg mt-5 ease-in-out duration-300 font-bebas mr-4 hover:bg-boxcolor hover:border-[1px] transition-all border-[1px] border-transparent animate__animated animate__pulse animate__infinite"
                    onClick={handleClick}
                  >
                    Hey, {user.username} access your Dashboard!
                  </button>
                  <button
                    className="p-5 bg-deletecolor rounded-lg mt-5 ease-in-out duration-300 font-bebas mr-2 transition-all"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="p-4 bg-primaryhover rounded-lg mt-5 ease-in-out duration-300 font-bebas  mr-2 "
                    onClick={handleRegister}
                  >
                    Sign Up Today!
                  </button>
                  <button
                    className="p-4 bg-boxcolor rounded-lg mt-5 ease-in-out duration-300 font-bebas border-[1px] border-hovercard"
                    onClick={handleLogin}
                  >
                    I already have my account
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <CookieConsent
        style={{ background: "" }}
        buttonStyle={{
          borderRadius: "5px",
          padding: "15px",
          color: "#FFFF",
          backgroundColor: "#805BE8",
        }}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </>
  );
};

export default LandingHeader;
