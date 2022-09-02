import React from "react";
import Background from "../../../components/Background";
import Header from "../../../components/Header";
import Image from "next/image";

const Game = () => {
  return (
    <Background config="flex flex-col">
      <Header />
      <div className="w-[80%] max-w-[1041px] mx-auto flex flex-col  gap-8 text-text items-center">
        <img
          src="https://files.tecnoblog.net/wp-content/uploads/2019/05/league-of-legends-700x394.jpg"
          className="rounded-lg shadow-2xl shadow-black w-[700px] h-[394px] mx-auto mt-10"
        />
        <div>
          <h1 className="mb-2 text-sm text-title1 font-bold">League of Legends</h1>
          <hr className="w-full rounded" />
        </div>
        <p className="indent-8 text-justify">
        What is League of Legends? League of Legends is a team-based strategy game where two teams of five powerful champions face off to destroy the other&apos;s base. Choose from over 140 champions to make epic plays, secure kills, and take down towers as you battle your way to victory.
        </p>
      </div>
    </Background>
  );
};

export default Game;
