import Link from "next/link";
import React, { createRef, useContext } from "react";
import SEO from "./SEO";
import styles from "../styles/Home.module.sass";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { MdMail, MdLock } from "react-icons/md";
import { NexusContext } from "../context/NexusContext";
import { IUser } from "../context/NexusContext";

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
          autoComplete="off"
        >
          <Input
            type="email"
            placeholder="email"
            name="email"
            register={register}
          >
            <MdMail color="E1E1E1" size={20} />
          </Input>

          <Input
            type="password"
            placeholder="password"
            name="password"
            register={register}
          >
            <MdLock color="E1E1E1" size={20} />
          </Input>

          <button className={styles.button}>Login</button>
        </form>
        <span className="text-text text-xs">
          Don&apos;t have an account?{" "}
          <Link href="" passHref>
            <a
              className="text-primarycolor underline hover:text-primaryhover ease-linear duration-300"
              onClick={handleOut}
            >
              Register!
            </a>
          </Link>
        </span>
      </div>
    </>
  );
};

export default Login;
