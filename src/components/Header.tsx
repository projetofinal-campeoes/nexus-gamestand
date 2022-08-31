import styles from "../styles/Home.module.sass"
import { FaUser } from 'react-icons/fa'
import Image from "next/image"
import Input from './Input'
import { FaSearch } from 'react-icons/fa'
import { useForm } from 'react-hook-form';

export default function Header() {
    const { register, handleSubmit } = useForm()

    return(
        <header className={styles.containerHeader}>
            <div className={styles.wrapperHeader}>
                <Image src='/Logo.svg' alt="Nexus logo" width={198} height={40}/>

                <nav className="flex items-center gap-6">
                    <form>
                        <Input type='text' placeholder="search game name..." name='search' register={register}>
                            <FaSearch color="E1E1E1" size={15}/>
                        </Input>
                    </form>
                    <button>
                        <FaUser color="AA91F0" size={25}/>
                    </button>
                </nav>
            </div>
        </header>
    )
}