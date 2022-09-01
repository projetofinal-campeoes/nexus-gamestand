import Image from 'next/image';
import styles from '../styles/Home.module.sass'

interface GameCard {
    name: string,
    img: string
}

export default function GameCard({ name, img }: GameCard) {
    return(
        <li className={styles.listItem}>
            <div className='relative'>
                <Image src={img} layout='fill' alt='Game'></Image>
            </div>

            <button className={styles.hoverContainer}>
                <h3 className='text-text text-[20px] font-bold'>{name}</h3>
            </button>
        </li>
    )
}