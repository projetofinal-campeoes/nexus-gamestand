import axios from "axios";

export default function getAllGames(changeFunction: Function, username: string) {
    axios.post(`api/steam-games?page=1&limit=10000`, {username: username})
    .then(({ data }) => {
        changeFunction(data)
    });
    axios.get(`https://games-api.herokuapp.com/games?_page=1&_limit=10000`)
    .then(({ data }) => {
        changeFunction(data)
    });
}