import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NexusProvider from "../context/NexusContext";
import DashboardProvider from "../context/DashboardContext";
import AuthProvider, { ProtectRoute } from "../context/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
        <ProtectRoute>
            <NexusProvider>
                <DashboardProvider>
                    <ToastContainer 
                    toastStyle={{ backgroundColor: '#434343', color: "white" }}/>
                    <Component {...pageProps} />
                </DashboardProvider>
            </NexusProvider>
        </ProtectRoute>
    </AuthProvider>
  );
}

export default MyApp;
