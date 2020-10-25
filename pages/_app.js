import Link from "next/link";
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return <div>
    <header>
      <Link href="/"><a>
        <h1>datanext</h1>
      </a></Link>
    </header>
    <nav>
      <Link href="/"><a>Search</a></Link>
    </nav>
    <main>
      <Component {...pageProps} />
    </main>
    <footer></footer>
  </div>;
}

export default App
