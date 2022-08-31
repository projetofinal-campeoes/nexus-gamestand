import Link from "next/link";
import React, { createRef, useContext } from "react";
import SEO from "./SEO";
import styles from "../styles/Home.module.sass";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { IUser } from "../context/context";
import { NexusContext } from "../context/context";
import Input from './Input';
import { MdLock, MdMail, MdPerson } from "react-icons/md";

const Register = () => {
    const navigate = useRouter()
    const container = createRef<HTMLDivElement>()
    const { onSubmitRegister } = useContext(NexusContext)
    const { register, handleSubmit } = useForm()

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
                    <Input type='text' placeholder="username" name='username' register={register}>
                        <MdPerson color="E1E1E1" size={20} />
                    </Input>
                    <Input type='text' placeholder="email" name='email' register={register}>
                        <MdMail color="E1E1E1" size={20} />
                    </Input>
                    <Input type='password' placeholder="password" name='password' register={register}>
                        <MdLock color="E1E1E1" size={20} />
                    </Input>
                    <Input type='password' placeholder="confirm password" name='confirmPassword' register={register}>
                        <MdLock color="E1E1E1" size={20} />
                    </Input>
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
