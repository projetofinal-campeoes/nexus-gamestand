import Background from "../../components/BackgroundInitial";
import Header from "../../components/Header";
import GameCard from "../../components/GameCard";
import { useContext, useEffect, useRef, useState } from "react";
import { NexusContext } from "../../context/NexusContext";
import getXboxGames from "../../services/GetXboxGames";
import getSteamGames from "../../services/GetSteamGames";
import Profile from "../../components/ProfileModal";
import { DashboardContext, IGame } from "../../context/DashboardContext";
import axios, { AxiosResponse } from "axios";
import Search from "../../components/Search";
import Head from "next/head";
import { IUser, useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";
import { NextApiRequest, NextApiResponse } from "next";
import { deleteCookie, getCookie } from "cookies-next";
import api from "../../services/api";
import Loader from "../../components/Loader";
import Player from "../../animations/player";

interface IDashboard {
  randomGames: IGame[];
  user: IUser;
}

export default function Dashboard({
  randomGames,
  user: userFromServer,
}: IDashboard) {
  const { userModalOpen } = useContext(NexusContext);
  const {
    currentPage,
    PagePlusOne,
    gameList,
    addToInfiniteScroll,
    isSearching,
    setGameList,
    setCurrentPage,
  } = useContext(DashboardContext);
  const router = useRouter();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const observer = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (user) {
      getSteamGames(user!.steam!, currentPage, 5, addToInfiniteScroll);
      if (user!.xbox) {
        getXboxGames(currentPage, 5, addToInfiniteScroll);
      }
    } else {
      getSteamGames(
        userFromServer!.steam!,
        currentPage,
        5,
        addToInfiniteScroll
      );
      if (userFromServer!.xbox) {
        getXboxGames(currentPage, 5, addToInfiniteScroll);
      }
    }
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    setGameList([]);

    if (user) {
      getSteamGames(user!.steam!, currentPage, 5, addToInfiniteScroll);
      if (user!.xbox) {
        getXboxGames(currentPage, 5, addToInfiniteScroll);
      }
    }
  }, [user]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        PagePlusOne();
      }
    });

    if (!isSearching) {
      intersectionObserver.observe(observer.current!);
    }

    router.events.on("routeChangeStart", () => {
      setIsLoading(true);
    });

    return () => intersectionObserver.disconnect();
  }, []);

  const dashboardPage = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>NEXUS - Dashboard</title>
        <link rel="shortcut icon" href="/nexus.png" type="image/x-icon" />
      </Head>

      {isLoading ? (
        <Background config="items-center justify-center">
          <Loader />
        </Background>
      ) : (
        <Background config="flex-col gap-8 items-center">
          <Header animation="animate__animated animate__fadeInDown animate__fast" />
          {userModalOpen && <Profile />}

          <div
            ref={dashboardPage}
            className="w-[80%] max-w-[1041px] flex flex-col gap-10 pb-10 animate__animated animate__fadeIn"
          >
            {isSearching ? (
              <Search />
            ) : (
              <>
                <section className="flex flex-col gap-4">
                  <h2 className="text-title2 text-text font-bold text-center sm:text-left">
                    Recommended
                  </h2>

                  <ul className="grid grid-cols-1 gap-[20.5px] sm:grid-cols-2">
                    {randomGames.map(
                      ({ id, productName, image, platform }, index) => (
                        <GameCard
                          key={index}
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
                    <h2 className="text-title2 text-text font-bold text-center sm:text-left">
                      {gameList.length > 0
                        ? "Your games"
                        : "No platforms added yet"}
                    </h2>
                  </div>
                  <ul className="grid grid-cols-1 gap-[20.5px] sm:grid-cols-3">
                    {gameList.length > 0 ? (
                      gameList.map(
                        ({ productName, image, platform }, index) => (
                          <GameCard
                            key={index}
                            name={productName}
                            img={image.URL}
                            platform={platform}
                          />
                        )
                      )
                    ) : (
                      <div className="sm:w-[400px] sm:h-[400px] bottom-10 flex flex-col gap-4 sm:absolute items-center justify-center sm:left-[40%] animate__animated animate__fadeIn">
                        <Player style={`w-[300px] sm:w-[400px]`} />
                        <h1 className="text-text font-bebas text-[2rem]">
                          ADD YOUR ACCOUNTS
                        </h1>
                      </div>
                    )}
                    <li ref={observer}></li>
                  </ul>
                </section>
              </>
            )}
          </div>
        </Background>
      )}
    </>
  );
}

interface IServerSideContext {
  req: NextApiRequest;
  res: NextApiResponse;
}

interface IResponse {
  data: object;
}

export async function getServerSideProps({ req, res }: IServerSideContext) {
  const id = getCookie("id", { req, res });
  const token = getCookie("token", { req, res });
  let response: IResponse = {} as IResponse;

  if (token) {
    try {
      response = await api.get(`/users/${id}`, {
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

  return {
    props: {
      randomGames: formattedGames,
      user: response.data,
    },
  };
}
