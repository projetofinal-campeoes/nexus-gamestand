import Link from "next/link";
import React, { createRef, useContext } from "react";
import SEO from "./SEO";
import styles from "../styles/Home.module.sass";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { IUser } from "../context/NexusContext";
import { NexusContext } from "../context/NexusContext";

const Register = () => {
  const navigate = useRouter()
  const container = createRef<HTMLDivElement>()
  const { onSubmitRegister } = useContext(NexusContext)
  const {register, handleSubmit} = useForm()

  const handleOut = () => {
    container.current?.classList.add('animate__animated', 'animate__fadeOut')
    setTimeout(() => {
      navigate.push('/login')
    }, 300);
  }

  return (
    <>
      <SEO title="Register" description="Doidera total" />

      <div ref={container} className={`${styles.containerlogin} animate__animated animate__fadeIn`} >
        <h1 className="text-primarycolor underline font-bold size text-2xl mb-5">Joins Us!</h1>
        <form action="" className="flex flex-col justify-center gap-6" onSubmit={handleSubmit(onSubmitRegister)}>
          <input
            type="text"
            {...register('username')}
            placeholder="username"
            className={styles.input}
          />
          <input
            type="email"
            {...register('email')}
            placeholder="email"
            className={styles.input}
          />
          <input
            type="password"
            {...register('password')}
            placeholder="password"
            className={styles.input}
          />
          <input
            type="password"
            placeholder="confirm password"
            className={styles.input}
          />
          <button className={styles.button}>Register</button>
        </form>
        <span className='text-text text-xs'>
          Already have an account?{" "}
          <Link href='' passHref>
            <a className="text-primarycolor underline" onClick={handleOut}>Login!</a>
          </Link>
        </span>
      </div>
    </>
  );
};
export default Register;
