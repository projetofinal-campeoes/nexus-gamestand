import styles from "../styles/Home.module.sass"
import { FaUser } from 'react-icons/fa'

export default function Header() {
    return(
        <header className={styles.containerHeader}>
            <div className={styles.wrapperHeader}>
                <h1 className="text-4xl font-bold text-text leading-8">Nexus</h1>

                <nav className="flex items-center gap-6">
                    <input type="text" className={styles.input} placeholder='search game name...'/>
                    <FaUser color="AA91F0" size={25}/>
                </nav>
            </div>
        </header>
    )
}