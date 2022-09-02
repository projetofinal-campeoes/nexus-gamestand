import styles from "../styles/Home.module.sass";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import Input from "./Input";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useContext } from "react";
import { NexusContext } from "../context/NexusContext";

export default function Header() {
  const { handleUserModalOpen } = useContext(NexusContext);
  const router = useRouter();
  const handleClick = () => {
    router.push('/dashboard')
  }
  const { register, handleSubmit } = useForm();
  const handleLogout = () => {
    deleteCookie("token");
    deleteCookie("email");
    deleteCookie("name");
    router.push("/login");
  };
  return (
    <header className={styles.containerHeader}>
      <div className={styles.wrapperHeader}>
        <Image
          src="/Logo.svg"
          alt="Nexus logo"
          width={198}
          height={40}
          className="cursor-pointer"
          onClick={handleClick}
        />

        <nav className="flex items-center gap-6">
          <form>
            <Input
              type="text"
              placeholder="search game name..."
              name="search"
              register={register}
            >
              <FaSearch color="E1E1E1" size={15} />
            </Input>
          </form>
          <button className="flex" onClick={() => handleUserModalOpen()}>
            <FaUser className="text-primarycolor text-[25px] mr-5 hover:text-primaryhover ease-in duration-300" />
          </button>
          <button>
            <FaSignOutAlt
              className="text-primarycolor text-[25px] hover:text-primaryhover ease-in duration-300"
              onClick={handleLogout}
            />
          </button>
        </nav>
      </div>
    </header>
  );
}
