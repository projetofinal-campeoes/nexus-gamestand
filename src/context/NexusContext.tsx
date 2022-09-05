import { useRouter } from "next/router";
import React, { createContext, ReactNode, useEffect, useRef, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../services/api";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { errorToast, successToast } from "./../services/toast";

type IContext = {
  onSubmitLogin: (account: IUser) => void;
  onSubmitRegister: (account: object) => void;
  isLoggedIn: boolean;
  userModalOpen: boolean;
  handleUserModalOpen: Function;
  setUserModalOpen: Function;
  checked: boolean;
  setChecked: Function;
  profileModal: any
};

//procurar a tipagem correta do useRef ↑

type INexusProvider = {
  children: ReactNode;
};
export type IUser = {
  email: string;
  password: string;
  username?: string;
};
type IUserLogin = {
  data: {
    accessToken: string;
    user: {
      username: string;
      email: string;
      id: number;
    };
  };
};

export const NexusContext = createContext<IContext>({} as IContext);

const NexusProvider = ({ children }: INexusProvider) => {
  const [checked, setChecked] = React.useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);
  const profileModal = useRef<HTMLDivElement>()

  const handleUserModalOpen = () => {
    profileModal.current?.classList.add("animate__animated", "animate__fadeOut")
    setTimeout(() => {
      setUserModalOpen(!userModalOpen);
    }, 500);
  };

  
  const navigate = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    hasCookie("token") ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, []);

  const onSubmitLogin = (account: FieldValues) => {
    api
      .post("/login", account)
      .then((res: IUserLogin) => {
        setCookie("token", res.data.accessToken);
        setCookie("name", res.data.user.username);
        setCookie("email", res.data.user.email);
        setCookie("id", res.data.user.id);
        successToast("Success Login!", 1000);
        navigate.push("/dashboard");
      })
      .catch(({ response: { data: error } }) => {
        errorToast(error, 2500);
      });
  };
  const onSubmitRegister = (account: FieldValues) => {
    delete account.confirmPassword;
    account.steam = null;
    account.epic = null;
    account.playstation = null;
    account.xbox = false;
    console.log(account);
    api
      .post("/register", account)
      .then((res) => {
        setCookie("token", res.data.accessToken);
        setCookie("name", res.data.user.username);
        setCookie("email", res.data.user.email);
        setCookie("id", res.data.user.id);
        successToast("Success Register!", 1000);
        navigate.push("/dashboard");
      })

      .catch(({ response: { data: error } }) => {
        errorToast(error, 2500);
      });
  };
  return (
    <NexusContext.Provider
      value={{
        isLoggedIn,
        onSubmitLogin,
        onSubmitRegister,
        userModalOpen,
        handleUserModalOpen,
        profileModal,
        checked,
        setChecked,
        setUserModalOpen,
      }}
    >
      {" "}
      {children}{" "}
    </NexusContext.Provider>
  );
};

export default NexusProvider;
