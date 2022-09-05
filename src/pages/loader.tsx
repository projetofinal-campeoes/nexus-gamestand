import type { NextPage } from "next";
import Background from "../components/Background";
import Login from "../components/Login";
import styles from '../styles/Home.module.sass'
import Loader from "../components/Loader"
import { useContext, useEffect } from "react";
import { hasCookie } from "cookies-next";
import { useRouter } from "next/router";
import { NexusContext } from "../context/NexusContext";
import Head from "next/head";


const Home: NextPage = () => {
//   const { isLoggedIn } = useContext(NexusContext);
//   const router = useRouter()

//   useEffect(() => {
//     setTimeout(() => {
//       !isLoggedIn ? router.push('/login') : router.push('/dashboard')
//     }, 1000);
//   }, [])  
  return (
    <>
        <Background config="items-center justify-center">
          <Head>
            <title>NEXUS - Carregando</title>
          </Head>
          <Loader />
        </Background>
    </>
  );
};

export default Home;
