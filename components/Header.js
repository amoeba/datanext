import Link from "next/link"
import ProfileButton from "./ProfileButton"

export default function Header() {
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
      <ProfileButton></ProfileButton>
    </nav>
  </header>
}
