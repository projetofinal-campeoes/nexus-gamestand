import { deleteCookie, getCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";
import React from "react";
import Background from "../components/BackgroundInitial";
import Login from "../components/Login";
import api from "../services/api";

const login = () => {
  return (
    <>
      <Background config="items-center justify-center ">
        <Login />
      </Background>
    </>
  );
};

export default login;

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
