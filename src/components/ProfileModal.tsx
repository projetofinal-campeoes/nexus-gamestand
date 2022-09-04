import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import SEO from "./SEO";
import { FaSteam, FaWindowClose } from "react-icons/fa";
import { SiEpicgames, SiPlaystation, SiXbox } from "react-icons/si";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import styles from "../styles/Home.module.sass";
import { Switch } from "@mui/material";
import { NexusContext } from "../context/NexusContext";
import { getCookie, setCookie } from "cookies-next";
import api from "../services/api";

type ISwitch = {
  checked?: boolean;
  handleChange?: () => void;
};

const Profile = ({ checked, handleChange }: ISwitch) => {
  const [userImage, setUserImage] = useState(getCookie("userImage"));
  const [steamUser, setSteamUser] = useState("");
  const [epicUser, setEpicUser] = useState("");
  const [playstationUser, setPlaystationUser] = useState("");
  const [xboxUser, setXboxUser] = useState("");
  useEffect(() => {
    async function handleUserImage() {
      const userId = getCookie("id");
      const userToken = getCookie("token");
      const user = await api.get(`/users/${userId}`, {
        headers: {
          authorization: `Bearer ${userToken}`,
        },
      });
      setCookie("userImage", user.data.userImage);
      setUserImage(getCookie("userImage"));
      setSteamUser(user.data.steam);
      setEpicUser(user.data.epic);
      setPlaystationUser(user.data.playstation);
      setXboxUser(user.data.xbox);
    }
    handleUserImage();
  }, []);
  const username = getCookie("name");
  const { userModalOpen, handleUserModalOpen, profileModal } = useContext(NexusContext);

  return (
    <section ref={profileModal} className="fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center z-10 bg-[rgba(0,0,0,0.5)] backdrop-blur-[2px] animate__animated animate__fadeIn">
      <SEO title="Profile" description="Profile Modal of Nexus Application" />

      <div className="w-[500px] rounded-3xl flex flex-col align-middle bg-boxcolor px-8 py-12 sm:px-20">
        <div className="flex justify-end mb-10 text-primarycolor ">
          <FaWindowClose
            className="w-5 h-5 hover:cursor-pointer hover:text-primaryhover ease-linear duration-300"
            onClick={() => handleUserModalOpen()}
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className={styles.profileImage}>
            {userImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`${userImage}`}
                alt="userImage"
                className="w-[210px] h-[210] rounded-full"
              />
            ) : (
              <FaUserAlt className="text-text w-[100%] h-[100%]  rounded-full pt-1"/>
            )}
          </div>

          <h2 className="text-center text-title1 font-bold text-text">
            {username}
          </h2>
          <div className="flex mt-10 text-text font-bold text-title2 gap-8">
            <div className="flex">
              <div className=" h-[100%] flex">
                <button className="px-4 border-primarycolor text-primarycolor border-b-4 text-left w-[100%]">
                  Library&apos;s
                </button>
              </div>
              <div className=" h-[100%] flex">
                <button className="border-text border-b-4 text-right px-4">
                  Edit profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-10">
          <div className={styles.divUser}>
            <FaSteam className={styles.iconGame} />
            <h2 className={styles.gameName}>Steam</h2>
            <p className={styles.usernameProfile}>{steamUser}</p>
            <AiOutlineEdit className={styles.editIcon} />
          </div>
          <div className={styles.divUser}>
            <SiEpicgames className={styles.iconGame} />
            <h2 className={styles.gameName}>Epic Games</h2>
            <p className={styles.usernameProfile}>{epicUser}</p>
            <AiOutlineEdit className={styles.editIcon} />
          </div>
          <div className={styles.divUser}>
            <SiPlaystation className={styles.iconGame} />
            <h2 className={styles.gameName}>Playstation</h2>
            <p className={styles.usernameProfile}>{playstationUser}</p>
            <AiOutlineEdit className={styles.editIcon} />
          </div>

          <div className="flex items-center relative">
            <SiXbox className={styles.iconGame} />
            <h2 className={styles.gameName}>Xbox G.P.</h2>
            <div className="flex items-center absolute right-[-17px]">
              <p className="text-headline3 font-medium text-text whitespace-nowrap overflow-hidden text-ellipsis w-[82px] text-left">
                {xboxUser}
              </p>
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
