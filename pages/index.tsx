import type { NextPage } from "next";
import Background from "../components/Background";
import Login from "../components/Login";
const Home: NextPage = () => {
  return (
    <>
      <main>
        <Background>
          <Login />
        </Background>
      </main>
    </>
  );
};

export default Home;
