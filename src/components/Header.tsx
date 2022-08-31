import styles from "../styles/Home.module.sass"
import { FaUser } from 'react-icons/fa'
import Image from "next/image"

export default function Header() {
    return(
        <header className={styles.containerHeader}>
            <div className={styles.wrapperHeader}>
                <Image src='/Logo.svg' alt="Nexus logo" width={198} height={40}/>

                <nav className="flex items-center gap-6">
                    <form>
                        <label className="hidden" htmlFor="search">Pesquisar</label>

                        <input type="text" className={styles.input} name='search' placeholder='search game name...'/>
                    </form>
                    <FaUser color="AA91F0" size={25}/>
                </nav>
            </div>
        </header>
    )
}