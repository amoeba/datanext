import Link from "next/link";
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return <div>
    <nav>
      <Link href="/"><a>Search</a></Link>
    </nav>
    <Component {...pageProps} />
  </div>;
}

export default App
