import React from "react";
import App, { Container } from "next/app";
import fetch from "isomorphic-fetch";

import TokenContext from "../shared/token-context";

class MyApp extends App {
  constructor(props) {
    super(props);

    this.updateToken = () => {
      // TODO: Factor out into config
      fetch("https://cn.dataone.org/portal/token", { credentials: "include" })
        .then(resp => {
          return resp.text();
        })
        .then(token => {
          this.setState(() => ({
            token: token
          }));
        });
    };

    this.state = {
      token: null,
      updateToken: this.updateToken
    };
  }

  componentDidMount() {
    this.updateToken();
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <TokenContext.Provider value={this.state}>
        <Component {...pageProps} />
      </TokenContext.Provider>
    );
  }
}

export default MyApp;
