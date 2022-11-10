import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import SEO from "./SEO";
import styles from "../styles/Home.module.sass";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { MdMail, MdLock } from "react-icons/md";
import { IUser } from "../context/NexusContext";
import { useAuth } from "../context/AuthContext";
import Image from "next/image";
import Loader from "./Loader";
import { FaGoogle } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const navigate = useRouter();
  const { handleLogin } = useAuth();
  const { register, handleSubmit } = useForm<IUser>();
  const container = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();

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

  useEffect(() => {
    navigate.events.on("routeChangeStart", () => {
      setIsLoading(true);
    });
  }, []);

  return (
    <>
      <SEO title="Login" description="Doidera total" />
      {isLoading ? (
        <Loader />
      ) : (
        <div
          ref={container}
          className={`${styles.containerlogin} animate__animated animate__fadeIn`}
        >
          <Image
            src="/nexus.logo.png"
            alt="Nexus logo"
            width={198}
            height={40}
            className="cursor-pointer"
            priority
          />
          {session ? (
            <div className="flex flex-col items-center align-center gap-4">
              <img
                className="rounded-full"
                src={session.user.image}
                alt={`Foto do ${session.user.name}`}
              />
              <p className="text-text text-[12px] mt-2">
                {" "}
                Hey, {session.user.name}, seems like you're already logged in!
              </p>
              <div>
                <button className="p-5 bg-primaryhover rounded-lg mt-5 ease-in-out duration-300 font-bebas mr-4 hover:bg-boxcolor hover:border-[1px] transition-all border-[1px] border-transparent animate__animated animate__pulse animate__infinite border-text text-text">
                  Access your dashboard
                </button>
                <button
                  onClick={() => signOut()}
                  className="p-5 bg-deletecolor rounded-lg mt-5 ease-in-out duration-300 font-bebas mr-4 hover:bg-boxcolor hover:border-[1px] transition-all border-[1px] border-transparent border-text text-text"
                >
                  Not you? Logout
                </button>
              </div>
            </div>
          ) : (
            <>
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
              <span className="text-defaulttextdark text-xs text-center">
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
              {/* <span className="text-text text-xs text-center flex justify-center flex-col items-center gap-2">
                Log in with
                <FaGoogle
                  onClick={() => signIn()}
                  className="cursor-pointer text-[30px]"
                />
              </span> */}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Login;
