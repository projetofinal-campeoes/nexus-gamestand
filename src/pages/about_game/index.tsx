import Image from "next/image";
import React from "react";
import BackgroundDashboard from "../../components/BackgroundDashboard";
import GeralContainer from "../../components/GeralContainer";
import HeaderDashboard from "../../components/HeaderDashboard";
import LeftAside from "../../components/LeftAside";
import RightSide from "../../components/RightSide";
import SEO from "../../components/SEO";

const Game = () => {
  return (
    <BackgroundDashboard config="flex flex-col">
      <SEO
        title="About Game"
        description="The NEXUS App simplifies your access to your games, unifying all platforms into one."
      />
      <GeralContainer>
        <LeftAside />

        <RightSide>
          <HeaderDashboard title="Games"/>
            <main className="text-defaulttextdark flex flex-col gap-[32px]">
                <Image src="https://img.hype.games/cdn/3b20fb88-c19f-463d-9b85-7495c5fce3a386da2b15-c960-44f4-af03-ee8da56b0687HorizonZD_CompEdition_0002_ss07.jpg" width={986} height={322} objectFit="cover" layout="responsive" className="rounded-[30px]"/>

                <section className="flex flex-col gap-[22px] bg-boxcolordark px-[50px] py-[18px] rounded-[30px] items-center">
                    <h2 className="text-[32px] font-bold">Horizon Forbidden West</h2>

                    <p className="text-[22px] font-medium text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eos ut animi dolores maiores blanditiis nisi dolorum, quae esse doloremque perspiciatis, sit sunt delectus ab nulla modi soluta? Natus, mollitia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore officia, dolorum exercitationem mollitia molestiae ratione natus, officiis velit voluptatum corrupti delectus id aliquam earum? Veniam ullam in repudiandae atque esse.</p>
                </section>
            </main>
        </RightSide>
      </GeralContainer>
    </BackgroundDashboard>
  );
};

export default Game;
