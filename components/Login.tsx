import Link from "next/link";
import React from "react";
import SEO from "./SEO";

const Login = () => {
  return (
    <>
      <SEO title="Login" description="Doidera total" />

      <div className="bg-boxcolor h-[415px] w-[378px] rounded-lg gap-6 flex flex-col items-center">
        <h1>Let&apos;s Connect!</h1>
        <form action="" className="flex flex-col justify-center gap-6 w-[80%]">
          <input
            type="text"
            placeholder="email"
            className="rounded-lg p-2 bg-inputbackground placeholder-placeholder shadow-md hover:bg-violet-600"
          />
          <input
            type="password"
            placeholder="password"
            className="rounded-lg p-2 bg-inputbackground placeholder-placeholder shadow-md focus:ring-sky-500"
          />
          <button className="bg-primarycolor hover:bg-placeholder">Login</button>
        </form>
        <span>
          Don&apos;t have an account?{" "}
          <Link href="/register" passHref>
            <a>Register!</a>
          </Link>
        </span>
      </div>
    </>
  );
};

export default Login;
