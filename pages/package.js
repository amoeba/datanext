import React from "react";
import urlencode from "urlencode";

import CustomHead from '../components/custom_head';
import Header from "../components/header";
import Metadata from "../components/metadata";
import PackageTable from "../components/package_table";

import "../style.css"

export default class extends React.Component {
  static getInitialProps ({ query }) {
    return {
      package: urlencode.decode(query.package),
      metadata: urlencode.decode(query.metadata)
    }
  }

  render() {
    return (
      <div>
        <CustomHead>
          <title>Package</title>
        </CustomHead>
        <Header />
        <PackageTable id={this.props.package} />
        <Metadata id={this.props.metadata} />
      </div>
    );
  }
};
