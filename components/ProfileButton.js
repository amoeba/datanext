import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { cn, portal_path } from "../lib/api";
import { StoreContext } from "../lib/store";

export default function ProfileButton() {
  const [href, setHref] = useState(null);

  useEffect(() => {
    async function updateHref() {
      setHref(cn + portal_path + window.location.href);
    }

    updateHref();
  }, []);

  const { isLoggedIn, name } = useContext(StoreContext);

  let content;

  if (isLoggedIn[0]) {
    content = (
      <Link href="/profile">
        <a>{name[0]}</a>
      </Link>
    );
  } else if (href && !isLoggedIn[0]) {
    content = (
      <Link href={href}>
        <a>Sign In</a>
      </Link>
    );
  } else {
    content = "Loading...";
  }

  return <div>{content}</div>;
}
