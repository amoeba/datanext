import React from "react";
import Head from 'next/head'
import "isomorphic-fetch";
import urlencode from "urlencode";

import Header from "../components/header";
import Metadata from "../components/metadata";

export default class extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Object</title>
        </Head>
        <Header />
        <Metadata id={urlencode.decode(this.props.url.query.id)} />
      </div>
    );
  }
}
