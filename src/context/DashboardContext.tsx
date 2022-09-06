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
    addToInfiniteScroll: (data: IGame[]) => void,
    isSearching: boolean,
    switchIsSearching: (data: boolean) => void,
    filteredList: IGame[],
    changeFilteredList: (data: string) => void,
    searchInput: string,
    changeInputValue: (data: string) => void,
    allGamesList: IGame[],
    changeAllGamesList: (data: IGame[]) => void,
    setGameList: (list: IGame[] | any) => void,
    setCurrentPage: (value: number) => void
}

export default function DashboardProvider({ children }: IDashboardProvider) {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [gameList, setGameList] = useState<IGame[]>([]);
    const [isSearching, setIsSearching] = useState<boolean>(false)
    const [searchInput, setSearchInput] = useState<string>('')
    const [allGamesList, SetAllGamesList] = useState<IGame[]>([])
    const [filteredList, setFilteredList] = useState<IGame[]>([])

    const switchIsSearching = (data: boolean) => setIsSearching(data)

    const PagePlusOne = () => setCurrentPage((oldCurrentPage) => oldCurrentPage + 1)

    const addToInfiniteScroll = (data: IGame[]) => setGameList((oldGameList) => [...oldGameList, ...data])

    const changeAllGamesList = (data: IGame[]) => SetAllGamesList((oldGameList) => [...oldGameList, ...data]) 

    const changeFilteredList = (data: string) => setFilteredList(allGamesList.filter(({ productName }) => productName.toLowerCase().includes(data.toLowerCase())))


    const changeInputValue = (data: string) => {
        setSearchInput(data)
        changeFilteredList(data)
    }

    return(
        <DashboardContext.Provider value={{currentPage, PagePlusOne, gameList, addToInfiniteScroll, isSearching, switchIsSearching, filteredList, changeFilteredList, searchInput, changeInputValue, allGamesList, changeAllGamesList, setGameList, setCurrentPage}}>
            {children}
        </DashboardContext.Provider>
    )
}