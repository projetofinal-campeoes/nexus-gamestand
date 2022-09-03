import axios from "axios";

export default function GetSteamGames(username: string, currentPage: number, addToInfiniteScroll: Function) {
    axios.post(`api/steam-games?page=${currentPage}&limit=5`, {username: username})
    .then(({ data }) => {
        addToInfiniteScroll(data)
    });
}