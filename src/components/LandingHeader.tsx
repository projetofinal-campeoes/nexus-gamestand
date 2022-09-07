import React from 'react'
import Image from "next/image"
import { FaUserAlt } from 'react-icons/fa'
import { useAuth } from '../context/AuthContext';

type ILandingPage = {
    topPage: any;
    handleClick: () => void;
    handleRegister: () => void;
    handleLogin: () => void;
}

const LandingHeader = ({handleClick, handleRegister, handleLogin, topPage}:ILandingPage) => {
    const { user } = useAuth()
    const video = ['/wow.mp4', '/bf4.mp4'];
    const random = Math.floor(Math.random() * video.length);
  return (
    <>
    <div
          ref={topPage}
          className="w-[100%] h-[100vh] bg-backgroundlanding relative object-cover"
        >
          <video autoPlay loop muted className="w-[100%] h-[100vh] object-cover">
            <source src={video[random]} />
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
                  priority
                />
                <div className="ml-auto bg-linkpage rounded-[50%] cursor-pointer hover:bg-text ease-linear duration-300 flex items-center justify-center overflow-hidden w-[40px] h-[40px]">
                  { user?.imageURL === undefined || null ? <FaUserAlt className=" text-backgroundlanding" /> : <img src={user!.imageURL} alt={user!.username} className='object-cover h-[100%]'/>}
                  
                </div>
              </div>
            </header>
            <div className="w-[80%] h-[100%] flex flex-col justify-center mt-[15rem]">
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
                {user ? 
                <>
                <button className="p-5 bg-primaryhover rounded-lg mt-5 ease-in-out duration-300 font-bebas mr-2 font-[] hover:bg-boxcolor hover:border-[1px] transition-all border-[1px] border-transparent animate__animated animate__pulse animate__infinite" onClick={handleClick}>
                  Hey, {user.username} access your Dashboard!
                </button>
                </> 
                : 
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
                </button></>}
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default LandingHeader