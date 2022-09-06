import React from 'react'
import Image from "next/image"

type IPlatforms = {
    handleClick: () => void;
    bottomPage: any;
}
const Creators = ( { handleClick, bottomPage }:IPlatforms ) => {
  return (
    <>
    <div ref={bottomPage} className="w-[100%] h-fit flex justify-center flex-col items-center bg-[#13151b]">
          <h1 className="font-bebas text-[4rem] text-text text-center">PROJECT CREATORS</h1>
          <div className="gap-8 flex justify-center py-4 flex-wrap px-4">
          <Image 
            src="/adam.jpg"
            alt="Epic Games Logo"
            width={200}
            height={200}
            className="cursor-pointer rounded-lg"
            onClick={handleClick}
            priority />
            <Image 
            src="/yan.jpg"
            alt="Epic Games Logo"
            width={200}
            height={200}
            className="cursor-pointer rounded-lg"
            onClick={handleClick}
            priority />
            <Image 
            src="/welton.jpg"
            alt="Epic Games Logo"
            width={200}
            height={200}
            className="cursor-pointer rounded-lg"
            onClick={handleClick}
            priority />
            <Image 
            src="/katya.jpeg"
            alt="Epic Games Logo"
            width={200}
            height={200}
            className="cursor-pointer rounded-lg"
            onClick={handleClick}
            priority />
          </div>
        </div>
        </>
  )
}

export default Creators