import Link from "next/link"

export default function Header() {
  // TODO: Factor out
  const signInUrl = "https://cn.dataone.org/portal/oauth?action=start&target=http://localhost:3000"

  return <header>
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
      <Link href={signInUrl}>
        <a>Sign In</a>
      </Link>
    </nav>
  </header>
}
