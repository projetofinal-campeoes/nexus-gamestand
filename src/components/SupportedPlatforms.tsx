import React from 'react'
import Image from "next/image"

type IPlatforms = {
    handleClick: () => void;
    midPage: any;
}
const SupportedPlatforms = ( { handleClick, midPage }:IPlatforms ) => {
  return (
    <>
    <div ref={midPage} className="w-[100%] h-fit py-8 flex justify-center flex-col items-center bg-[#13151b]">
          <h1 className="font-bebas text-[4rem] text-text text-center">Supported Platforms</h1>
          <div className="gap-8 flex justify-center py-4 flex-wrap px-4">
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
        </>
  )
}

export default SupportedPlatforms