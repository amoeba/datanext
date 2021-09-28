import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { cn } from "../lib/api";
import { StoreContext } from "../lib/store"

export default function SignInButton() {
  const [href, setHref] = useState(null);

  useEffect(async () => {
    setHref(cn + "/portal/oauth?action=start&target=" + window.location.href)
  })

  const { isLoggedIn, name } = useContext(StoreContext)

  let content

  if (isLoggedIn[0]) {
    content = <Link href="/profile">
      <a>{name[0]}</a>
    </Link>
  } else if (href && !isLoggedIn[0]) {
    content = "Sign In"
  } else {
    content = "Loading..."
  }

  return <div>
    {content}
  </div>
}
