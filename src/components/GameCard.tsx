import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.sass'
import { FaSteam } from "react-icons/fa";
import { SiXbox } from "react-icons/si";

interface GameCard {
    id: string,
    name: string,
    img: string,
    platform: string
}

const platforms: Icons = {
    steam: (<FaSteam className='text-[25px]'/>),
    xbox: (<SiXbox className='text-[25px]'/>)
}

interface Icons {
    [platform: string]: JSX.Element
}

export default function GameCard({ id, name, img, platform }: GameCard) {
    return(
        <li className={styles.listItem}>
            <Link href={`/dashboard/games/${id}`} className='overflow-hidden'>
                <div className={styles.content}>
                    <div>
                        <Image src={img} layout='fill' objectFit='cover' alt={name}></Image>
                    </div>

                    <button className={styles.hoverContainer}>
                        <h3 className='text-text text-[20px] font-bold'>{name}</h3>
                    </button>

                    <div className='absolute right-0 bottom-0 p-2 bg-boxcolor rounded-tl-lg text-text text-[15px]'>
                        {
                            platforms[platform]
                        }
                    </div>
                </div>
            </Link>
        </li>
    )
}