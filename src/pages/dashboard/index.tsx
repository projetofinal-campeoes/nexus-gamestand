import Background from "../../components/Background";
import Header from "./../../components/Header";
import GameCard from "./../../components/GameCard";
import { useContext, useEffect, useRef } from "react";
import { NexusContext } from "../../context/NexusContext";
import getXboxGames from "../../services/GetXboxGames";
import getSteamGames from "../../services/GetSteamGames";
import Profile from "../../components/ProfileModal";
import { DashboardContext, IGame } from "../../context/DashboardContext";
import { FaFilter, FaPlus } from "react-icons/fa";
import axios from "axios";
import Search from "./../../components/Search";
import Head from "next/head";
import { IUser, useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";
import { NextApiRequest, NextApiResponse } from "next";
import { deleteCookie, getCookie } from "cookies-next";
import api from "../../services/api";

interface IDashboard {
  randomGames: IGame[];
  user: IUser;
}

export default function Dashboard({ randomGames, user: userFromServer }: IDashboard) {
  const { userModalOpen } = useContext(NexusContext);
  const {
    currentPage,
    PagePlusOne,
    gameList,
    addToInfiniteScroll,
    isSearching,
    setGameList,
    setCurrentPage
  } = useContext(DashboardContext);
  const router = useRouter();
  const { user } = useAuth()

  const observer = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if(user) {
        getSteamGames(user!.steam!, currentPage, 5, addToInfiniteScroll);
        if (user!.xbox) {
          getXboxGames(currentPage, 5, addToInfiniteScroll);
        }
    } else {
        getSteamGames(userFromServer!.steam!, currentPage, 5, addToInfiniteScroll);
        if (userFromServer!.xbox) {
          getXboxGames(currentPage, 5, addToInfiniteScroll);
        }
    }
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1)
    setGameList([])

    if(user) {
        getSteamGames(user!.steam!, currentPage, 5, addToInfiniteScroll);
        if (user!.xbox) {
          getXboxGames(currentPage, 5, addToInfiniteScroll);
        }
    }
  }, [user])

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        PagePlusOne();
      }
    });

    intersectionObserver.observe(observer.current!);

    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <Background config="flex-col gap-8 items-center">
      <Header animation="animate__animated animate__fadeInDown animate__fast" />
      <Head>
        <title>NEXUS - Dashboard</title>
        <link rel="shortcut icon" href="/nexus.png" type="image/x-icon" />
      </Head>

      {userModalOpen && <Profile />}

      <main className="w-[80%] max-w-[1041px] flex flex-col gap-10 pb-10">
        {isSearching ? (
          <Search />
        ) : (
          <>
            <section className="flex flex-col gap-4">
              <h2 className="text-title2 text-text font-bold">Recommended</h2>

              <ul className="grid grid-cols-2 gap-[20.5px]">
                {randomGames.map(
                  ({ id, productName, image, platform }, index) => (
                    <GameCard
                      key={index}
                      id={id}
                      name={productName}
                      img={image.URL}
                      platform={platform}
                      type="large"
                    />
                  )
                )}
              </ul>
            </section>
            <section className="flex flex-col gap-4">
              <div className="flex justify-between">
                <h2 className="text-title2 text-text font-bold">Your games</h2>

                <nav className="flex text-primarycolor text-[20px] gap-6">
                  <button>
                    <FaPlus className="text-[22px] hover:text-primaryhover ease-in duration-300" />
                  </button>
                  <button>
                    <FaFilter className="hover:text-primaryhover ease-in duration-300" />
                  </button>
                </nav>
              </div>
              <ul className="grid grid-cols-3 gap-[20.5px]">
                {gameList.map(({ id, productName, image, platform }, index) => (
                  <GameCard
                    key={index}
                    id={id}
                    name={productName}
                    img={image.URL}
                    platform={platform}
                  />
                ))}
                <li ref={observer}></li>
              </ul>
            </section>
          </>
        )}
      </main>
    </Background>
  );
}

interface IServerSideContext {
  req: NextApiRequest;
  res: NextApiResponse;
}

export async function getServerSideProps({ req, res }: IServerSideContext) {
  const id = getCookie("id", { req, res });
  const token = getCookie("token", { req, res });

  if (token) {
    try {
      const { data } = await api.get(`/users/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      deleteCookie("token", { req, res });
      deleteCookie("id", { req, res });
      return {
        redirect: {
          permanent: false,
          destination: "/",
        },
      };
    }
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  const randomPage = Math.floor(Math.random() * 10) + 1;
  const manyGames = await axios.get(
    `https://api.rawg.io/api/games?key=21bb0951c4fe428ba730b1e2a79833e1&page=${randomPage}`
  );
  const gamesArray = manyGames.data.results;
  const twoRandomGames = [
    gamesArray[Math.floor(Math.random() * gamesArray.length)],
    gamesArray[Math.floor(Math.random() * gamesArray.length)],
  ];
  const formattedGames = twoRandomGames.map(
    ({ id, name, background_image }) => {
      return {
        id,
        productName: name,
        description: "",
        category: "",
        image: {
          URL: background_image,
        },
        platform: "",
      };
    }
  );

  const { data } = await api.get(`/users/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return {
    props: {
      randomGames: formattedGames,
      user: data,
    },
  };
}
