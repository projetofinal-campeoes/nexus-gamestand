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
  animation?: string;
  dashboardPage?: any;
}

const Header = ({animation, dashboardPage}:IHeader) => {
  const { handleLogout } = useAuth()
  const { switchIsSearching, changeInputValue } = useContext(DashboardContext)
  const { setUserModalOpen, userModalOpen } = useContext(NexusContext);

  const router = useRouter();

  const handleClick = () => {
    router.push('/')
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
          <form className={router.pathname === '/dashboard/games/[game]' ? 'hidden' : 'flex'}>
            <label className={styles.inputBox}>
                <FaSearch className="text-[15px text-[#E1E1E1]]" />
                <input type='text' placeholder="search game name..." className={styles.input} onFocus={() =>switchIsSearching(true)} onChange={(event) => changeInputValue(event.target.value)}/>
            </label>
          
          </form>
          <button className={router.pathname === '/dashboard/games/[game]' ? 'hidden' : 'flex'}>
            <FaSearch className="text-primarycolor text-[25px] mr-5 hover:text-primaryhover ease-in duration-300 md:hidden"/>
          </button>
          <button className={router.pathname === '/dashboard/games/[game]' ? 'hidden' : 'flex'} onClick={() => setUserModalOpen(!userModalOpen)}>
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