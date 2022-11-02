import { useRouter } from "next/router";
import React, { createContext, ReactNode, useRef, useState } from "react";
import { FieldValues } from "react-hook-form";
import api from "../services/api";
import { errorToast, successToast } from "../services/toast";

type IContext = {
  onSubmitRegister: (account: object) => void;
  userModalOpen: boolean;
  handleUserModalOpen: Function;
  setUserModalOpen: Function;
  checked: boolean;
  setChecked: Function;
  profileModal: any;
};

type INexusProvider = {
  children: ReactNode;
};
export type IUser = {
  email: string;
  password: string;
  username?: string;
};

export const NexusContext = createContext<IContext>({} as IContext);

const NexusProvider = ({ children }: INexusProvider) => {
  const [checked, setChecked] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);
  const profileModal = useRef<HTMLDivElement>();

  const handleUserModalOpen = () => {
    profileModal.current?.classList.add(
      "animate__animated",
      "animate__fadeOut"
    );
    setTimeout(() => {
      setUserModalOpen(!userModalOpen);
    }, 500);
  };

  const navigate = useRouter();

  const onSubmitRegister = (account: FieldValues) => {
    delete account.confirmPassword;
    account.steam = null;
    account.epic = null;
    account.playstation = null;
    account.xbox = false;

    api
      .post("/register", account)
      .then(() => {
        successToast("Success Register!", 1000);
        navigate.push("/login");
      })

      .catch(({ response: { data: error } }) => {
        errorToast(error, 2500);
      });
  };
  return (
    <NexusContext.Provider
      value={{
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
