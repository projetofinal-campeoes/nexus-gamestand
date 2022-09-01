import Background from "../../components/Background";
import RecomendedDashboard from "../../components/RecomendedDashboard";
import Header from './../../components/Header';

export default function Dashboard() {
    return(
        <Background config="flex-col">
            <Header/>
            <RecomendedDashboard />
        </Background>
    )
}