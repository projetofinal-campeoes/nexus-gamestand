import Link from "next/link";
import React, { useRef } from "react";
import SEO from "./SEO";
import styles from "../styles/Home.module.sass";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { MdMail, MdLock } from "react-icons/md";
import { IUser } from "../context/NexusContext";
import { useAuth } from "../context/AuthContext";
import Image from "next/image"

const Login = () => {
  const navigate = useRouter();
  const { handleLogin } = useAuth()
  const { register, handleSubmit } = useForm<IUser>();
  const container = useRef<HTMLDivElement>(null);
  
  const handleDashboard = () => {
    container.current?.classList.add("animate__animated", "animate__fadeOut");
    setTimeout(() => {
      navigate.push("/");
    }, 500);
  };

  const handleOut = () => {
    container.current?.classList.add("animate__animated", "animate__fadeOut");
    setTimeout(() => {
      navigate.push("/register");
    }, 500);
  };
  return (
    <>
      <SEO title="Login" description="Doidera total" />
      <div
        ref={container}
        className={`${styles.containerlogin} animate__animated animate__fadeIn`}
      >
          <Image
          src="/Logo.svg"
          alt="Nexus logo"
          width={198}
          height={40}
          className="cursor-pointer"
          onClick={handleDashboard}
          priority
        />
        <form
          action=""
          className="flex flex-col justify-center gap-6"
          onSubmit={handleSubmit(handleLogin)}
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
        <span className="text-text text-xs text-center">
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
