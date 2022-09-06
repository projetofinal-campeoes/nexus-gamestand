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
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";

interface IDashboard {
  randomGames: IGame[];
}

export default function Dashboard({ randomGames }: IDashboard) {
  const { userModalOpen } = useContext(NexusContext);
  const {
    currentPage,
    PagePlusOne,
    gameList,
    addToInfiniteScroll,
    isSearching,
  } = useContext(DashboardContext);
  const { user, setIsLoading } = useAuth();
  const router = useRouter();

  const observer = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    getSteamGames('srulf', currentPage , 5, addToInfiniteScroll)
    // getXboxGames(currentPage, 5, addToInfiniteScroll)
  }, [currentPage]);

  useEffect(() => {
    if (user) {
      setIsLoading(false);
    } else {
      router.push("/");
    }

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

export async function getServerSideProps() {
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
    },
  };
}
