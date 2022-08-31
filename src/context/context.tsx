import { useRouter } from "next/router";
import React, { createContext, ReactNode } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../services/api";
import { setCookie } from 'cookies-next';

type IContext = {
  onSubmitLogin: (account: IUser) => void;
  onSubmitRegister: (account: object) => void;
};

type INexusProvider = {
  children: ReactNode
}

export type IUser = {
  email: string;
  password: string;
  username?: string;
};

export const NexusContext = createContext<IContext>({} as IContext);

const NexusProvider = ({ children }: INexusProvider) => {
  const navigate = useRouter();
  const onSubmitLogin = (account: FieldValues) => {
    api
      .post("/login", account)
      .then((res) => {
        console.log(res)
        setCookie('token', res.data.accessToken)
        setCookie('name', res.data.user.username)
        setCookie('email', res.data.user.email)
        toast.success("Success Login!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: 1,
        });
        // navigate.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };
  const onSubmitRegister = (account: FieldValues) => {
    api
      .post("/register", account)
      .then((res) => {
        toast.success("Account created successfully!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
          });
      })
      .catch((err) => {
        toast.error(err.response.data, {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toastId: 1,
          });
        });
  };
  return (
    <NexusContext.Provider value={{ onSubmitLogin, onSubmitRegister }}>
      {" "}
      {children}{" "}
    </NexusContext.Provider>
  );
};

export default NexusProvider;
