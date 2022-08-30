import Link from "next/link";
import React, { createRef } from "react";
import SEO from "./SEO";
import styles from "../styles/Home.module.sass";
import { useRouter } from "next/router";

const Register = () => {
  const navigate = useRouter()
  const container = createRef<HTMLDivElement>()

  const handleOut = () => {
    container.current?.classList.add('animate__animated', 'animate__fadeOut')
    setTimeout(() => {
      navigate.push('/login')
    }, 300);
  }

  return (
    <>
      <SEO title="Register" description="Doidera total" />

      <div id="register" className={`${styles.containerlogin} animate__animated animate__fadeIn`} >
        <h1 className="text-primarycolor underline font-bold size text-2xl">Joins Us!</h1>
        <form action="" className="flex flex-col justify-center gap-6 w-[80%]">
          <input
            type="text"
            placeholder="username"
            className={styles.input}
          />
          <input
            type="email"
            placeholder="email"
            className={styles.input}
          />
          <input
            type="password"
            placeholder="password"
            className={styles.input}
          />
          <input
            type="password"
            placeholder="confirm password"
            className={styles.input}
          />
          <button className={styles.button}>Login</button>
        </form>
        <span className='text-text text-xs'>
          Already have an account?{" "}
            <a className="text-primarycolor underline" onClick={handleOut}>Login!</a>
        </span>
      </div>
    </>
  );
};
export default Register;
