import React from "react";
import Link from "next/link";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Link href="/">
          <a>📈</a>
        </Link>
        <Link href="/">
          <a>Search</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <style jsx>{`
          header {
            margin-bottom: 0.5rem;
          }

          header a {
            text-decoration: none;
            margin-right: 0.5rem;
          }

          header a:visited {
            color: blue;
          }
        `}</style>
      </header>
    );
  }
}
