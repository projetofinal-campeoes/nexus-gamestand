import React, { useContext, useEffect, useState } from "react";
import SEO from "./SEO";
import { FaSteam, FaWindowClose } from "react-icons/fa";
import { SiEpicgames, SiPlaystation, SiXbox } from "react-icons/si";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineEdit, AiOutlineCheck } from "react-icons/ai";
import styles from "../styles/Home.module.sass";
import { Switch } from "@mui/material";
import { NexusContext } from "../context/NexusContext";
import { getCookie } from "cookies-next";
import api from "../services/api";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

type ISwitch = {
  checked?: boolean;
  handleChange?: () => void;
};

const Profile = ({ checked, handleChange }: ISwitch) => {
  const { user, setUser } = useAuth();
  const [userName, setUserName] = useState<string | null>(null);
  const [userImage, setUserImage] = useState<string | null | undefined>(null);
  const [steamUser, setSteamUser] = useState<string | null>(null);
  const [epicUser, setEpicUser] = useState<string | null>(null);
  const [playstationUser, setPlaystationUser] = useState<string | null>(null);
  const [xboxUser, setXboxUser] = useState<boolean>(user!.xbox);

  const handleXbox = async () => {
    const userId = getCookie("id");
    const token = getCookie("token");
    setXboxUser(!xboxUser);
    await api
      .patch(
        `/users/${userId}`,
        { xbox: !xboxUser },
        {
          headers: {
            "Content-Type": "application/json",
            Autorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => console.log(res));

    const newUser = await api.get(`/users/${userId}`);
    setUser(newUser.data);
  };

  useEffect(() => {
    async function handleUserImage() {
      setUserName(user!.username);
      setUserImage(user!.imageURL);
      setSteamUser(user!.steam);
      setEpicUser(user!.epic);
      setPlaystationUser(user!.playstation);
      setXboxUser(user!.xbox);
    }
    handleUserImage();
  }, [user]);

  const { handleUserModalOpen, profileModal } = useContext(NexusContext);
  const [steamEdit, setSteamEdit] = useState(false);
  const [epicEdit, setEpicEdit] = useState(false);
  const [playstationEdit, setPlaystationEdit] = useState(false);
  const [xboxEdit, setXboxEdit] = useState(false);

  const handleSteamEdit = () => {
    setSteamEdit(!steamEdit);
    if (epicEdit) {
      setEpicEdit(false);
    }
    if (playstationEdit) {
      setPlaystationEdit(false);
    }
  };
  const handleEpicEdit = () => {
    setEpicEdit(!epicEdit);
    if (steamEdit) {
      setSteamEdit(false);
    }
    if (playstationEdit) {
      setPlaystationEdit(false);
    }
  };
  const handlePlaystationEdit = () => {
    setPlaystationEdit(!playstationEdit);
    if (steamEdit) {
      setSteamEdit(false);
    }
    if (epicEdit) {
      setEpicEdit(false);
    }
  };

  const handleUserPlatformEdit = async (plataforma: string, valor: string) => {
    const userId = getCookie("id");

    plataforma === "steam" &&
      (await api.patch(`/users/${userId}`, { steam: valor }));

    plataforma === "epic" &&
      (await api.patch(`/users/${userId}`, { epic: valor }));

    plataforma === "playstation" &&
      (await api.patch(`/users/${userId}`, { playstation: valor }));

    const newUser = await api.get(`/users/${userId}`);
    setUser(newUser.data);
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

    await api.patch(`/users/${userId}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const newUser = await api.get(`/users/${userId}`);
    setUser(newUser.data);
  };

  return (
    <section
      ref={profileModal}
      className="fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center z-10 bg-[rgba(0,0,0,0.5)] backdrop-blur-[4px] animate__animated animate__fadeIn"
    >
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
                className="w-[210px] h-[210px] rounded-full object-cover"
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
                      handleUserPlatformEdit("steam", steamUser!);
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
                      handleUserPlatformEdit("epic", epicUser!);
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
                      handleUserPlatformEdit("playstation", playstationUser!);
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
                  checked={xboxUser}
                  onChange={handleXbox}
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
