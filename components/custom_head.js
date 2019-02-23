import React from "react";
import Head from "next/head";

export default class CustomHead extends React.Component {
  render() {
    return (
      <Head>
        {this.props.children}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      </Head>
    );
  }
}