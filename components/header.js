import React from "react";
import Link from "next/link";

export default class Header extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      loginURL: null
    };
  }

  componentDidMount () {
    this.setState({
      loginURL: 'https://cn.dataone.org/portal/oauth?action=start&target=' + encodeURIComponent(window.location.href)
    })
  }

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
        <Link href="/profile">
          <a>Profile</a>
        </Link>
        <a href={this.state.loginURL}>Log In</a>
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
