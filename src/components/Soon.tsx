import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.sass";

type IPlatforms = {
  handleClick: () => void;
  bottomPage: any;
};
const Soon = ({ handleClick, bottomPage }: IPlatforms) => {
  return (
    <>
      <div
        ref={bottomPage}
        className="w-[60%] h-fit flex justify-center mx-auto m-4 flex-col items-center to rounded-lg animate__animated animate__fadeIn animate__slow"
      >
        <h1 className="font-bebas text-[4rem] text-text text-center m-4">COMING SOON</h1>
        <ul className="gap-8 flex justify-center py-4 flex-wrap px-4">
        <li className={styles.liimages}>
            <Image 
            src="/epic.png"
            alt="Epic Games Logo"
            width={400}
            height={200}
            className={styles.images}
            priority />
            </li>
            <li className={styles.liimages}>
            <Image 
            src="/playstation.jpg"
            alt="Epic Games Logo"
            layout="fill"
            className={styles.images}
            priority />
            </li>
            <li className={styles.liimages}>
            <Image 
            src="/origin.jpg"
            alt="Origin Logo"
            width={400}
            height={200}
            className={styles.images}
            priority />
            </li>
            <li className={styles.liimages}>
            <Image 
            src="/rockstar.jpg"
            alt="Epic Games Logo"
            width={400}
            height={200}
            className={styles.images}
            priority />
            </li>
            <li className={styles.liimages}>
            <Image 
            src="/uplay.png"
            alt="Epic Games Logo"
            width={400}
            height={200}
            className={styles.images}
            priority />
            </li>
            <li className={styles.liimages}>
            <Image 
            src="/riot.jpg"
            alt="Epic Games Logo"
            width={400}
            height={200}
            className={styles.images}
            priority />
            </li>
            <li className={styles.liimages}>
            <Image 
            src="/gog.jpg"
            alt="GOG Galaxy Logo"
            width={400}
            height={200}
            className={styles.images}
            priority />
            </li>
            <li className={styles.liimages}>
            <Image 
            src="/battle.jpg"
            alt="GOG Galaxy Logo"
            width={400}
            height={200}
            className={styles.images}
            priority />
            </li>
        </ul>
      </div>
    </>
  );
};

export default Soon;
