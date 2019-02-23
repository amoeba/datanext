import React from "react";
import "isomorphic-fetch";
import urlencode from "urlencode";

import CustomHead from '../components/custom_head';
import Header from "../components/header";
import Metadata from "../components/metadata";
import PackageTable from "../components/package_table";

export default class extends React.Component {
  render() {
    return (
      <div>
        <CustomHead>
          <title>Package</title>
        </CustomHead>
        <Header />
        <PackageTable id={urlencode.decode(this.props.url.query.package)} />
        <Metadata id={urlencode.decode(this.props.url.query.metadata)} />
      </div>
    );
  }
}
