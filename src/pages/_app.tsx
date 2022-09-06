import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NexusProvider from "../context/NexusContext";
import DashboardProvider from "../context/DashboardContext";
import AuthProvider from "../context/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
            <NexusProvider>
                <DashboardProvider>
                    <ToastContainer 
                    toastStyle={{ backgroundColor: '#1e212a', color: "white" }}/>
                    <Component {...pageProps} />
                </DashboardProvider>
            </NexusProvider>
    </AuthProvider>
  );
}

export default MyApp;
