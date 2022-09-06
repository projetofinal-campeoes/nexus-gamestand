import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { createContext, ReactNode, useContext, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import api from '../services/api';
import { errorToast, successToast } from '../services/toast';

interface IProvider {
  children: ReactNode;
}

interface IAuthContext {
    user: IUser | null,
    setUser: (user: IUser) => void,
    isLoading: boolean,
    setIsLoading: (state: boolean) => void,
    handleLogin: (account: FieldValues) => void,
    handleLogout: () => void
}

interface IUser {
  username: any;
  email: string;
  password: string;
  steam: string | null;
  epic: string | null;
  playstation: string | null;
  xbox: boolean;
  imageURL?: any;
}

interface IError {
  response: {
    data: {
      error: string | Error;
    };
  };
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export default function AuthProvider({ children }: IProvider) {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();

  const handleLogin = async (account: FieldValues) => {
    try {
      const {
        data: {
          accessToken,
          user: { id },
        },
      } = await api.post("/login", account);
      setCookie("token", accessToken);
      setCookie("id", id);
      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

      const { data } = await api.get(`/users/${id}`);
      setUser(data);
      successToast("Success Login!", 1000);
      router.push("/dashboard");
    } catch ({ response: { data: error } }: IError | any) {
      errorToast(String(error), 2500);
    }
  };

  const handleLogout = () => {
    deleteCookie("token");
    deleteCookie("id");

    router.push("/login");
  };

    return(
        <AuthContext.Provider value={{ user, setUser, isLoading, setIsLoading, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
