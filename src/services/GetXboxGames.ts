import axios from "axios";

export default function GetXboxGames(currentPage: number, addToInfiniteScroll: Function) {
    axios.get(`https://games-api.herokuapp.com/games?_page=${currentPage}&_limit=5`)
    .then(({ data }) => {
        addToInfiniteScroll(data)
    });
}