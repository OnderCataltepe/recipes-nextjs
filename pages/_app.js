import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PreLoader from "../components/preloader/PreLoader";
import MainLayout from "../layouts";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => setLoading(true));
    router.events.on("routeChangeComplete", () => setLoading(false));
    router.events.on("routeChangeError", () => setLoading(false));
    return () => {
      router.events.off("routeChangeStart", () => setLoading(true));
      router.events.off("routeChangeComplete", () => setLoading(false));
      router.events.off("routeChangeError", () => setLoading(false));
    };
  }, [router.events]);

  return (
    <MainLayout>
      <Head>
        <title>Foodie</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {loading && <PreLoader />}
      <Component {...pageProps} />
    </MainLayout>
  );
}
