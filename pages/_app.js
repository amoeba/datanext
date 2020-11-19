import Link from "next/link";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <div>
      <div id="top">Sign In</div>
      <header>
        <Link href="/">
          <a>
            <h1>DataONE</h1>
          </a>
        </Link>
        <nav>
          <Link href="/search">
            <a>Search</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
