import axios from "axios";

export default function getXboxGames(currentPage: number, limit: number, functionToAddToList: Function) {
    axios.get(`https://games-api.herokuapp.com/games?_page=${currentPage}&_limit=${limit}`)
    .then(({ data }) => {
        functionToAddToList(data)
    });
}