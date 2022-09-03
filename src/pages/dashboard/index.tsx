import Background from "../../components/Background";
import Header from "./../../components/Header";
import GameCard from "./../../components/GameCard";
import { useContext, useEffect, useRef } from "react";
import { NexusContext } from "../../context/NexusContext";
import Profile from "../../components/ProfileModal";
import { DashboardContext } from "../../context/DashboardContext";
import GetXboxGames from "../../services/GetXboxGames";
import GetSteamGames from "../../services/GetSteamGames";

export default function Dashboard() {
  const { userModalOpen } = useContext(NexusContext);
  const { currentPage, PagePlusOne, gameList, addToInfiniteScroll } = useContext(DashboardContext)

  const observer = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    GetXboxGames(currentPage, addToInfiniteScroll)
    GetSteamGames('srulf', currentPage, addToInfiniteScroll)
  }, [currentPage]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        PagePlusOne()
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
            {gameList?.map(
              ({ id, productName, image, platform }, index) => (
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