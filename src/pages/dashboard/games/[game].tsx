import React, { useState } from "react";
import Background from "../../../components/Background";
import Header from "../../../components/Header";
import Image from "next/image";
import getAllGamesName from "../../../utils/getAllGamesName";
import axios from "axios";
import Link from 'next/link';
import styles from '../../../styles/Home.module.sass'

interface IGameProps {
    gameInfo: {
        name: string,
        background_image: string,
        genres: {
            name: string
        }[]
    }
}

const Game = ({ gameInfo }: IGameProps) => {
  return (
    <Background config="flex flex-col items-center gap-10 pb-[40px]">
      <Header animation='animate__animated animate__fadeInDown animate__fast'/>
      <div className="w-[80%] max-w-[1041px] flex flex-col  gap-8 text-text items-center">
        <Link href='..'>
            <button className='bg-primarycolor rounded-lg shadow-md py-4 px-8 text-text font-medium hover:bg-primaryhover ease-linear duration-300 self-start'>Back</button>
        </Link>
        <div className="w-[700px] h-[394px] relative">
            <Image
            src={gameInfo?.background_image ? gameInfo.background_image : 'https://cdn6.aptoide.com/imgs/1/3/5/135414bbfd2c62340daf0f53516fc106_screen.jpg?h=500'}
            className="rounded-lg shadow-2xl shadow-black mx-auto mt-10"
            alt={gameInfo?.name ? gameInfo.name : 'Not found'}
            objectFit='cover'
            quality={100}
            layout='fill'
            />
        </div>
        
        <div>
          <h1 className="mb-2 text-sm text-title1 font-bold">{gameInfo?.name ? gameInfo.name : 'Not found'}</h1>
          <ul className="flex items-center gap-4">
            <li>Genres:</li>
            {
                gameInfo?.genres[0]?.name ?
                gameInfo?.genres.map(({ name }, index) => <li key={index}>{name}</li>)
                :
                <li>Not found</li>
            }
          </ul>
        </div>
        <div className="flex flex-col gap-2">
            {
                gameInfo?.name ?
                <>
                    <p className="indent-8 text-justify">
                        Set in the fictional world of {gameInfo?.genres[0]?.name ? gameInfo.genres[0].name : 'magic'}, {gameInfo.name} allows players to create avatar-style characters and explore a sprawling universe while interacting with nonreal players—called nonplayer characters (NPCs)—and other real-world players (PCs). Various quests, battles, and missions are completed alone or in guilds, and the rewards for success include gold, weapons, and valuable items, which are used to improve one’s character. Characters advance by killing other creatures to earn experience. Once enough experience is acquired, the character gains a level, which increases the character’s powers. {gameInfo.name} offers a rich class system of characters, allowing gamers to play as druids, priests, rogues, paladins, and other fantasy-related classes. Guilds often achieve notoriety for their ability to finish certain quests or defeat specific monsters quickly, and, in this way, a hierarchy system is established in the game.
                    </p>
                    <p className="indent-8 text-justify">
                        Players have contributed to the {gameInfo.name} community by creating artwork inspired by the game, writing fan fiction, and spending innumerable hours online inhabiting the games virtual world. Some view this intense investment in the game as an addiction. The popularity of the game led to a cinematic adaptation, {gameInfo.name} The Film (2016).
                    </p>
                </>
                :
                <p>Not found</p>
            }
        </div>
      </div>
    </Background>
  );
};

export default Game;

export async function getStaticPaths() {
    return {
        paths: await getAllGamesName(),
        fallback: true
    }
}

interface IStaticProps {
    params: {
        game: string
    }
}

export async function getStaticProps({params}: IStaticProps) {
    let gameInfo = null
    
    try {
        gameInfo = await axios.get(`https://api.rawg.io/api/games?key=21bb0951c4fe428ba730b1e2a79833e1&search=${params.game}`)
    } catch(error) {
        console.log(error)
    }

    return {
        props: {
            gameInfo: gameInfo ? gameInfo.data.results[0] : null,
        }
    }
}