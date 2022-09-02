// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type IGame = {
    id: string;
    productName: string;
    description: string;
    category: string;
    image: {
      URL: string;
    };
    platform: string;
}

type IError = {
    message: string
}

type IUserGameResponse = {
    response: {
        game_counts: number,
        games: ISteamGames[]
    }
}

type ISteamGames = {
    appid: number,
    name: string,
    playtime_forever: number,
    img_icon_url: string,
    has_community_visible_stats: boolean,
    playtime_windows_forever: number,
    playtime_mac_forever: number,
    playtime_linux_forever: number,
    rtime_last_played: number
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IGame[] | IError>
) {
  try {
      const { username } = req.body
      const { page, limit } = req.query
        const userSteamId = await axios.get(`http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=CD931AB5F0BA950471A81DEFF485FA5C&vanityurl=${username}`)
        const userGames = await axios.get<IUserGameResponse>(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=CD931AB5F0BA950471A81DEFF485FA5C&steamid=${userSteamId.data.response.steamid}&include_appinfo=true&format=json`) 
        const formattedGames = userGames.data.response.games.map(({ appid, name }) => {
            return {
                id: `${appid}`,
                productName: name,
                description: '',
                category: '',
                image: {
                    URL: `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/header.jpg`
                },
                platform: 'steam'
            }
        })
        
        const maxPages = Math.ceil(formattedGames.length / (Number(limit) || 10))
        const pagesArray = []

        for(let i = 0; i < maxPages; i++) {
            pagesArray.push(formattedGames.splice(0, (Number(limit) || 10)))
        }

        res.send(pagesArray[Number(page)-1])
    } catch(error) {
        res.send({message: 'User not found'})
    }
}
