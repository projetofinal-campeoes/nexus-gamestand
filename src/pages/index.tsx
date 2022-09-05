import type { NextPage } from "next";
import Background from "../components/Background";
import Loader from "../components/Loader"
import Head from "next/head";


const Home: NextPage = () => {
  return (
    <>
        <Background config="items-center justify-center">
          <Head>
            <title>NEXUS - Carregando</title>
          </Head>
        </Background>
    </>
  );
};

export default Home;
