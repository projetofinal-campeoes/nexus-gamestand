import type { NextPage } from "next";
import Background from "../components/Background";
import Login from "../components/Login";
import styles from '../styles/Home.module.sass'

const Home: NextPage = () => {
  return (
    <>
        <Background config="items-center justify-center">
          <Login />
        </Background>
    </>
  );
};

export default Home;
