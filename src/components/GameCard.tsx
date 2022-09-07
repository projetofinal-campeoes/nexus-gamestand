import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.sass'
import { FaSteam } from "react-icons/fa";
import { SiXbox } from "react-icons/si";
import { useState } from 'react';

interface GameCard {
    id: string,
    name: string,
    img: string,
    platform: string,
    type?: string 
}

const platforms: Icons = {
    steam: (<FaSteam className='text-[25px]'/>),
    xbox: (<SiXbox className='text-[25px]'/>)
}

interface Icons {
    [platform: string]: JSX.Element
}

export default function GameCard({ id, name, img, platform, type }: GameCard) {
    const [URLError, setURLError] = useState(false)

    const handleImageError = () => {
        setURLError(true)
    }

    return(
        <li className={type === 'large' ? "w-[100%] h-[281px] bg-boxcolor rounded-lg overflow-hidden relative" : styles.listItem}>
            <Link href={`/dashboard/games/${name}`} className='overflow-hidden'>
                <div className={styles.content}>
                    <div>
                        <Image onErrorCapture={handleImageError} src={URLError ? 'https://cdn6.aptoide.com/imgs/1/3/5/135414bbfd2c62340daf0f53516fc106_screen.jpg?h=500' : img} layout='fill' alt={name} quality={100} placeholder='blur' blurDataURL='https://cdn6.aptoide.com/imgs/1/3/5/135414bbfd2c62340daf0f53516fc106_screen.jpg?h=500' className='object'/>
                    </div>

                    <button className={styles.hoverContainer}>
                        <h3 className='text-text text-[20px] font-bold'>{name}</h3>
                    </button>

                </div>
            </Link>
            {
                type === 'large' ?
                    <></>
                :
                    <div className='absolute right-0 bottom-0 p-2 bg-boxcolor rounded-tl-lg text-text text-[15px]'>
                    {
                        platforms[platform]
                    }
                    </div>    
            }
        </li>
    )
}