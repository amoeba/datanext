import React from "react";
import Link from "next/link";

export default class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    );
  }
}
