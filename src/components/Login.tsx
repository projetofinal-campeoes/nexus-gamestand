import Link from "next/link";
import React, { createRef, useContext } from "react";
import SEO from "./SEO";
import styles from "../styles/Home.module.sass";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { NexusContext } from "../context/context";
import { IUser } from "../context/context";

const Login = () => {
  const navigate = useRouter();
  const { onSubmitLogin } = useContext(NexusContext);
  const { register, handleSubmit } = useForm<IUser>();
  const container = createRef<HTMLDivElement>();

  const handleOut = () => {
    container.current?.classList.add("animate__animated", "animate__fadeOut");
    setTimeout(() => {
      navigate.push("/register");
    }, 300);
  };
  return (
    <>
      <SEO title="Login" description="Doidera total" />
      <div
        ref={container}
        className={`${styles.containerlogin} animate__animated animate__fadeIn`}
      >
        <h1 className="text-primarycolor underline font-bold size text-2xl mb-5">
          Let&apos;s Connect!
        </h1>
        <form
          action=""
          className="flex flex-col justify-center gap-6"
          onSubmit={handleSubmit(onSubmitLogin)}
        >
          <input
            type="text"
            {...register("email")}
            placeholder="email"
            className={styles.input}
          />
          <input
            type="password"
            {...register("password")}
            placeholder="password"
            className={styles.input}
          />
          <button className={styles.button}>Login</button>
        </form>
        <span className="text-text text-xs">
          Don&apos;t have an account?{" "}
          <Link href="" passHref>
            <a className="text-primarycolor underline" onClick={handleOut}>
              Register!
            </a>
          </Link>
        </span>
      </div>
    </>
  );
};

export default Login;
