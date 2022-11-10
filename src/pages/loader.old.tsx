import type { NextPage } from "next";
import Background from "../components/BackgroundInitial";
import Loader from "../components/Loader";
import Head from "next/head";

const Home: NextPage = () => {
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
