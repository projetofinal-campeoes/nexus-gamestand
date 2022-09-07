import React from 'react'
import Image from "next/image"
import styles from "../styles/Home.module.sass";

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
            className={styles.images}
            onClick={handleClick}
            priority />
            <Image 
            src="/xbox.jpg"
            alt="Epic Games Logo"
            width={400}
            height={200}
            className={styles.images}
            onClick={handleClick}
            priority />
          </div>
        </div>
        </>
  )
}

export default SupportedPlatforms