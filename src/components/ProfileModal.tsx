import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import SEO from "./SEO";
import { FaSteam, FaWindowClose } from "react-icons/fa";
import { SiEpicgames, SiPlaystation, SiXbox } from "react-icons/si";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineEdit, AiOutlineCheck } from "react-icons/ai";
import styles from "../styles/Home.module.sass";
import { Switch } from "@mui/material";
import { NexusContext } from "../context/NexusContext";
import { getCookie, setCookie } from "cookies-next";
import api from "../services/api";
import Input from "./Input";
import { type } from "os";
import { useForm } from "react-hook-form";

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
      setCookie("userImage", user.data.imageURL);
      setUserImage(getCookie("userImage"));
      setSteamUser(user.data.steam);
      setEpicUser(user.data.epic);
      setPlaystationUser(user.data.playstation);
      setXboxUser(user.data.xbox);
    }
    handleUserImage();
  }, []);
  const username = getCookie("name");
  const [userName, setUserName] = useState(getCookie("name"));

  const { userModalOpen, handleUserModalOpen } = useContext(NexusContext);
  const [steamEdit, setSteamEdit] = useState(false);
  const [epicEdit, setEpicEdit] = useState(false);
  const [playstationEdit, setPlaystationEdit] = useState(false);
  const [xboxEdit, setXboxEdit] = useState(false);

  const handleSteamEdit = () => {
    setSteamEdit(!steamEdit);
  };
  const handleEpicEdit = () => {
    setEpicEdit(!epicEdit);
  };
  const handlePlaystationEdit = () => {
    setPlaystationEdit(!playstationEdit);
  };

  const handleUserPlatformEdit = (plataforma: string, valor: string) => {
    const userId = getCookie("id");
    const token = getCookie("token");

    plataforma === "steam" &&
      api.patch(
        `/users/${userId}`,
        { steam: valor },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

    plataforma === "epic" &&
      api.patch(
        `/users/${userId}`,
        { epic: valor },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

    plataforma === "playstation" &&
      api.patch(
        `/users/${userId}`,
        { playstation: valor },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
  };
  const [changeModalSection, setChangeModalSection] = useState<boolean>(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    for (let key in data) {
      data[key] === "" && delete data[key];
    }
    const userId = getCookie("id");
    const token = getCookie("token");
    await api.patch(`/users/${userId}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    await api
      .get(`/users/${userId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((user) => {
        setCookie("userImage", user.data.imageURL);
        setUserImage(getCookie("userImage"));
        setSteamUser(user.data.steam);
        setEpicUser(user.data.epic);
        setPlaystationUser(user.data.playstation);
        setXboxUser(user.data.xbox);
        data.username && setUserName(data.username);
        data.username && setCookie("name", data.username);
        data.image && setCookie("userImage", data.image);
        data.image && setUserImage(data.imageURL);
      });
  };

  return (
    <section className="fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center z-10 bg-[rgba(0,0,0,0.5)] backdrop-blur-[2px]">
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
                className="w-[210px] h-[210px] rounded-full"
              />
            ) : (
              <FaUserAlt className="text-text w-[100%] h-[100%]  rounded-full pt-1" />
            )}
          </div>
          <h2 className="text-center text-title1 font-bold text-text">
            {userName}
          </h2>
          <nav className="mt-10 flex w-[100%] font-bold text-title2">
            <button
              className={`${
                changeModalSection ? "text-[#E1E1E1]" : "text-primarycolor"
              } border-b-[3px] font-bold mb-5 w-[50%]`}
              onClick={() => setChangeModalSection(false)}
            >
              Library&apos;s
            </button>
            <button
              className={`${
                changeModalSection ? "text-primarycolor " : "text-[#E1E1E1]"
              } border-b-[3px] font-bold  mb-5 w-[50%]`}
              onClick={() => setChangeModalSection(true)}
            >
              Edit Profile
            </button>
          </nav>
        </div>
        {!changeModalSection ? (
          <div className="flex flex-col gap-4 mt-10">
            <div className={styles.divUser}>
              {steamEdit === false ? (
                <>
                  <FaSteam className={styles.iconGame} />
                  <h2 className={styles.gameName}>Steam</h2>
                  <p className={styles.usernameProfile}>{steamUser}</p>
                  <AiOutlineEdit
                    className={styles.editIcon}
                    onClick={handleSteamEdit}
                  />
                </>
              ) : (
                <div className="flex items-center m-auto gap-4">
                  <label className={styles.inputBox}>
                    <FaSteam className="text-[25px]" />

                    <input
                      type="text"
                      placeholder="username"
                      className={styles.input}
                      onChange={(e: any) => setSteamUser(e.target.value)}
                    />
                  </label>

                  <AiOutlineCheck
                    className={styles.editIcon}
                    onClick={() => {
                      handleUserPlatformEdit("steam", steamUser);
                      handleSteamEdit();
                    }}
                  />
                </div>
              )}
            </div>
            <div className={styles.divUser}>
              {epicEdit === false ? (
                <>
                  <SiEpicgames className={styles.iconGame} />
                  <h2 className={styles.gameName}>Epic Games</h2>
                  <p className={styles.usernameProfile}>{epicUser}</p>
                  <AiOutlineEdit
                    className={styles.editIcon}
                    onClick={handleEpicEdit}
                  />
                </>
              ) : (
                <div className="flex items-center m-auto gap-4">
                  <label className={styles.inputBox}>
                    <SiEpicgames className="text-[25px]" />
                    <input
                      type="text"
                      placeholder="username"
                      className={styles.input}
                      onChange={(e: any) => setEpicUser(e.target.value)}
                    />
                  </label>
                  <AiOutlineCheck
                    className={styles.editIcon}
                    onClick={() => {
                      handleUserPlatformEdit("epic", epicUser);
                      handleEpicEdit();
                    }}
                  />
                </div>
              )}
            </div>
            <div className={styles.divUser}>
              {playstationEdit === false ? (
                <>
                  <SiPlaystation className={styles.iconGame} />
                  <h2 className={styles.gameName}>Playstation</h2>
                  <p className={styles.usernameProfile}>{playstationUser}</p>
                  <AiOutlineEdit
                    className={styles.editIcon}
                    onClick={handlePlaystationEdit}
                  />
                </>
              ) : (
                <div className="flex items-center m-auto gap-4">
                  <label className={styles.inputBox}>
                    <SiPlaystation className="text-[25px]" />
                    <input
                      type="text"
                      placeholder="username"
                      className={styles.input}
                      onChange={(e: any) => setPlaystationUser(e.target.value)}
                    />
                  </label>
                  <AiOutlineCheck
                    className={styles.editIcon}
                    onClick={() => {
                      handleUserPlatformEdit("playstation", playstationUser);
                      handlePlaystationEdit();
                    }}
                  />
                </div>
              )}
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
        ) : (
          <form
            className="flex flex-col gap-4 items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className={styles.inputBox}>
              <input
                type="text"
                placeholder="username"
                className={styles.input}
                autoComplete="off"
                {...register("username")}
              />
            </label>
            <label className={styles.inputBox}>
              <input
                type="text"
                placeholder="email"
                className={styles.input}
                autoComplete="off"
                {...register("email")}
              />
            </label>
            <label className={styles.inputBox}>
              <input
                type="text"
                placeholder="image URL"
                className={styles.input}
                autoComplete="off"
                {...register("imageURL")}
              />
            </label>
            <label className={styles.inputBox}>
              <input
                type="password"
                placeholder="password"
                className={styles.input}
                autoComplete="off"
                {...register("password")}
              />
            </label>
            <button
              type="submit"
              className="bg-primarycolor rounded-lg shadow-md py-4 px-8 w-[92%] text-text font-medium hover:bg-primaryhover ease-linear duration-300"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
export default Profile;
