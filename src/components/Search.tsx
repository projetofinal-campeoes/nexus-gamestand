import { useContext } from 'react';
import { DashboardContext } from '../context/DashboardContext';
import GameCard from './GameCard';
import { useEffect } from 'react';
import styles from "../styles/Home.module.sass";
import getAllGames from '../services/getAllGames';
import { useAuth } from '../context/AuthContext';

export default function Search() {
    const { user } = useAuth()
    const { allGamesList, changeAllGamesList, searchInput, filteredList, switchIsSearching } = useContext(DashboardContext)

    useEffect(() => {
        getAllGames(changeAllGamesList, user!.steam!)
    }, []);

    return(
        <section className="flex flex-col gap-4 animate__animated animate__fadeIn">
            <div className='flex gap-4 items-center'>
                <button className={styles.button} onClick={() => switchIsSearching(false)}>Back</button>
                <h2 className="text-title2 text-text font-bold">Search Result:</h2>
            </div>

            <ul className="grid grid-cols-3 gap-[20.5px]">
                {
                searchInput === '' ?
                allGamesList.map(
                        ({ id, productName, image, platform }, index) => (
                            index < 50 ?
                            <GameCard
                            key={index}
                            id={id}
                            name={productName}
                            img={image.URL}
                            platform={platform}
                            />
                            :
                            null
                            )
                            )
                :
                filteredList.map(
                        ({ id, productName, image, platform }, index) => (
                            index < 50 ?
                            <GameCard
                            key={index}
                            id={id}
                            name={productName}
                            img={image.URL}
                            platform={platform}
                            />
                            :
                            null
                            )
                            )
                }
            </ul>
        </section>
    )
}