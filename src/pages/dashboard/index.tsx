import Background from "../../components/Background";
import Header from "./../../components/Header";
import GameCard from "./../../components/GameCard";
import { useContext, useEffect, useRef, useState } from "react";
import { NexusContext } from "../../context/NexusContext";
import Profile from "../../components/ProfileModal";
import axios from "axios";

interface IDashboardProps {
  games: IGame[];
}

interface IGame {
  id: string;
  productName: string;
  description: string;
  category: string;
  image: {
    URL: string;
  };
  platform: string;
}

export default function Dashboard({ games }: IDashboardProps) {
  const { userModalOpen } = useContext(NexusContext);
  const { checked, setChecked } = useContext(NexusContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [gameList, setGameList] = useState<IGame[]>([]);

  const observer = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    axios
      .get(
        `https://games-api.herokuapp.com/games?_page=${currentPage}&_limit=5`
      )
      .then(({ data }) => {
        setGameList((oldGameList) => [...oldGameList, ...data]);
      });
    axios
    .post(
    `api/steam-games?page=${currentPage}&limit=5`,
    {username: 'artur-xdxd'}
    )
    .then(({ data }) => {
        setGameList((oldGameList) => [...oldGameList, ...data]);
    });
  }, [currentPage]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((oldCurrentPage) => oldCurrentPage + 1);
      }
    });

    intersectionObserver.observe(observer.current!);

    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <Background config="flex-col gap-8 items-center">
      <Header />

      {userModalOpen && (
        <Profile />
      )}

      <main className="w-[80%] max-w-[1041px] flex flex-col gap-10 pb-10">
        <section className="flex flex-col gap-4">
          <h2 className="text-title2 text-text font-bold">Recommended</h2>

          <ul className="grid grid-cols-2 gap-[20.5px]">
            <li className="w-[100%] h-[281px] bg-boxcolor rounded-lg"></li>
            <li className="w-[100%] h-[281px] bg-boxcolor rounded-lg"></li>
          </ul>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-title2 text-text font-bold">Your games</h2>
          <ul className="grid grid-cols-3 gap-[20.5px]">
            {gameList.map(
              ({ id, productName, image, platform }: IGame, index) => (
                <GameCard
                  key={index}
                  id={id}
                  name={productName}
                  img={image.URL}
                  platform={platform}
                />
              )
            )}
            <li ref={observer}></li>
          </ul>
        </section>
      </main>
    </Background>
  );
}

interface IXboxProduct {
  LocalizedProperties: {
    ProductTitle: string;
    ShortDescription: string;
    Images: IXboxProductImage[];
  }[];
  Properties: {
    Category: string;
  };
}

interface IXboxProductImage {
  ImagePurpose: string;
  FileId: string;
  Uri: string;
}

interface ISteamProduct {
  appid: string;
  name: string;
}

// export async function getStaticProps() {
//   const steamKeyAPI = "CD931AB5F0BA950471A81DEFF485FA5C";
//   const usernameSteam = "wolfremgames";

//   const steamAccountID = await fetch(
//     `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${steamKeyAPI}&vanityurl=${usernameSteam}`
//   );
//   const steamAccountIDJSON = await steamAccountID.json();

//   const responseSteam = await fetch(
//     `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${steamKeyAPI}&steamid=${steamAccountIDJSON.response.steamid}&include_appinfo=true&format=json`
//   );
//   const responseSteamJSON = await responseSteam.json();

//   const steamGames = responseSteamJSON.response.games.map(
//     ({ appid, name }: ISteamProduct) => {
//       return {
//         id: appid,
//         productName: name,
//         description: "",
//         category: "",
//         image: {
//           URL: `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/header.jpg`,
//         },
//         platform: "steam",
//       };
//     }
//   );

//   return {
//     props: {
//       games: [...steamGames],
//     },
//   };
// }
