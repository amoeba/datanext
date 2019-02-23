import React from "react";
import "isomorphic-fetch";
import urlencode from "urlencode";

import Header from "../components/header";
import Metadata from "../components/metadata";
import PackageTable from "../components/package_table";

export default class extends React.Component {
  render() {
    return (
      <div>
        <Header />
        table
        <PackageTable id={urlencode.decode(this.props.url.query.package)} />
        table
        <Metadata id={urlencode.decode(this.props.url.query.metadata)} />
      </div>
    );
  }
}
