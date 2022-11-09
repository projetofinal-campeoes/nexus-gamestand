import { deleteCookie, getCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";
import React from "react";
import BackgroundDashboard from "../components/BackgroundDashboard";
import Background from "../components/BackgroundInitial";
import GeralContainer from "../components/GeralContainer";
import Login from "../components/Login";
import SEO from "../components/SEO";
import api from "../services/api";

const login = () => {
  return (
    <>
      <BackgroundDashboard config="flex flex-col">
        <SEO
          title="Dashboard"
          description="The NEXUS App simplifies your access to your games, unifying all platforms into one."
        />
        <div className="geral-content bg-[#0F1324] z-10 w-[90vw] h-[85vh] flex items-center justify-center rounded-[50px]">
          <Login />
        </div>
      </BackgroundDashboard>
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
