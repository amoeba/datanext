import React from "react";
import Head from 'next/head'
import "isomorphic-fetch";
import urlencode from "urlencode";

import Header from "../components/header";
import Metadata from "../components/metadata";
import PackageTable from "../components/package_table";

export default class extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Package</title>
        </Head>
        <Header />
        table
        <PackageTable id={urlencode.decode(this.props.url.query.package)} />
        table
        <Metadata id={urlencode.decode(this.props.url.query.metadata)} />
      </div>
    );
  }
}
