import Image from "next/image";
import React from "react";
import SEO from "./SEO";
import { FaSteam, FaWindowClose } from "react-icons/fa";
import { SiEpicgames, SiPlaystation, SiXbox } from "react-icons/si";
import { AiOutlineEdit } from "react-icons/ai";
import styles from "../styles/Home.module.sass";
import { Switch } from "@mui/material";

type ISwitch = {
  checked: boolean;
  handleChange: () => void;
};
const Profile = ({ checked, handleChange }: ISwitch) => {
  return (
    <>
      <SEO title="Profile" description="Profile Modal of Nexus Application" />

      <div className="rounded-3xl flex flex-col align-middle bg-boxcolor px-20 py-12">
        <div className="flex justify-end mb-10 text-primarycolor">
          <FaWindowClose />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className={styles.profileImage}>
            <Image
              src="https://pbs.twimg.com/profile_images/1252798177054298112/TzDKqG4J_400x400.jpg"
              alt="profileImage"
              width={210}
              height={210}
              className="rounded-full"
            />
          </div>

          <h2 className="text-title1 font-bold text-text">Galo de Galochas</h2>
          <div className="flex mt-10 text-text font-bold text-title2 gap-8">
            <div className="border-b-4">
              <p className="flex">Librarys</p>
            </div>
            <div className="border-b-4 border-text">
              <p>Edit profile</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-10">
          <div className={styles.divUser}>
            <FaSteam className={styles.iconGame} />
            <h2 className={styles.gameName}>Steam</h2>
            <p className={styles.usernameProfile}>Ben Gadura</p>
            <AiOutlineEdit className={styles.editIcon} />
          </div>
          <div className={styles.divUser}>
            <SiEpicgames className={styles.iconGame} />
            <h2 className={styles.gameName}>
              Epic Games
            </h2>
            <p className={styles.usernameProfile}>Luwny</p>
            <AiOutlineEdit className={styles.editIcon} />
          </div>
          <div className={styles.divUser}>
            <SiPlaystation className={styles.iconGame} />
            <h2 className={styles.gameName}>
              Playstation
            </h2>
            <p className={styles.usernameProfile}>Ben Gadura</p>
            <AiOutlineEdit className={styles.editIcon} />
          </div>

          <div className="flex items-center relative">
            <SiXbox className={styles.iconGame} />
            <h2 className={styles.gameName}>
              Xbox G.P.
            </h2>
            <div className="flex items-center absolute right-[-17px]">
              <p className="text-headline3 font-medium text-text whitespace-nowrap overflow-hidden text-ellipsis w-[82px] text-left">
                Ben Gadura
              </p>
              <Switch
                className=""
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
