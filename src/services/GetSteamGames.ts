import axios from "axios";

export default function getSteamGames(username: string, currentPage: number, limit: number, functionToAddToList: Function) {
    axios.post(`api/steam-games?page=${currentPage}&limit=${limit}`, {username: username})
    .then(({ data }) => {
        functionToAddToList(data)
    });
}