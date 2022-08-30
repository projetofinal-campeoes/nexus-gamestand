import Link from "next/link";
import React, { createRef } from "react";
import SEO from "./SEO";
import styles from "../styles/Home.module.sass";
import { useRouter } from 'next/router';

const Login = () => {
  const navigate = useRouter()
  const container = createRef<HTMLDivElement>()
  const handleOut = () => {
    container.current?.classList.add('animate__animated', 'animate__fadeOut')
    setTimeout(() => {
      navigate.push('/register')
    }, 300);
  }
  return (
    <>
      <SEO title="Login" description="Doidera total" />
      <div ref={container} className={`${styles.containerlogin} animate__animated animate__fadeIn`}>
        <h1 className="text-primarycolor underline font-bold size text-2xl">Let&apos;s Connect!</h1>
        <form action="" className="flex flex-col justify-center gap-6 w-[80%]">
          <input
            type="text"
            placeholder="email"
            className={styles.input}
          />
          <input
            type="password"
            placeholder="password"
            className={styles.input}
          />
          <button className={styles.button}>Login</button>
        </form>
        <span className='text-text text-xs'>
          Don&apos;t have an account?{" "}
              <a className="text-primarycolor underline" onClick={handleOut}>Register!</a>
        </span>
      </div>
    </>
  );
};

export default Login;
