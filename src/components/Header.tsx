import styles from "../styles/Home.module.sass";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import Input from "./Input";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { deleteCookie } from 'cookies-next';
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter()
  const { register, handleSubmit } = useForm();
  const handleLogout = () => {
    deleteCookie('token');
    deleteCookie('email');
    deleteCookie('name');
    router.push('/login')
  }
  return (
    <header className={styles.containerHeader}>
      <div className={styles.wrapperHeader}>
        <Image src="/Logo.svg" alt="Nexus logo" width={198} height={40} className="cursor-pointer "/>

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
          <button className="flex">
            <FaUser className="text-primarycolor text-[25px] mr-5 hover:text-primaryhover ease-in duration-300" />
            <FaSignOutAlt className="text-primarycolor text-[25px] hover:text-primaryhover ease-in duration-300" onClick={handleLogout}/>
          </button>
        </nav>
      </div>
    </header>
  );
}
