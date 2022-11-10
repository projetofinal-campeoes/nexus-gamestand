import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NexusProvider from "../context/NexusContext";
import DashboardProvider from "../context/DashboardContext";
import AuthProvider from "../context/AuthContext";
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <AuthProvider>
        <NexusProvider>
          <DashboardProvider>
            <ToastContainer
              toastStyle={{ backgroundColor: "#1e212a", color: "white" }}
            />
            <Component {...pageProps} />
          </DashboardProvider>
        </NexusProvider>
      </AuthProvider>
    </SessionProvider>
  );
}

export default MyApp;
