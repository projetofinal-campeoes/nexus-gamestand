import styles from "../styles/Home.module.sass";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/router";
import { useContext } from "react";
import { NexusContext } from "../context/NexusContext";
import { DashboardContext } from "../context/DashboardContext";
import { useAuth } from "../context/AuthContext";

type IHeader = {
  animation: string;
}

const Header = ({animation}:IHeader) => {
  const { handleUserModalOpen } = useContext(NexusContext);
  const { switchIsSearching, changeInputValue } = useContext(DashboardContext)
  const { handleLogout } = useAuth()

  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard')
  }

  return (
    <header className={`${styles.containerHeader} ${animation}`}>
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
export default Header