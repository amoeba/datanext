import React from "react";
import Head from 'next/head'

import Header from "../components/header";
import Search from "../components/search";

export default class extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Search</title>
        </Head>
        <Header />
        <Search />
      </div>
    );
  }
}
