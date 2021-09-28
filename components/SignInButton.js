import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { cn } from "../lib/api";
import { StoreContext } from "../lib/store"

export default function SignInButton() {
  const [href, setHref] = useState("");

  useEffect(async () => {
    setHref(cn + "/portal/oauth?action=start&target=" + window.location.href)
  })

  const { token, isLoggedIn, name } = useContext(StoreContext)

  if (!href) {
    return "Loading..."
  }

  if (isLoggedIn) {
    return <div>
      <Link href="/profile">
        <a>{name[0]}</a>
      </Link>
    </div>
  }

  return <div>
    <Link href={href}>
      <a>Sign In</a>
    </Link>
  </div>
}
