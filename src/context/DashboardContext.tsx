import { createContext } from 'react';
import { ReactNode } from 'react';
import { useState } from 'react';

export const DashboardContext = createContext<IContext>({} as IContext)

interface IDashboardProvider {
    children: ReactNode
}

export interface IGame {
    id: string;
    productName: string;
    description: string;
    category: string;
    image: {
      URL: string;
    };
    platform: string;
}

interface IContext {
    currentPage: number,
    PagePlusOne: () => void,
    gameList: IGame[],
    addToInfiniteScroll: (data: IGame[]) => void
}

export default function DashboardProvider({ children }: IDashboardProvider) {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [gameList, setGameList] = useState<IGame[]>([]);

    const PagePlusOne = () => setCurrentPage((oldCurrentPage) => oldCurrentPage + 1)

    const addToInfiniteScroll = (data: IGame[]) => setGameList((oldGameList) => [...oldGameList, ...data])

    return(
        <DashboardContext.Provider value={{currentPage, PagePlusOne, gameList, addToInfiniteScroll}}>
            {children}
        </DashboardContext.Provider>
    )
}