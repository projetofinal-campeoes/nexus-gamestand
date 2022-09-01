import Background from "../../components/Background";
import Header from './../../components/Header';
import GameCard from './../../components/GameCard';

export default function Dashboard() {
    return(
        <Background config="flex-col gap-8 items-center">
            <Header/>

            <main className="w-[80%] max-w-[1041px] flex flex-col gap-10">

                <section className="flex flex-col gap-4">
                <h2 className="text-title2 text-text font-bold">Recommended</h2>

                <ul className="grid grid-cols-2 gap-[20.5px]">
                    <li className="w-[100%] h-[281px] bg-boxcolor rounded-lg"></li>
                    <li className="w-[100%] h-[281px] bg-boxcolor rounded-lg"></li>
                </ul>
                </section>

                <section>
                    <ul className="grid grid-cols-3 gap-[20.5px]">
                        <GameCard name='Teste' img='Teste'/>
                    </ul>
                </section>
            </main>
        </Background>
    )
}