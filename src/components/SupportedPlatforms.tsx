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
    <div ref={midPage} className="w-[100%] h-fit py-8 flex justify-center flex-col items-center bg-[#13151b] animate__animated animate__fadeIn animate__slow">
          <h1 className="font-bebas text-[4rem] text-text text-center">Supported Platforms</h1>
          <ul className="gap-8 flex justify-center py-4 flex-wrap px-4">
          <li className={styles.liimages}>
            <Image 
            src="/steam.jpg"
            alt="Epic Games Logo"
            width={400}
            height={200}
            className={styles.images}
            onClick={handleClick}
            priority />
            </li>
            <li className={styles.liimages}>
            <Image 
            src="/xbox.jpg"
            alt="Epic Games Logo"
            width={400}
            height={200}
            className={styles.images}
            onClick={handleClick}
            priority />
            </li>
          </ul>
        </div>
        </>
  )
}

export default SupportedPlatforms