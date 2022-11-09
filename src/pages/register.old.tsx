import { deleteCookie, getCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";
import React from "react";
import Background from "../components/BackgroundInitial";
import Register from "../components/Register";
import api from "../services/api";
const register = () => {
  return (
    <Background config="justify-center items-center">
      <Register />
    </Background>
  );
};

export default register;

interface IServerSideContext {
  req: NextApiRequest;
  res: NextApiResponse;
}

export async function getServerSideProps({ req, res }: IServerSideContext) {
  const id = getCookie("id", { req, res });
  const token = getCookie("token", { req, res });

  if (token) {
    try {
      const { data } = await api.get(`/users/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (data.password) {
        return {
          redirect: {
            permanent: false,
            destination: "/dashboard",
          },
        };
      }
    } catch (error) {
      deleteCookie("token", { req, res });
      deleteCookie("id", { req, res });
    }
  }

  return {
    props: {
      response: null,
    },
  };
}
