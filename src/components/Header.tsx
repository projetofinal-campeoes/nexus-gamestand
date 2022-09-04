import styles from "../styles/Home.module.sass";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useContext } from "react";
import { NexusContext } from "../context/NexusContext";
import { DashboardContext } from "../context/DashboardContext";

export default function Header() {
  const { handleUserModalOpen } = useContext(NexusContext);
  const { switchIsSearching, changeInputValue } = useContext(DashboardContext)

  const router = useRouter();
  const handleClick = () => {
    router.push('/dashboard')
  }

  const handleLogout = () => {
    deleteCookie("token");
    deleteCookie("email");
    deleteCookie("name");
    deleteCookie("id");
    deleteCookie("userImage");
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
          priority
        />

        <nav className="flex items-center gap-6">
          <form>
            <label className={styles.inputBox}>
                <FaSearch color="E1E1E1" size={15} />
                <input type='text' placeholder="search game name..." className={styles.input} onFocus={() => switchIsSearching(true)} onChange={(event) => changeInputValue(event.target.value)}/>
            </label>

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
