import { useContext, useEffect, useState } from "react";
import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/globals.css";
import { StoreProvider } from "../lib/store"

function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </StoreProvider>
  );
}

export default App;
