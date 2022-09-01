import { useRouter } from "next/router";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../services/api";
import { hasCookie, setCookie } from 'cookies-next';
import { errorToast, successToast } from './../services/toast';

type IContext = {
    onSubmitLogin: (account: IUser) => void;
    onSubmitRegister: (account: object) => void;
    isLoggedIn: boolean;
};
type INexusProvider = {
    children: ReactNode
}
export type IUser = {
    email: string;
    password: string;
    username?: string;
};
type IUserLogin = {
    data: {
        accessToken: string,
        user: {
            username: string,
            email: string,
        }
    }
}

export const NexusContext = createContext<IContext>({} as IContext);

const NexusProvider = ({ children }: INexusProvider) => {
    const navigate = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

    useEffect(() => {
    hasCookie('token') ? setIsLoggedIn(true) : setIsLoggedIn(false)
    }, [])

    const onSubmitLogin = (account: FieldValues) => {
        api
            .post("/login", account)
            .then((res: IUserLogin) => {
                setCookie('token', res.data.accessToken)
                setCookie('name', res.data.user.username)
                setCookie('email', res.data.user.email)
                successToast("Success Login!", 1000)
                navigate.push("/dashboard");
            })
            .catch(({ response: { data: error } }) => {
                errorToast(error, 2500)
            });
    };
    const onSubmitRegister = (account: FieldValues) => {
        delete account.confirmPassword
        api
            .post("/register", account)
            .then(() => {
                successToast("Success Register!", 1000)
            })
            .catch(({ response: { data: error } }) => {
                errorToast(error, 2500)
            });
    };
    return (
        <NexusContext.Provider value={{ isLoggedIn, onSubmitLogin, onSubmitRegister }}>
            {" "}
            {children}{" "}
        </NexusContext.Provider>
    );
};

export default NexusProvider;
