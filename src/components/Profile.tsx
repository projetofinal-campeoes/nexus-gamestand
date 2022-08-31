import Image from "next/image";
import React from "react";
import SEO from "./SEO";
import { FaSteam, FaWindowClose } from "react-icons/fa";
import { SiEpicgames, SiPlaystation, SiXbox } from "react-icons/si";
import { AiOutlineEdit } from "react-icons/ai";
import styles from "../styles/Home.module.sass";
import { Switch } from "@mui/material";

const Profile = () => {
  return (
    <>
      <SEO title="Profile" description="Profile Modal of Nexus Application" />
      <div className="rounded-3xl flex flex-col align-middle bg-boxcolor px-20 py-12">
        <div>
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
            <h2 className="text-title1 font-bold text-text">
              Galo de Galochas
            </h2>
            <div className="flex mt-10 text-text font-bold text-title2 ">
              <div className="border-b-4">
                <p className="flex">Librarys</p>
              </div>
              <div className="border-b-4 border-text">
                <p>Edit profile</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-10">
            <div className="flex items-center">
              <FaSteam className="text-text w-[50px] h-[50px] mr-2" />
              <h2 className="text-title2 text-text font-bold mr-6">Steam</h2>
              <p className="text-headline3 font-medium text-text mr-6">
                Ben Gadura
              </p>
              <AiOutlineEdit className="text-text w-6 h-6" />
            </div>
            <div className="flex items-center">
              <SiEpicgames className="text-text w-[50px] h-[50px] mr-2" />
              <h2 className="text-title2 text-text font-bold mr-6">
                Epic Games
              </h2>
              <p className="text-headline3 font-medium text-text mr-6">Galo</p>
              <AiOutlineEdit className="text-text w-6 h-6" />
            </div>
            <div className="flex items-center">
              <SiPlaystation className="text-text w-[50px] h-[50px] mr-2" />
              <h2 className="text-title2 text-text font-bold mr-6">
                Playstation
              </h2>
              <p className="text-headline3 font-medium text-text mr-6">
                Ben Gadura
              </p>
              <AiOutlineEdit className="text-text w-6 h-6" />
            </div>
            <div className="flex items-center">
              <SiXbox className="text-text w-[50px] h-[50px] mr-2" />
              <h2 className="text-title2 text-text font-bold mr-6">
                Xbox Games Pass
              </h2>
              <p className="text-headline3 font-medium text-text mr-6">
                Ben Gadura
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
