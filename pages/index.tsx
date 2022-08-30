import type { NextPage } from "next";
import Background from "../components/Background";
import Login from "../components/Login";
import styles from '../styles/Home.module.sass'

const Home: NextPage = () => {
  // verificação se usuário tá logado
  // const token = localStorage.getItem('token')

  // useEffect(() => {
  //   token ? redirecionar dashboard : redirecionar login  
  // }, [token])
  return (
    <>
        <Background config="items-center justify-center">
          <Login />
        </Background>
    </>
  );
};

export default Home;
