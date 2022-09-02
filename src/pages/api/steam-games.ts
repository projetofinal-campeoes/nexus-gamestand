// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type IError = {
    message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IError>
) {
  try {
      const { username } = req.body
        const userSteamId = await axios.get(`http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=CD931AB5F0BA950471A81DEFF485FA5C&vanityurl=${username}`)
        const userGames = await axios.get(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=CD931AB5F0BA950471A81DEFF485FA5C&steamid=${userSteamId.data.response.steamid}&include_appinfo=true&format=json`) 
        res.send(userGames.data)
    } catch(error) {
        res.send({message: 'User not found'})
    }
}
