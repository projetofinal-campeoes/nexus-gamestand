import { ReactNode } from 'react';
import Image from 'next/image';

interface GameCard {
    name: string,
    img: string
}

export default function GameCard({ name, img }: GameCard) {
    return(
        <li className="w-[100%] h-[187px] bg-boxcolor rounded-lg overflow-hidden">
            <button>
                <Image src='http://store-images.s-microsoft.com/image/apps.56234.68306748966338141.e6f96fac-aa67-4f59-9043-10654607aa79.44048e8a-120d-4c3c-9a6d-a2e7df123548' width={333} height={187} alt='Game'></Image>
            </button>
            <h3>{name}</h3>
        </li>
    )
}