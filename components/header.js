import React from "react";
import Link from "next/link";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Link href="/">
          <a>Home</a>
        </Link>
        <style jsx>{`
          header {
            margin: 0.5rem;
          }

          header a {
            text-decoration: none;
          }
          
          header a:visited {
            color: blue;
          }
        `}</style>
      </header>
    );
  }
}
