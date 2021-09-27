import { useContext, useEffect, useState } from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/globals.css";
import { StoreProvider } from "../lib/store"

function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </StoreProvider>
  );
}

export default App;
