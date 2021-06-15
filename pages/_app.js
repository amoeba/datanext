import Link from "next/link";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <div>
      <div id="topbar">
        <Link href="/">
          <a>Sign In</a>
        </Link>
        </div>
      <header>
        <div>
          <Link href="/">
            <a>
              <h1>DataONE</h1>
            </a>
          </Link>
        </div>
        <nav>
          <Link href="/">
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
