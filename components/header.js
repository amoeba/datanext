import React from "react";
import Link from "next/link";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginURL: null
    };
  }

  componentDidMount() {
    this.setState({
      loginURL:
        "https://cn.dataone.org/portal/oauth?action=start&target=" +
        encodeURIComponent(window.location.href)
    });
  }

  render() {
    return (
      <header className="flex flex-row bg-gray-300 p-2">
        <Link href="/">
          <a className="mr-4 text-red-700 text-medium">📈</a>
        </Link>
        <Link href="/">
          <a className="mr-4 text-red-700 text-medium">Search</a>
        </Link>
        <Link href="/profile">
          <a className="mr-4 text-red-700 text-medium">Profile</a>
        </Link>
        <a className="mr-4 text-red-700 text-medium" href={this.state.loginURL}>
          Log In
        </a>
        <Link href="/about">
          <a className="mr-4 text-red-700 text-medium">About</a>
        </Link>
      </header>
    );
  }
}
