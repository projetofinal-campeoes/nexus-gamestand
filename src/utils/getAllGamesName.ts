import axios from "axios";

interface IResponse {
    name: string
}

export default async function getAllGamesName() {
    let allGamesName: object[] = []

    for(let i = 1; i < 1; i++) {
        const apiResponse = await axios.get(`https://api.rawg.io/api/games?key=21bb0951c4fe428ba730b1e2a79833e1&page=${i}`)
        const gamesName = apiResponse.data.results.map(({ name }: IResponse) => {
            return {
                params: {
                    game: name
                }
            }
        })

        allGamesName = [...allGamesName, ...gamesName]
    }
    return allGamesName
}